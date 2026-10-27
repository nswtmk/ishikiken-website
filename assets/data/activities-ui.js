/*
 * 活動予定・活動履歴の表示（データは activities.js）
 * <div data-activities="upcoming" data-lang="ja"> … トップの活動予定（今日以降。信原ゼミは次の1回だけ）
 * <div data-activities="history"  data-lang="ja"> … 活動履歴（終わったもの。新しい順・年ごと）
 * 確認用：URLに ?today=2026-11-02 を付けると、その日として表示する。
 */
(function () {
  var D = window.ISHIKIKEN_ACTIVITIES;
  if (!D) return;

  var WD = { ja: ['日', '月', '火', '水', '木', '金', '土'], en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] };
  var MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  function today() {
    var m = /[?&]today=(\d{4}-\d{2}-\d{2})/.exec(location.search);
    if (m) return m[1];
    return new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10); // 日本時間の日付
  }
  function parts(s) { var p = s.split('-'); return { y: +p[0], m: +p[1], d: p[2] ? +p[2] : null }; }
  function wday(s) { var p = parts(s); return new Date(Date.UTC(p.y, p.m - 1, p.d)).getUTCDay(); }
  function lastDay(it) {
    var e = it.end || it.start;
    if (it.precision === 'month') { var p = parts(e); return e + '-' + new Date(Date.UTC(p.y, p.m, 0)).getUTCDate(); }
    return e;
  }
  function merge(a, b) { var o = {}, k; for (k in a) o[k] = a[k]; if (b) for (k in b) o[k] = b[k]; return o; }

  function seminarItems() {
    var S = D.seminar; if (!S) return [];
    return S.sessions.map(function (s) {
      var j = S.ja, e = S.en;
      return {
        id: 'nobuhara-' + s.n, start: s.date, seminar: true,
        ja: { title: j.name, tag: j.tag, tagClass: 'open',
              body: ['次回 第' + s.n + '回「' + s.ja + '」', j.time + '｜' + j.place + '｜' + j.lecturer],
              links: [{ t: '詳細はこちら', href: S.page }] },
        en: { title: e.name, tag: e.tag, tagClass: 'open',
              body: ['Next: Session ' + s.n + ', “' + s.en + '”', e.time + ' | ' + e.place + ' | ' + e.lecturer],
              links: [{ t: 'Details (Japanese)', href: S.page }] },
        past: {
          ja: { title: j.short + ' 第' + s.n + '回「' + s.ja + '」', tag: '', body: [j.place + '｜' + j.lecturer],
                links: s.summary ? [{ t: 'AIまとめ', href: s.summary }, { t: '信原ゼミについて', href: S.page }] : [{ t: '信原ゼミについて', href: S.page }] },
          en: { title: e.short + ', Session ' + s.n + ': “' + s.en + '”', tag: '', body: [e.place + ' | ' + e.lecturer],
                links: s.summary ? [{ t: 'AI summary (Japanese)', href: s.summary }, { t: 'About the seminar (Japanese)', href: S.page }] : [{ t: 'About the seminar (Japanese)', href: S.page }] }
        }
      };
    });
  }

  function dateHTML(it, lang) {
    var a = parts(it.start);
    if (it.precision === 'month') return lang === 'ja' ? a.m + '<span>月</span>' : MON[a.m - 1];
    var h = a.m + '.' + a.d, sm;
    if (it.end && it.end !== it.start) { var b = parts(it.end); h += '<span>–' + b.m + '.' + b.d + '</span>'; }
    var v = it[lang] || {};
    if (v.when) sm = v.when;
    else {
      sm = WD[lang][wday(it.start)];
      if (it.end && it.end !== it.start) sm += '–' + WD[lang][wday(it.end)];
    }
    return h + '<small>' + sm + '</small>';
  }

  function linkHTML(l) {
    var ext = /^https?:/.test(l.href);
    return '<a class="sched-link" href="' + l.href + '"' + (ext ? ' target="_blank" rel="noopener">' + l.t + ' ↗' : '>' + l.t + ' →') + '</a>';
  }

  function itemHTML(it, lang, past) {
    var v = merge(it[lang], past && it.past ? it.past[lang] : null);
    var h = '<div class="sched-item"><div class="sd">' + dateHTML(it, lang) + '</div><div><h4>' + v.title;
    if (v.tag) h += '<span class="sched-tag ' + (v.tagClass || 'open') + '">' + v.tag + '</span>';
    h += '</h4>';
    var lines = (v.body || []).slice();
    if (v.links && v.links.length) lines.push(v.links.map(linkHTML).join(''));
    if (lines.length) h += '<p>' + lines.join('<br>') + '</p>';
    return h + '</div></div>';
  }

  function all() { return D.items.concat(seminarItems()); }

  function upcoming(lang, t) {
    var seenSeminar = false;
    return all().filter(function (it) { return lastDay(it) >= t; })
      .sort(function (a, b) { return a.start < b.start ? -1 : a.start > b.start ? 1 : 0; })
      .filter(function (it) { if (!it.seminar) return true; if (seenSeminar) return false; seenSeminar = true; return true; })
      .map(function (it) { return itemHTML(it, lang, false); }).join('');
  }

  function history(lang, t) {
    var list = all().filter(function (it) { return lastDay(it) < t; })
      .sort(function (a, b) { var x = b.start.localeCompare(a.start); return x || (b.end || b.start).localeCompare(a.end || a.start); });
    var out = '', year = null;
    list.forEach(function (it) {
      var y = it.start.slice(0, 4);
      if (y !== year) {
        if (year) out += '</div>';
        out += '<h3 class="hist-year" id="y' + y + '">' + y + '</h3><div class="sched-list">';
        year = y;
      }
      out += itemHTML(it, lang, true);
    });
    if (year) out += '</div>';
    return out;
  }

  function run() {
    var t = today();
    var els = document.querySelectorAll('[data-activities]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i], lang = el.getAttribute('data-lang') || 'ja', kind = el.getAttribute('data-activities');
      if (kind === 'upcoming') {
        var h = upcoming(lang, t);
        el.innerHTML = h || '<p class="sched-empty">' + (lang === 'ja' ? '現在お知らせできる予定はありません。' : 'No upcoming events at the moment.') + '</p>';
      } else if (kind === 'history') {
        el.innerHTML = history(lang, t);
      }
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
