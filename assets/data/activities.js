/*
 * 意識研 活動データ（活動予定 と 活動履歴 の共通データ）
 *
 * - トップ（/ と /en/）の「活動予定」と、/history/ ・ /en/history/ の「活動履歴」は、このファイルだけを見て表示する。
 * - 終了日（end。なければ start）が「今日（日本時間）」より前のものは自動で活動履歴に回る。
 * - 信原ゼミ（seminar.sessions）は、活動予定には「次の1回」だけが出て、終わった回は履歴に回る。
 *   AIまとめができたら、その回に "summary": "/projects/hard-problem/nobuhara-seminar/02/" のように足す。
 * - 予定を足すときは items に1件足す。日付は "YYYY-MM-DD"（月までしかわからないものは "YYYY-MM" と "precision": "month"）。
 *   ja / en にそれぞれ title・tag（任意）・tagClass（open か closed）・body（行の配列）・links（{t, href} の配列）。
 *   終わったあとの表示を変えたいときは past.ja / past.en に上書きしたい項目だけ書く（例：申込リンク → レポート）。
 * - HTML側（index.html・en/index.html・history/）には、JSが動かない環境向けに作成時点の表示も書いてある。
 */
window.ISHIKIKEN_ACTIVITIES = {
 "seminar": {
  "ja": {
   "name": "信原ゼミ（心の哲学とAIの哲学）",
   "short": "信原ゼミ",
   "tag": "参加者募集中",
   "place": "オンライン（Zoom）",
   "time": "19:30〜22:30",
   "lecturer": "講師：信原幸弘（東京大学名誉教授）"
  },
  "en": {
   "name": "Nobuhara Seminar (Philosophy of Mind and Philosophy of AI)",
   "short": "Nobuhara Seminar",
   "tag": "Participants welcome",
   "place": "Online (Zoom)",
   "time": "19:30–22:30 JST",
   "lecturer": "Lecturer: Yukihiro Nobuhara (Professor Emeritus, The University of Tokyo)"
  },
  "page": "/projects/hard-problem/",
  "sessions": [
   {
    "n": 1,
    "date": "2026-09-23",
    "ja": "心身二元論の誘惑",
    "en": "The Temptation of Mind–Body Dualism",
    "summary": "/projects/hard-problem/nobuhara-seminar/01/"
   },
   {
    "n": 2,
    "date": "2026-10-28",
    "ja": "物的一元論の挑戦",
    "en": "The Challenge of Physicalist Monism"
   },
   {
    "n": 3,
    "date": "2026-11-25",
    "ja": "心の志向性とは何か",
    "en": "What Is the Intentionality of the Mind?"
   },
   {
    "n": 4,
    "date": "2026-12-23",
    "ja": "心はいかにして志向性をもつのか",
    "en": "How Does the Mind Come to Have Intentionality?"
   },
   {
    "n": 5,
    "date": "2027-01-27",
    "ja": "意識のハードプロブレム",
    "en": "The Hard Problem of Consciousness"
   },
   {
    "n": 6,
    "date": "2027-02-24",
    "ja": "クオリアは自然化できるか",
    "en": "Can Qualia Be Naturalized?"
   },
   {
    "n": 7,
    "date": "2027-03-24",
    "ja": "自己とは何か",
    "en": "What Is the Self?"
   },
   {
    "n": 8,
    "date": "2027-04-28",
    "ja": "自由意志は存在するか",
    "en": "Does Free Will Exist?"
   },
   {
    "n": 9,
    "date": "2027-05-26",
    "ja": "チューリングテストと中国語の部屋",
    "en": "The Turing Test and the Chinese Room"
   },
   {
    "n": 10,
    "date": "2027-06-23",
    "ja": "フレーム問題",
    "en": "The Frame Problem"
   },
   {
    "n": 11,
    "date": "2027-07-28",
    "ja": "シンボル接地問題",
    "en": "The Symbol Grounding Problem"
   },
   {
    "n": 12,
    "date": "2027-08-25",
    "ja": "強いAIと弱いAI",
    "en": "Strong AI and Weak AI"
   }
  ]
 },
 "items": [
  {
   "id": "kenji-retreat-2026-11",
   "start": "2026-10-31",
   "end": "2026-11-01",
   "ja": {
    "title": "宮沢賢治読書会 合宿・公開読書会",
    "tag": "11/1は一般公開",
    "tagClass": "open",
    "body": [
     "栃木・大田原（花園創）",
     "11/1（日）13:00〜 公開読書会「賢治から里山を見る／里山から賢治を見る」"
    ],
    "links": [
     {
      "t": "公開読書会の参加申込（Peatix）",
      "href": "https://ishikiken-kenji-satoyama.peatix.com/"
     }
    ]
   },
   "en": {
    "title": "Kenji Miyazawa Reading Group Retreat &amp; Public Reading Session",
    "tag": "Open to the public on Nov 1",
    "tagClass": "open",
    "body": [
     "Ōtawara, Tochigi (Hanazono-sō)",
     "Public reading session: Sun, Nov 1, from 13:00"
    ],
    "links": [
     {
      "t": "Register for the public session (Peatix, Japanese)",
      "href": "https://ishikiken-kenji-satoyama.peatix.com/"
     }
    ]
   },
   "past": {
    "ja": {
     "tag": "",
     "links": [
      {
       "t": "意識と里山プロジェクト",
       "href": "/projects/satoyama/"
      }
     ]
    },
    "en": {
     "tag": "",
     "links": [
      {
       "t": "Consciousness and Satoyama project (Japanese)",
       "href": "/projects/satoyama/"
      }
     ]
    }
   }
  },
  {
   "id": "conference-2026",
   "start": "2026-10-24",
   "end": "2026-10-25",
   "ja": {
    "title": "カンファレンス 2026「マシン・コンシャスネス」",
    "tag": "一般公開",
    "tagClass": "open",
    "body": [
     "東京ミッドタウン（東京・六本木）｜オンライン無料配信"
    ],
    "links": [
     {
      "t": "オンライン参加申込（Peatix・無料）",
      "href": "https://ishikiken-c2026.peatix.com/"
     }
    ]
   },
   "en": {
    "title": "Conference 2026 “Machine Consciousness”",
    "tag": "Open to the public",
    "tagClass": "open",
    "body": [
     "Tokyo Midtown (Roppongi, Tokyo) | Free online streaming"
    ],
    "links": [
     {
      "t": "Register to join online (Peatix, free)",
      "href": "https://ishikiken-c2026.peatix.com/"
     }
    ]
   },
   "past": {
    "ja": {
     "tag": "",
     "links": [
      {
       "t": "開催レポート",
       "href": "/conference2026/report/"
      }
     ]
    },
    "en": {
     "tag": "",
     "links": [
      {
       "t": "Conference report (Japanese)",
       "href": "/conference2026/report/"
      }
     ]
    }
   }
  },
  {
   "id": "kenji-20",
   "start": "2026-09-26",
   "ja": {
    "title": "宮沢賢治読書会 第20回",
    "body": [
     "「春」「[道べの粗朶に]」「饗宴」（『春と修羅』第三集）"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/kenji/#r20"
     }
    ]
   },
   "en": {
    "title": "Kenji Miyazawa Reading Group, No. 20",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/kenji/#r20"
     }
    ]
   }
  },
  {
   "id": "retreat-2026",
   "start": "2026-09-25",
   "end": "2026-09-28",
   "ja": {
    "title": "研究者のための瞑想リトリート 2026",
    "body": [
     "ホリスティックリトリート 穂高養生園（長野・安曇野）｜講師：藤田一照｜瞑想心理学研究プロジェクト主催・意識研究財団協力"
    ],
    "links": [
     {
      "t": "仏教と意識プロジェクト",
      "href": "/projects/buddhism/"
     }
    ]
   },
   "en": {
    "title": "Meditation Retreat for Researchers 2026",
    "body": [
     "Hotaka Yojoen (Azumino, Nagano) | Teacher: Issho Fujita | Organized by the Meditation Psychology Research Project, in cooperation with CRF"
    ],
    "links": [
     {
      "t": "Buddhism and Consciousness project (Japanese)",
      "href": "/projects/buddhism/"
     }
    ]
   }
  },
  {
   "id": "bergson-20",
   "start": "2026-09-16",
   "ja": {
    "title": "ベルクソン読書会 第20回（合宿）",
    "body": [
     "山梨・北杜（2日目は意識研の森）｜『物質と記憶』第二章 (pp.126-155)"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/bergson/#r20"
     }
    ]
   },
   "en": {
    "title": "Bergson Reading Group, No. 20 (retreat)",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/bergson/#r20"
     }
    ],
    "body": [
     "Hokuto, Yamanashi (day 2 at the CRF Forest)"
    ]
   },
   "end": "2026-09-17"
  },
  {
   "id": "buddhist-epistemology-2026-late",
   "start": "2026-09-04",
   "end": "2026-09-15",
   "ja": {
    "title": "ヴィジュアライゼーションを理解するための仏教認識論（後期・全4回）",
    "when": "全4回・金火",
    "body": [
     "オンライン（Zoom）｜講師：ケンポ・カルチュン教授（英語・日本語通訳付き）｜瞑想心理学研究プロジェクト主催・意識研究財団協力"
    ],
    "links": [
     {
      "t": "仏教と意識プロジェクト",
      "href": "/projects/buddhism/"
     }
    ]
   },
   "en": {
    "title": "Buddhist Epistemology for Understanding Visualization (Part 2, 4 sessions)",
    "when": "4 sessions",
    "body": [
     "Online (Zoom) | In English with Japanese interpretation | Organized by the Meditation Psychology Research Project, in cooperation with CRF"
    ],
    "links": [
     {
      "t": "Buddhism and Consciousness project (Japanese)",
      "href": "/projects/buddhism/"
     }
    ]
   }
  },
  {
   "id": "kenji-19",
   "start": "2026-08-22",
   "ja": {
    "title": "宮沢賢治読書会 第19回",
    "body": [
     "「岩手軽便鉄道 七月（ジャズ）」「鬼言（幻聴）」「告別」（『春と修羅』第二集）"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/kenji/#r19"
     }
    ]
   },
   "en": {
    "title": "Kenji Miyazawa Reading Group, No. 19",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/kenji/#r19"
     }
    ]
   }
  },
  {
   "id": "forest-gathering-2026",
   "start": "2026-08",
   "precision": "month",
   "ja": {
    "title": "FOREST Gathering",
    "body": [
     "意識研の森（山梨・北杜）"
    ],
    "links": [
     {
      "t": "意識研の森",
      "href": "/projects/forest/"
     }
    ]
   },
   "en": {
    "title": "FOREST Gathering",
    "body": [
     "CRF Forest (Hokuto, Yamanashi)"
    ],
    "links": [
     {
      "t": "The CRF Forest (Japanese)",
      "href": "/projects/forest/"
     }
    ]
   }
  },
  {
   "id": "kenji-18",
   "start": "2026-07-25",
   "ja": {
    "title": "宮沢賢治読書会 第18回",
    "body": [
     "「[Largoや青い雲滃やながれ]」（『春と修羅』第二集）"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/kenji/#r18"
     }
    ]
   },
   "en": {
    "title": "Kenji Miyazawa Reading Group, No. 18",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/kenji/#r18"
     }
    ]
   }
  },
  {
   "id": "bergson-19",
   "start": "2026-07-14",
   "ja": {
    "title": "ベルクソン読書会 第19回",
    "body": [
     "『物質と記憶』第二章 (pp.107-126)"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/bergson/#r19"
     }
    ]
   },
   "en": {
    "title": "Bergson Reading Group, No. 19",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/bergson/#r19"
     }
    ]
   }
  },
  {
   "id": "kenji-17",
   "start": "2026-06-20",
   "ja": {
    "title": "宮沢賢治読書会 第17回",
    "body": [
     "「未来圈からの影」「朝餐」（『春と修羅』第二集）"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/kenji/#r17"
     }
    ]
   },
   "en": {
    "title": "Kenji Miyazawa Reading Group, No. 17",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/kenji/#r17"
     }
    ]
   }
  },
  {
   "id": "bergson-18",
   "start": "2026-06-09",
   "ja": {
    "title": "ベルクソン読書会 第18回",
    "body": [
     "『物質と記憶』第一章 (pp.82-103)"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/bergson/#r18"
     }
    ]
   },
   "en": {
    "title": "Bergson Reading Group, No. 18",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/bergson/#r18"
     }
    ]
   }
  },
  {
   "id": "kenji-symposium-2026",
   "start": "2026-05-30",
   "ja": {
    "title": "宮沢賢治シンポジウム",
    "body": [
     "意識と里山プロジェクト"
    ],
    "links": [
     {
      "t": "意識と里山プロジェクト",
      "href": "/projects/satoyama/"
     }
    ]
   },
   "en": {
    "title": "Kenji Miyazawa Symposium",
    "body": [
     "Consciousness and Satoyama project"
    ],
    "links": [
     {
      "t": "Consciousness and Satoyama project (Japanese)",
      "href": "/projects/satoyama/"
     }
    ]
   }
  },
  {
   "id": "bergson-17",
   "start": "2026-05-12",
   "ja": {
    "title": "ベルクソン読書会 第17回",
    "body": [
     "『物質と記憶』第一章 (pp.63-82)"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/bergson/#r17"
     }
    ]
   },
   "en": {
    "title": "Bergson Reading Group, No. 17",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/bergson/#r17"
     }
    ]
   }
  },
  {
   "id": "kenji-16",
   "start": "2026-04-25",
   "ja": {
    "title": "宮沢賢治読書会 第16回",
    "body": [
     "「旅程幻想」「氷質の冗談」（『春と修羅』第二集 pp.137-141）"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/kenji/#r16"
     }
    ]
   },
   "en": {
    "title": "Kenji Miyazawa Reading Group, No. 16",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/kenji/#r16"
     }
    ]
   }
  },
  {
   "id": "bergson-16",
   "start": "2026-04-06",
   "ja": {
    "title": "ベルクソン読書会 第16回",
    "body": [
     "『物質と記憶』第一章 (pp.40-63)"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/bergson/#r16"
     }
    ]
   },
   "en": {
    "title": "Bergson Reading Group, No. 16",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/bergson/#r16"
     }
    ]
   }
  },
  {
   "id": "kenji-15",
   "start": "2026-04-05",
   "ja": {
    "title": "宮沢賢治読書会 第15回",
    "body": [
     "「[夜の湿気と風がさびしくいりまじり]」「善鬼呪禁」「母に云う」（pp.131-136）"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/kenji/#r15"
     }
    ]
   },
   "en": {
    "title": "Kenji Miyazawa Reading Group, No. 15",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/kenji/#r15"
     }
    ]
   }
  },
  {
   "id": "bergson-15",
   "start": "2026-03-02",
   "ja": {
    "title": "ベルクソン読書会 第15回",
    "body": [
     "『物質と記憶』第一章 (pp.21-40)"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/bergson/#r15"
     }
    ]
   },
   "en": {
    "title": "Bergson Reading Group, No. 15",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/bergson/#r15"
     }
    ]
   }
  },
  {
   "id": "kenji-14",
   "start": "2026-02-28",
   "ja": {
    "title": "宮沢賢治読書会 第14回",
    "body": [
     "「[この森を通りぬければ]」「薤露青」「春」「秋と負債」「産業組合青年会」（『春と修羅』pp.119-130）"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/kenji/#r14"
     }
    ]
   },
   "en": {
    "title": "Kenji Miyazawa Reading Group, No. 14",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/kenji/#r14"
     }
    ]
   }
  },
  {
   "id": "bergson-14",
   "start": "2026-02-02",
   "ja": {
    "title": "ベルクソン読書会 第14回",
    "body": [
     "『物質と記憶』 (pp.9-20)"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/bergson/#r14"
     }
    ]
   },
   "en": {
    "title": "Bergson Reading Group, No. 14",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/bergson/#r14"
     }
    ]
   }
  },
  {
   "id": "kenji-13",
   "start": "2026-01-24",
   "ja": {
    "title": "宮沢賢治読書会 第13回",
    "body": [
     "「[いま来た角に]」「曠原淑女」「馬」「牛」「鳥の遷移」（『春と修羅』pp.110-118）"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/kenji/#r13"
     }
    ]
   },
   "en": {
    "title": "Kenji Miyazawa Reading Group, No. 13",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/kenji/#r13"
     }
    ]
   }
  },
  {
   "id": "bergson-13",
   "start": "2026-01-12",
   "ja": {
    "title": "ベルクソン読書会 第13回",
    "body": [
     "『時間と自由』第三章 (pp.261-287)"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/bergson/#r13"
     }
    ]
   },
   "en": {
    "title": "Bergson Reading Group, No. 13",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/bergson/#r13"
     }
    ]
   }
  },
  {
   "id": "kenji-12",
   "start": "2025-12-27",
   "ja": {
    "title": "宮沢賢治読書会 第12回",
    "body": [
     "「休息」「烏」（『春と修羅』pp.107-110）"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/kenji/#r12"
     }
    ]
   },
   "en": {
    "title": "Kenji Miyazawa Reading Group, No. 12",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/kenji/#r12"
     }
    ]
   }
  },
  {
   "id": "bergson-12",
   "start": "2025-12-01",
   "ja": {
    "title": "ベルクソン読書会 第12回",
    "body": [
     "『時間と自由』第三章 (pp.238-261)"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/bergson/#r12"
     }
    ]
   },
   "en": {
    "title": "Bergson Reading Group, No. 12",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/bergson/#r12"
     }
    ]
   }
  },
  {
   "id": "kenji-11",
   "start": "2025-11-28",
   "ja": {
    "title": "宮沢賢治読書会 第11回",
    "body": [
     "「五輪峠（先駆形A）」「晴天恣意」「早春独白」（『春と修羅』pp.97-106）"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/kenji/#r11"
     }
    ]
   },
   "en": {
    "title": "Kenji Miyazawa Reading Group, No. 11",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/kenji/#r11"
     }
    ]
   }
  },
  {
   "id": "bergson-11",
   "start": "2025-11-17",
   "ja": {
    "title": "ベルクソン読書会 第11回",
    "body": [
     "『時間と自由』第三章 (pp.219-237)"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/bergson/#r11"
     }
    ]
   },
   "en": {
    "title": "Bergson Reading Group, No. 11",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/bergson/#r11"
     }
    ]
   }
  },
  {
   "id": "kenji-10",
   "start": "2025-10-10",
   "ja": {
    "title": "宮沢賢治読書会 第10回（合宿）",
    "body": [
     "山形・高畠｜『農民芸術概論綱要』"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/kenji/#r10"
     }
    ]
   },
   "en": {
    "title": "Kenji Miyazawa Reading Group, No. 10 (retreat)",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/kenji/#r10"
     }
    ],
    "body": [
     "Takahata, Yamagata"
    ]
   },
   "end": "2025-10-11"
  },
  {
   "id": "retreat-2025",
   "start": "2025-10-03",
   "end": "2025-10-06",
   "ja": {
    "title": "研究者のための瞑想リトリート 2025",
    "body": [
     "静岡・日月倶楽部｜立命館大学との共催"
    ],
    "links": [
     {
      "t": "レポート（note）",
      "href": "https://note.com/ishiki_ken/n/nfc164a95b60c"
     }
    ]
   },
   "en": {
    "title": "Meditation Retreat for Researchers 2025",
    "body": [
     "Hitsuki Club (Shizuoka) | Co-hosted with Ritsumeikan University"
    ],
    "links": [
     {
      "t": "Report (note, Japanese)",
      "href": "https://note.com/ishiki_ken/n/nfc164a95b60c"
     }
    ]
   }
  },
  {
   "id": "moc6-2025",
   "start": "2025-10-01",
   "end": "2025-10-04",
   "ja": {
    "title": "国際学会 Models of Consciousness 6（MoC6）",
    "body": [
     "北海道大学（札幌）｜初のアジア開催"
    ],
    "links": [
     {
      "t": "2025年度 国際学会レポート",
      "href": "/reports/suzuki2025/"
     }
    ]
   },
   "en": {
    "title": "International conference Models of Consciousness 6 (MoC6)",
    "body": [
     "Hokkaido University (Sapporo) | First held in Asia"
    ],
    "links": [
     {
      "t": "2025 international conference report (Japanese)",
      "href": "/reports/suzuki2025/"
     }
    ]
   }
  },
  {
   "id": "kenji-09",
   "start": "2025-09-26",
   "ja": {
    "title": "宮沢賢治読書会 第9回",
    "body": [
     "「噴火湾（ノクターン）」「過去情炎」「冬と銀河ステーション」"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/kenji/#r9"
     }
    ]
   },
   "en": {
    "title": "Kenji Miyazawa Reading Group, No. 9",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/kenji/#r9"
     }
    ]
   }
  },
  {
   "id": "bergson-09",
   "start": "2025-09-18",
   "ja": {
    "title": "ベルクソン読書会 第9・10回（合宿）",
    "body": [
     "山梨・北杜｜『時間と自由』第三章 (pp.169-219)"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/bergson/#r9"
     }
    ]
   },
   "en": {
    "title": "Bergson Reading Group, Nos. 9–10 (retreat)",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/bergson/#r9"
     }
    ],
    "body": [
     "Hokuto, Yamanashi"
    ]
   },
   "end": "2025-09-19"
  },
  {
   "id": "kenji-08",
   "start": "2025-08-22",
   "ja": {
    "title": "宮沢賢治読書会 第8回",
    "body": [
     "「青森挽歌」"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/kenji/#r8"
     }
    ]
   },
   "en": {
    "title": "Kenji Miyazawa Reading Group, No. 8",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/kenji/#r8"
     }
    ]
   }
  },
  {
   "id": "bergson-08",
   "start": "2025-08-04",
   "ja": {
    "title": "ベルクソン読書会 第8回",
    "body": [
     "『時間と自由』第二章 (pp.146-167)"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/bergson/#r8"
     }
    ]
   },
   "en": {
    "title": "Bergson Reading Group, No. 8",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/bergson/#r8"
     }
    ]
   }
  },
  {
   "id": "kenji-07",
   "start": "2025-07-25",
   "ja": {
    "title": "宮沢賢治読書会 第7回",
    "body": [
     "「マサニエロ」「永訣の朝」「松の針」「無声慟哭」"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/kenji/#r7"
     }
    ]
   },
   "en": {
    "title": "Kenji Miyazawa Reading Group, No. 7",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/kenji/#r7"
     }
    ]
   }
  },
  {
   "id": "bergson-07",
   "start": "2025-07-07",
   "ja": {
    "title": "ベルクソン読書会 第7回",
    "body": [
     "『時間と自由』第二章 (pp.127-145)"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/bergson/#r7"
     }
    ]
   },
   "en": {
    "title": "Bergson Reading Group, No. 7",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/bergson/#r7"
     }
    ]
   }
  },
  {
   "id": "kenji-06",
   "start": "2025-06-27",
   "ja": {
    "title": "宮沢賢治読書会 第6回",
    "body": [
     "「林と思想」「青い槍の葉」「報告」「岩手山」「高原」「原体剣舞連」"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/kenji/#r6"
     }
    ]
   },
   "en": {
    "title": "Kenji Miyazawa Reading Group, No. 6",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/kenji/#r6"
     }
    ]
   }
  },
  {
   "id": "bergson-06",
   "start": "2025-06-09",
   "ja": {
    "title": "ベルクソン読書会 第6回",
    "body": [
     "『時間と自由』第二章 (pp.93-126)"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/bergson/#r6"
     }
    ]
   },
   "en": {
    "title": "Bergson Reading Group, No. 6",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/bergson/#r6"
     }
    ]
   }
  },
  {
   "id": "kenji-05",
   "start": "2025-05-30",
   "ja": {
    "title": "宮沢賢治読書会 第5回",
    "body": [
     "「小岩井農場パート一、パート九」"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/kenji/#r5"
     }
    ]
   },
   "en": {
    "title": "Kenji Miyazawa Reading Group, No. 5",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/kenji/#r5"
     }
    ]
   }
  },
  {
   "id": "bergson-05",
   "start": "2025-05-12",
   "ja": {
    "title": "ベルクソン読書会 第5回",
    "body": [
     "『時間と自由』第一章 (pp.70-92)"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/bergson/#r5"
     }
    ]
   },
   "en": {
    "title": "Bergson Reading Group, No. 5",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/bergson/#r5"
     }
    ]
   }
  },
  {
   "id": "kenji-04",
   "start": "2025-04-25",
   "ja": {
    "title": "宮沢賢治読書会 第4回",
    "body": [
     "「陽ざしとかれくさ」「雲の信号」「休息」「蠕虫舞手」"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/kenji/#r4"
     }
    ]
   },
   "en": {
    "title": "Kenji Miyazawa Reading Group, No. 4",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/kenji/#r4"
     }
    ]
   }
  },
  {
   "id": "bergson-04",
   "start": "2025-04-14",
   "ja": {
    "title": "ベルクソン読書会 第4回",
    "body": [
     "『時間と自由』第一章 (pp.47-69)"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/bergson/#r4"
     }
    ]
   },
   "en": {
    "title": "Bergson Reading Group, No. 4",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/bergson/#r4"
     }
    ]
   }
  },
  {
   "id": "kenji-03",
   "start": "2025-03-28",
   "ja": {
    "title": "宮沢賢治読書会 第3回",
    "body": [
     "「春と修羅」「風景とオルゴール」「恋と病熱」"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/kenji/#r3"
     }
    ]
   },
   "en": {
    "title": "Kenji Miyazawa Reading Group, No. 3",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/kenji/#r3"
     }
    ]
   }
  },
  {
   "id": "bergson-03",
   "start": "2025-03-10",
   "ja": {
    "title": "ベルクソン読書会 第3回",
    "body": [
     "『時間と自由』第一章 (pp.25-46)"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/bergson/#r3"
     }
    ]
   },
   "en": {
    "title": "Bergson Reading Group, No. 3",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/bergson/#r3"
     }
    ]
   }
  },
  {
   "id": "kenji-02",
   "start": "2025-02-28",
   "ja": {
    "title": "宮沢賢治読書会 第2回",
    "body": [
     "「サキノハカ」「鳥箱先生とタマガルタ」「序」"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/kenji/#r2"
     }
    ]
   },
   "en": {
    "title": "Kenji Miyazawa Reading Group, No. 2",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/kenji/#r2"
     }
    ]
   }
  },
  {
   "id": "bergson-02",
   "start": "2025-02-10",
   "ja": {
    "title": "ベルクソン読書会 第2回",
    "body": [
     "『時間と自由』第一章 (pp.5-24)"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/bergson/#r2"
     }
    ]
   },
   "en": {
    "title": "Bergson Reading Group, No. 2",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/bergson/#r2"
     }
    ]
   }
  },
  {
   "id": "kenji-01",
   "start": "2025-01-31",
   "ja": {
    "title": "宮沢賢治読書会 第1回",
    "body": [
     "打ち合わせ"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/kenji/#r1"
     }
    ]
   },
   "en": {
    "title": "Kenji Miyazawa Reading Group, No. 1",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/kenji/#r1"
     }
    ]
   }
  },
  {
   "id": "bergson-01",
   "start": "2025-01-16",
   "ja": {
    "title": "ベルクソン読書会 第1回",
    "body": [
     "『時間と自由』序論 (pp.1-4)"
    ],
    "links": [
     {
      "t": "記録",
      "href": "/records/bergson/#r1"
     }
    ]
   },
   "en": {
    "title": "Bergson Reading Group, No. 1",
    "links": [
     {
      "t": "Record (Japanese)",
      "href": "/records/bergson/#r1"
     }
    ]
   }
  },
  {
   "id": "meeting-2023-3-3",
   "start": "2023-12-13",
   "ja": {
    "title": "研究会「マインドフルネス」第3回",
    "body": [
     "話題提供：藤野正寛（NTTコミュニケーション科学基礎研究所）"
    ],
    "links": [
     {
      "t": "開催報告",
      "href": "/reports/2023-3/"
     }
    ]
   },
   "en": {
    "title": "Research meeting “Mindfulness,” session 3",
    "body": [
     "Speaker: Masahiro Fujino (NTT Communication Science Laboratories)"
    ],
    "links": [
     {
      "t": "Report (Japanese)",
      "href": "/reports/2023-3/"
     }
    ]
   }
  },
  {
   "id": "meeting-2023-3-2",
   "start": "2023-11-08",
   "ja": {
    "title": "研究会「マインドフルネス」第2回",
    "body": [
     "話題提供：藤野正寛（NTTコミュニケーション科学基礎研究所）"
    ],
    "links": [
     {
      "t": "開催報告",
      "href": "/reports/2023-3/"
     }
    ]
   },
   "en": {
    "title": "Research meeting “Mindfulness,” session 2",
    "body": [
     "Speaker: Masahiro Fujino (NTT Communication Science Laboratories)"
    ],
    "links": [
     {
      "t": "Report (Japanese)",
      "href": "/reports/2023-3/"
     }
    ]
   }
  },
  {
   "id": "meeting-2023-3-1",
   "start": "2023-10-11",
   "ja": {
    "title": "研究会「マインドフルネス」第1回",
    "body": [
     "話題提供：藤野正寛（NTTコミュニケーション科学基礎研究所）"
    ],
    "links": [
     {
      "t": "開催報告",
      "href": "/reports/2023-3/"
     }
    ]
   },
   "en": {
    "title": "Research meeting “Mindfulness,” session 1",
    "body": [
     "Speaker: Masahiro Fujino (NTT Communication Science Laboratories)"
    ],
    "links": [
     {
      "t": "Report (Japanese)",
      "href": "/reports/2023-3/"
     }
    ]
   }
  },
  {
   "id": "meeting-2023-2-3",
   "start": "2023-09-20",
   "ja": {
    "title": "研究会「ウェルビーイングとテクノロジー」第3回",
    "body": [
     "話題提供：渡邊淳司（NTTコミュニケーション科学基礎研究所）"
    ],
    "links": [
     {
      "t": "開催報告",
      "href": "/reports/2023-2/"
     }
    ]
   },
   "en": {
    "title": "Research meeting “Well-being and Technology,” session 3",
    "body": [
     "Speaker: Junji Watanabe (NTT Communication Science Laboratories)"
    ],
    "links": [
     {
      "t": "Report (Japanese)",
      "href": "/reports/2023-2/"
     }
    ]
   }
  },
  {
   "id": "meeting-2023-2-2",
   "start": "2023-08-22",
   "ja": {
    "title": "研究会「ウェルビーイングとテクノロジー」第2回",
    "body": [
     "話題提供：渡邊淳司（NTTコミュニケーション科学基礎研究所）"
    ],
    "links": [
     {
      "t": "開催報告",
      "href": "/reports/2023-2/"
     }
    ]
   },
   "en": {
    "title": "Research meeting “Well-being and Technology,” session 2",
    "body": [
     "Speaker: Junji Watanabe (NTT Communication Science Laboratories)"
    ],
    "links": [
     {
      "t": "Report (Japanese)",
      "href": "/reports/2023-2/"
     }
    ]
   }
  },
  {
   "id": "meeting-2023-2-1",
   "start": "2023-07-28",
   "ja": {
    "title": "研究会「ウェルビーイングとテクノロジー」第1回",
    "body": [
     "話題提供：渡邊淳司（NTTコミュニケーション科学基礎研究所）"
    ],
    "links": [
     {
      "t": "開催報告",
      "href": "/reports/2023-2/"
     }
    ]
   },
   "en": {
    "title": "Research meeting “Well-being and Technology,” session 1",
    "body": [
     "Speaker: Junji Watanabe (NTT Communication Science Laboratories)"
    ],
    "links": [
     {
      "t": "Report (Japanese)",
      "href": "/reports/2023-2/"
     }
    ]
   }
  },
  {
   "id": "meeting-2023-1-3",
   "start": "2023-06-13",
   "ja": {
    "title": "研究会「マインドアップローディング」第3回",
    "body": [
     "話題提供：渡辺正峰（東京大学）"
    ],
    "links": [
     {
      "t": "開催報告",
      "href": "/reports/2023-1/"
     }
    ]
   },
   "en": {
    "title": "Research meeting “Mind Uploading,” session 3",
    "body": [
     "Speaker: Masataka Watanabe (The University of Tokyo)"
    ],
    "links": [
     {
      "t": "Report (Japanese)",
      "href": "/reports/2023-1/"
     }
    ]
   }
  },
  {
   "id": "meeting-2023-1-2",
   "start": "2023-05-12",
   "ja": {
    "title": "研究会「マインドアップローディング」第2回",
    "body": [
     "話題提供：渡辺正峰（東京大学）"
    ],
    "links": [
     {
      "t": "開催報告",
      "href": "/reports/2023-1/"
     }
    ]
   },
   "en": {
    "title": "Research meeting “Mind Uploading,” session 2",
    "body": [
     "Speaker: Masataka Watanabe (The University of Tokyo)"
    ],
    "links": [
     {
      "t": "Report (Japanese)",
      "href": "/reports/2023-1/"
     }
    ]
   }
  },
  {
   "id": "meeting-2023-1-1",
   "start": "2023-04-11",
   "ja": {
    "title": "研究会「マインドアップローディング」第1回",
    "body": [
     "話題提供：渡辺正峰（東京大学）"
    ],
    "links": [
     {
      "t": "開催報告",
      "href": "/reports/2023-1/"
     }
    ]
   },
   "en": {
    "title": "Research meeting “Mind Uploading,” session 1",
    "body": [
     "Speaker: Masataka Watanabe (The University of Tokyo)"
    ],
    "links": [
     {
      "t": "Report (Japanese)",
      "href": "/reports/2023-1/"
     }
    ]
   }
  }
 ]
};
