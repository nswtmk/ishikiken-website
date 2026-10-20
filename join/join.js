/*
 * /join/ 入口ページ共通スクリプト（活動パネルのQRコードの行き先）
 *
 * ▼ 登録フォームのURLは、このファイルの JOIN_CONFIG だけを書き換える ▼
 *   formUrl : 共通登録フォームの公開URL（…/viewform）。空のままなら全ページ「登録フォームは準備中です」と表示。
 *   links   : プロジェクトごとの事前入力URL（Apps Script setupRegistration() が作る回答シートの「リンク」タブからコピー）。
 *             空のものは formUrl を使う。
 *   URLは素のURLのまま貼る（google.com/url?q= で包まれたものは無効として扱い、準備中の表示になる）。
 *   書き換えたら、下の各ページの join.js?v= の数字は変えなくてよい（数分でキャッシュが切れる）。
 */
var JOIN_CONFIG = {
  formUrl: '',
  links: {
    'all':          '', // 意識研の活動全般（カンファレンス・イベント） … /join/
    'forest':       '', // 意識研の森 … /join/forest/
    'hard-problem': '', // 意識のハードプロブレム（信原ゼミ） … /join/hard-problem/
    'origins':      '', // 意識の根源探求 … /join/origins/
    'buddhism':     '', // 仏教と意識 … /join/buddhism/
    'satoyama':     '', // 意識と里山 … /join/satoyama/
    'technology':   ''  // 意識とテクノロジー … /join/technology/
  }
};

(function () {
  function ok(u) {
    return typeof u === 'string' &&
      /^https:\/\/(docs\.google\.com\/forms\/|forms\.gle\/)/.test(u) &&
      u.indexOf('google.com/url') < 0;
  }
  var box = document.querySelector('.reg[data-project]');
  if (!box) return;
  var key = box.getAttribute('data-project');
  var link = JOIN_CONFIG.links && JOIN_CONFIG.links[key];
  var url = ok(link) ? link : JOIN_CONFIG.formUrl;
  if (!ok(url)) return; // 準備中の表示のまま
  var more = box.querySelector('.more');
  box.innerHTML = '';
  var a = document.createElement('a');
  a.className = 'btn';
  a.href = url;
  a.rel = 'noopener';
  a.textContent = '登録する';
  box.appendChild(a);
  if (more) box.appendChild(more);
})();
