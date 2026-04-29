"use strict";

/* ═══════════════════════════════════════════════════════════════════
   i18n.js — Bilingual content for "What Kind of Grape Are You?"

   Languages: en (English), zh-Hant (繁體中文 / Traditional Chinese)

   Notes
   - Grape varietal names (e.g. "Cabernet Sauvignon", "Pinot Noir") stay
     in Latin script in BOTH languages — international wine convention
     and matches the storage schema (red_match / white_match / fall_for
     are stored as English varietal names regardless of UI language).
   - "en" only carries the UI dictionary; the long-form English content
     for questions / grapes / pairings / chemistry stays in script.js
     and is captured into a snapshot at boot. zh-Hant carries the full
     Traditional Chinese translation.
   ═══════════════════════════════════════════════════════════════════ */

const I18N = {
  /* ─────────────────────────────────────────────────────────────────
     ENGLISH — UI strings only
     ───────────────────────────────────────────────────────────────── */
  en: {
    ui: {
      // <head> / page
      pageTitle: "What Grape Variety Are You?",

      // Landing
      landingTitleHTML: "What Kind of <em>Grape</em> Are You?",
      landingSubHTML:
        "15 questions. 5 personality dimensions. 50 grape varieties.<br>" +
        "Discover your <strong>red match</strong> and your <strong>white match</strong>.",
      landingCTA:  "Begin the Test",
      landingNote: "Takes about 3 minutes \u00B7 No sign-up required",
      landingCoverAlt: "What Kind of Grape Are You?",

      // Quiz nav
      questionLabelFmt: "Question {n}",
      progressFmt:      "{n} / {total}",
      backBtn:          "Back",
      nextBtn:          "Next",
      finalBtn:         "See My Results",

      // Calculating
      calcText: "Matching your personality to 50 grape varieties\u2026",

      // Results
      resultsTitle:        "Your Grape Pairing",
      redMatchBadge:       "Red Match",
      whiteMatchBadge:     "White Match",
      tanninPrefix:        "Tannin: ",
      acidityPrefix:       "Acidity: ",
      classicExpressions:  "Classic expressions: ",
      wikiLink:            "Learn more on Wikipedia \u2192",

      pairingHeading:    "Why This Pairing Works Together",
      pairingNoteFmt:    "This is a pairing of {sigRed} and {sigWhite}.",
      fallForHeading:    "The Grape You\u2019d Fall For",
      profileHeading:    "Where You Land on 5 Personality Dimensions",
      profileIntro:
        "Each bar shows where your answers place you between two traits. " +
        "The dot marks your position; center means balanced.",
      orbitHeading: "Also in Your Orbit",
      orbitIntro:   "Four more grapes that share your wavelength.",

      profileLeaning:  "Leaning",
      profileBalanced: "Balanced",
      profileSep:      " \u00B7 ",

      // Share
      shareTitleDownload:  "Save image",
      shareTitleInstagram: "Share on Instagram",
      shareTitleX:         "Share on X",
      shareTitleFacebook:  "Share on Facebook",
      shareTitleWhatsapp:  "Share on WhatsApp",
      shareTitleLine:      "Share on LINE",
      shareTitleCopy:      "Copy to clipboard",

      shareCopied:         "Copied to clipboard!",
      shareCopyFailed:     "Could not copy \u2014 try manually.",
      shareInstagramToast: "Image saved! Open Instagram and share from your gallery.",
      shareXToast:         "Image saved \u2014 attach it to your post on X!",
      shareFacebookToast:  "Image saved \u2014 post it on Facebook!",
      shareWhatsappToast:  "Image saved \u2014 attach it in the chat!",
      shareLineToast:      "Image saved \u2014 attach it in the chat!",

      // Buttons / actions
      retakeBtn: "Retake Quiz",

      // Share text body (used for clipboard / web share)
      shareTextHeader: "I took the Grape Personality Quiz!",
      shareTextRed:    "Red match",
      shareTextWhite:  "White match",
      shareTextFall:   "Grape I\u2019d fall for",
      shareTextTry:    "Try it",

      // Language toggle
      langToggleEn:   "EN",
      langToggleTc:   "繁",
      langToggleSc:   "简",
      langSwitchAria: "Switch language"
    }
  },

  /* ─────────────────────────────────────────────────────────────────
     TRADITIONAL CHINESE (zh-Hant)
     ───────────────────────────────────────────────────────────────── */
  "zh-Hant": {
    ui: {
      pageTitle: "你是哪一款葡萄?",

      landingTitleHTML: "你是哪一款 <em>葡萄</em>?",
      landingSubHTML:
        "15 道題目 \u00B7 5 個人格維度 \u00B7 50 種葡萄品種<br>" +
        "找出屬於你的 <strong>紅葡萄</strong> 與 <strong>白葡萄</strong>。",
      landingCTA:  "開始測驗",
      landingNote: "約需 3 分鐘 \u00B7 無需註冊",
      landingCoverAlt: "你是哪一款葡萄?",

      questionLabelFmt: "第 {n} 題",
      progressFmt:      "{n} / {total}",
      backBtn:          "上一題",
      nextBtn:          "下一題",
      finalBtn:         "看我的結果",

      calcText: "正在從 50 種葡萄中為你尋找最契合的個性\u2026",

      resultsTitle:        "你的葡萄配對",
      redMatchBadge:       "紅葡萄",
      whiteMatchBadge:     "白葡萄",
      tanninPrefix:        "單寧:",
      acidityPrefix:       "酸度:",
      classicExpressions:  "經典產區:",
      wikiLink:            "在維基百科了解更多 \u2192",

      pairingHeading:    "為什麼這個組合很搭",
      pairingNoteFmt:    "這是一場 {sigRed} 與 {sigWhite} 的配對。",
      fallForHeading:    "你會為之心動的葡萄",
      profileHeading:    "你在 5 個人格維度上的位置",
      profileIntro:
        "每一條軸顯示你在兩種特質之間的位置。" +
        "圓點標示你的落點;越靠中央越平衡。",
      orbitHeading: "與你共振的其他葡萄",
      orbitIntro:   "另外四款和你頻率相近的葡萄。",

      profileLeaning:  "偏向",
      profileBalanced: "平衡",
      profileSep:      " \u00B7 ",

      shareTitleDownload:  "儲存圖片",
      shareTitleInstagram: "分享到 Instagram",
      shareTitleX:         "分享到 X",
      shareTitleFacebook:  "分享到 Facebook",
      shareTitleWhatsapp:  "分享到 WhatsApp",
      shareTitleLine:      "分享到 LINE",
      shareTitleCopy:      "複製文字",

      shareCopied:         "已複製到剪貼簿!",
      shareCopyFailed:     "無法自動複製 \u2014 請手動複製。",
      shareInstagramToast: "圖片已儲存!打開 Instagram 從相簿選擇分享。",
      shareXToast:         "圖片已儲存 \u2014 發文時附上即可!",
      shareFacebookToast:  "圖片已儲存 \u2014 在 Facebook 發文時附上!",
      shareWhatsappToast:  "圖片已儲存 \u2014 在聊天中附上即可!",
      shareLineToast:      "圖片已儲存 \u2014 在 LINE 聊天附上即可!",

      retakeBtn: "重新測驗",

      shareTextHeader: "我做了葡萄人格測驗!",
      shareTextRed:    "紅葡萄配對",
      shareTextWhite:  "白葡萄配對",
      shareTextFall:   "讓我心動的葡萄",
      shareTextTry:    "你也來試試",

      langToggleEn:   "EN",
      langToggleTc:   "繁",
      langToggleSc:   "简",
      langSwitchAria: "切換語言"
    },

    /* ── 5 人格維度 ─────────────────────────────────────────────── */
    dims: [
      { left: "外向",     right: "內省" },     // S
      { left: "濃烈",     right: "細緻" },     // B
      { left: "經典",     right: "冒險" },     // C
      { left: "大地系",   right: "花香系" },   // E
      { left: "規律",     right: "隨性" }      // P
    ],

    /* ── 單寧 / 酸度 等級 ──────────────────────────────────────── */
    tannins: {
      "Firm":         "強壯",
      "Velvety":      "絲滑",
      "Silky":        "柔順",
      "Low":          "輕柔",
      "Fine-grained": "細膩",
      "Gripping":     "緊實"
    },
    acidities: {
      "Fresh":    "清新",
      "Bright":   "明亮",
      "Racy":     "銳利",
      "Soft":     "柔和",
      "Electric": "電流般"
    },

    /* ── 15 道題目 ─────────────────────────────────────────────── */
    questions: [
      {
        text: "你給人留下的第一印象通常是\u2026",
        opts: [
          "鮮明、強烈,讓人無法忽略",
          "溫暖、自信,自然吸引目光",
          "溫柔、優雅,從容沉靜",
          "內斂、安靜,讓人慢慢記住"
        ]
      },
      {
        text: "選擇紀念日晚餐的餐廳時,你最喜歡\u2026",
        opts: [
          "你已經信任的經典名店,每個細節都做得到位",
          "熟悉的愛店推出新菜單或巧思變化",
          "你喜歡的料理風格,但選一間更出乎意料的店",
          "全新開幕、原創、令人難忘的店"
        ]
      },
      {
        text: "如果可以隨意度過一個安靜的午後,你會選擇\u2026",
        opts: [
          "陰涼森林,有苔蘚、樹皮與光影",
          "靜謐花園,有香草、茶與石板小徑",
          "春日市集,綠意盎然、新鮮花香撲鼻",
          "玫瑰與野花花園,柔軟、芬芳、如夢似幻"
        ]
      },
      {
        text: "處理重要事情時,你的節奏通常是\u2026",
        opts: [
          "深思熟慮、井然有序、仔細打磨",
          "穩定可靠,留有呼吸的空間",
          "直覺靈活,跟著當下的感覺走",
          "全憑本能、流動,在行動中完全活著"
        ]
      },
      {
        text: "認識新朋友時,你的直覺反應是\u2026",
        opts: [
          "輕鬆聊、開玩笑,看連結往哪裡走",
          "問體貼的問題,自然地建立溫度",
          "等到對的時機,才慢慢展現自己",
          "先靜靜觀察,等到連結真實才加入"
        ]
      },
      {
        text: "什麼樣的電影或影集最能打動你?",
        opts: [
          "至今依然強大的真正經典 \u2014 羅馬假期、傲慢與偏見、教父",
          "精緻迷人、製作精良 \u2014 穿著 Prada 的惡魔、美味關係、吉爾莫女孩",
          "新鮮、有風格、稍微非主流 \u2014 艾蜜莉的異想世界、布達佩斯大飯店",
          "怪奇原創、難以歸類 \u2014 黑鏡、人生切割術、超現實或不尋常的故事"
        ]
      },
      {
        text: "在緊張或高張力的時刻,你的存在感更像\u2026",
        opts: [
          "立刻改變整個氛圍的力量",
          "讓人自然依靠的穩定中心",
          "讓情緒沉澱、變得細緻的柔和細節",
          "在一切結束後仍隱約留下的痕跡"
        ]
      },
      {
        text: "哪一種逃離日常的方式最像你?",
        opts: [
          "山林避世,安靜而踏實",
          "鄉間小住,有花園、茶與村落小徑",
          "明亮小鎮,充滿花卉、市集與海風",
          "夢幻的地方,柔軟、晶瑩、略帶不真實"
        ]
      },
      {
        text: "在群體中,你的存在最常被感受為\u2026",
        opts: [
          "點亮氣氛、推動事情前進的火花",
          "讓人放鬆、彼此連結的溫暖",
          "話不多卻洞察一切的安靜覺察",
          "讓某個人感到真正被看見的深度"
        ]
      },
      {
        text: "你對美的品味,通常傾向\u2026",
        opts: [
          "經得起時間考驗、雋永的優雅",
          "帶有溫度與個性的細緻品味",
          "新鮮、好奇、稍帶意外感",
          "獨特、極具個人風格、完全自成一格"
        ]
      },
      {
        text: "在美麗的場景中,你最先注意到什麼?",
        opts: [
          "質地 \u2014 木頭、石頭、土壤、清涼的陰影",
          "靜謐生機 \u2014 葉子、香草、枝條、所有活著的綠意",
          "新鮮感 \u2014 光線、花瓣、柑橘、清晨空氣",
          "香氣 \u2014 玫瑰、花朵、香水、整個氛圍"
        ]
      },
      {
        text: "計畫突然改變時,你的第一反應是\u2026",
        opts: [
          "重新建立秩序,立刻擬定新計畫",
          "冷靜調整,讓情況保持平衡",
          "見招拆招,相信自己的直覺",
          "順著新的能量走,看會通往哪裡"
        ]
      },
      {
        text: "哪一種歌曲最吸引你?",
        opts: [
          "強而有力、戲劇性十足 \u2014 007 主題曲、波西米亞狂想曲、宏大交響式情歌",
          "溫暖飽滿、充滿生命力 \u2014 ABBA、Motown、爵士流行、令人愉悅的經典",
          "柔軟、精緻、層次細膩 \u2014 木吉他歌曲、輕柔鋼琴、低調獨立情歌",
          "縈繞心頭、揮之不去 \u2014 夢幻流行、氛圍配樂、會留在腦海裡的歌"
        ]
      },
      {
        text: "走進一個滿是人的房間時,你自然會\u2026",
        opts: [
          "輕鬆開啟對話,把氣氛點亮",
          "從幾段溫暖的交流開始,讓場合變得歡迎",
          "先靠近熟悉的人事物,再慢慢打開",
          "走向某個讓你真正有感覺的人或瞬間"
        ]
      },
      {
        text: "對你來說最自然的生活節奏是\u2026",
        opts: [
          "清楚、有意識、安靜地掌控一切",
          "穩定、平衡、被溫柔地接住",
          "彈性、開放、隨時可以轉向",
          "自發、本能,難以被太久地框住"
        ]
      }
    ],

    /* ── 50 種葡萄 ─────────────────────────────────────────────── */
    grapes: {
      /* ===== Reds ===== */
      "Cabernet Sauvignon": {
        sig:    "掌控",
        blurb:
          "Cabernet Sauvignon 結構分明、力量飽滿,沉穩到無可置疑;它建立在深度、掌控與穩固的形體之上。" +
          "作為一個人,你給人能幹、自持、難以動搖的印象。你不是混亂式的魅力 \u2014 你就是那個計畫本身。",
        expr:   "波爾多左岸、納帕谷",
        tags:   ["#掌控感", "#強勢氣場", "#結構派靈魂"]
      },
      "Merlot": {
        sig:    "從容",
        blurb:
          "Merlot 柔軟、圓潤、慷慨,柔軟並不代表單薄。" +
          "你給人溫暖、好親近、情緒上輕鬆相處的感覺,但底下其實很有份量。" +
          "人們在你身邊很快就能放鬆,然後才意識到你其實層次相當豐富。",
        expr:   "Pomerol、Saint-Émilion",
        tags:   ["#從容自在", "#溫暖親近", "#沉靜層次"]
      },
      "Pinot Noir": {
        sig:    "細膩",
        blurb:
          "Pinot Noir 細緻、層次豐富、充滿細節,展現的是細膩而非粗暴的力量。" +
          "你敏感、有洞察力、安靜地散發吸引力,是那種讓人事後仍持續想起的人。" +
          "你不會大聲走進房間;你會留下來。",
        expr:   "Burgundy、Willamette Valley",
        tags:   ["#細膩心思", "#柔中有力", "#餘韻悠長"]
      },
      "Syrah": {
        sig:    "陰影",
        blurb:
          "Syrah 暗沉、強烈,充滿香料、煙燻與陰影。" +
          "你同時擁有力量與神祕,即使沉默,存在感也很強烈。" +
          "你的本質不是低調的 \u2014 只是時機掌握得好。",
        expr:   "Northern Rhône、Barossa Shiraz",
        tags:   ["#陰影氣場", "#暗黑強度", "#香料煙燻"]
      },
      "Grenache": {
        sig:    "光亮",
        blurb:
          "Grenache 多汁、溫暖、坦誠,帶著明亮、果香與大方的慷慨。" +
          "你充滿能量、即興、情感豐沛,像那種會自然把一天變得更精彩的人。" +
          "你非常擅長把「只喝一杯」變成整晚的故事。",
        expr:   "Châteauneuf-du-Pape、Priorat",
        tags:   ["#光亮明媚", "#坦率真心", "#自由靈魂"]
      },
      "Nebbiolo": {
        sig:    "嚴峻",
        blurb:
          "Nebbiolo 高音調、結構分明,以一種美麗的方式嚴峻 \u2014 全是張力、香氣與單寧。" +
          "你看起來優雅、認真、不容急切催促,標準在你開口前就能被感覺到。" +
          "你不是「難搞」 \u2014 你只是難以被簡化。",
        expr:   "Barolo、Barbaresco",
        tags:   ["#美麗嚴峻", "#優雅張力", "#為時光而生"]
      },
      "Sangiovese": {
        sig:    "個性",
        blurb:
          "Sangiovese 鹹香、生動、結構鮮明,有酸度、有個性,還帶一點稜角般的魅力。" +
          "你誠實、生動、踏實,溫暖卻又有骨氣。" +
          "你討人喜歡,但從不平淡。",
        expr:   "Chianti Classico、Brunello di Montalcino",
        tags:   ["#鮮明個性", "#誠實魅力", "#鹹香骨氣"]
      },
      "Tempranillo": {
        sig:    "從容",
        blurb:
          "Tempranillo 沉著、平衡、安靜地高貴,帶著節制、光澤與穩定的深度。" +
          "你給人可靠、成熟、自我控制的印象,從不需要刻意宣告自己的冷靜。" +
          "你是那種大家會把訂位、預算、群體決定都交給你的人。",
        expr:   "Rioja、Ribera del Duero",
        tags:   ["#沉著從容", "#安靜貴族", "#穩定深度"]
      },
      "Malbec": {
        sig:    "震撼",
        blurb:
          "Malbec 飽滿、深沉、強烈,豐厚的能量會迅速而清楚地落地。" +
          "你自信、慷慨、極好讀懂,人們在你進門的瞬間就能感受到你的氣場。" +
          "你是有禮貌的震撼。",
        expr:   "Cahors、Mendoza",
        tags:   ["#存在震撼", "#絲絨力量", "#慷慨能量"]
      },
      "Cabernet Franc": {
        sig:    "智性",
        blurb:
          "Cabernet Franc 提拔、帶藥草氣、聰明,比第一眼看上去更精細一些。" +
          "你善於觀察、優雅、隱然原創,是那種值得花時間細看的存在。" +
          "你很少是現場最大聲的人,但常常是最有意思的那位。",
        expr:   "Chinon、Bourgueil",
        tags:   ["#智性魅力", "#提拔風格", "#青草邊緣"]
      },
      "Gamay": {
        sig:    "火花",
        blurb:
          "Gamay 明亮、多汁、俏皮、滿是魅力,清新的氣質讓它即刻討喜。" +
          "你社交、有幽默感、自然帶來愉悅感,是那種不費力就能提振氣氛的人。" +
          "你不膚淺 \u2014 只是危險地容易被喜歡。",
        expr:   "Beaujolais、Cru Beaujolais",
        tags:   ["#瞬間火花", "#俏皮魅力", "#即刻歡愉"]
      },
      "Zinfandel": {
        sig:    "豪放",
        blurb:
          "Zinfandel 熱情奔放、成熟、能量飽滿,有時甚至華麗地過頭。" +
          "你給人鮮明、衝動、難以收斂的感覺,個性偏好滿音量,而非謹慎的節制。" +
          "你不來這裡做一半。",
        expr:   "California Zinfandel、Primitivo di Manduria",
        tags:   ["#豪放奔放", "#滿音量", "#不留餘地"]
      },
      "Barbera": {
        sig:    "動能",
        blurb:
          "Barbera 活潑、酸度高、充滿動感,沒有太多單寧抓地,卻一直在前進。" +
          "你充滿能量、開放、永遠在動,是那種對人生充滿食慾、無法安靜太久的人。" +
          "你滿口「走吧」,很少說「也許再說」。",
        expr:   "Barbera d'Asti、Barbera d'Alba",
        tags:   ["#動感前進", "#明亮酸度", "#食慾旺盛"]
      },
      "Dolcetto": {
        sig:    "舒服",
        blurb:
          "Dolcetto 柔軟、好親近、輕微的土壤氣息,是舒服與從容,而非銳利的戲劇。" +
          "你踏實、善良、安靜地讓人放鬆,是那種光是出現就能降低房裡焦慮的人。" +
          "你是有品味的舒服。",
        expr:   "Dolcetto d'Alba、Dogliani",
        tags:   ["#舒服親近", "#溫柔土地", "#安靜療癒"]
      },
      "Cinsault": {
        sig:    "輕盈",
        blurb:
          "Cinsault 輕盈、靈巧、優雅,柔軟、香氣與從容並存。" +
          "你放鬆、好看、自然地不刻意,是那種越不過度經營越漂亮的人。" +
          "你非常擅長看起來「毫不費力」 \u2014 那當然,本身就是一種技術。",
        expr:   "南隆河混釀、南非老藤 Cinsault",
        tags:   ["#輕盈空氣", "#步履輕巧", "#不費力的優雅"]
      },
      "Mourvèdre": {
        sig:    "重力",
        blurb:
          "Mourvèdre 帶著土壤氣、密度高、嚴肅,有深度、溫度,還有更暗一層的重力感。" +
          "你給人有主見、踏實、不太願意停留在表層的印象。" +
          "你是團體裡最容易說「不,我們來談談真正在發生什麼」的那個人。",
        expr:   "Bandol、以 Mourvèdre 為主的 GSM 混釀",
        tags:   ["#沉重重力", "#深沉氣質", "#踏實力量"]
      },
      "Carmenère": {
        sig:    "絲絨",
        blurb:
          "Carmenère 質地柔軟、果味偏深、帶一點神祕,常常先柔順、後在底下變得有趣。" +
          "你溫暖、引人好奇、稍稍難以捉摸,柔軟之下藏著比人們以為更多的層次。" +
          "你好親近,但從不一覽無遺。",
        expr:   "Peumo、Colchagua Valley",
        tags:   ["#絲絨質地", "#柔順神祕", "#隱藏層次"]
      },
      "Aglianico": {
        sig:    "耐力",
        blurb:
          "Aglianico 力量強大、結構分明、為時間而建,帶著嚴肅的單寧與深度。" +
          "你內斂、強烈、有耐力 \u2014 不是一見鍾情型,但極為真實。" +
          "你不會是大家隨意的最愛;你會是某個人的長期執著。",
        expr:   "Taurasi、Aglianico del Vulture",
        tags:   ["#漫長耐力", "#嚴峻結構", "#長線著迷"]
      },
      "Touriga Nacional": {
        sig:    "戲劇",
        blurb:
          "Touriga Nacional 豐厚、芬芳、單寧明顯、戲劇感十足,將力量與花香的提升融合在一起。" +
          "你驕傲、強烈、隱隱地有舞台感,存在感同時強大且光潤。" +
          "你不只是走進場景 \u2014 你是登場。",
        expr:   "Douro 紅酒、Vintage Port",
        tags:   ["#戲劇登場", "#芬芳力量", "#華麗風采"]
      },
      "Nero d’Avola": {
        sig:    "陽光",
        blurb:
          "Nero d'Avola 暗、強烈、被陽光烘暖,果香慷慨,結構也比初印象來得紮實。" +
          "你給人開朗、溫暖、自信的印象,但底下其實很有份量。" +
          "你是那個有趣的人,意外地擁有強烈的主見。",
        expr:   "Sicilia、Noto / Eloro",
        tags:   ["#陽光氣質", "#溫暖自信", "#有份量的開朗"]
      },
      "Blaufränkisch": {
        sig:    "冷感",
        blurb:
          "Blaufränkisch 冷調、帶香料、結構細膩,清新與智性勝過豐厚。" +
          "你思路清楚、沉著,稍微讓不專心的人感到壓力。" +
          "你不是冷漠 \u2014 只是精準。",
        expr:   "Burgenland、Leithaberg",
        tags:   ["#冷靜清晰", "#精準銳利", "#安靜邊緣"]
      },
      "Xinomavro": {
        sig:    "嚴苛",
        blurb:
          "Xinomavro 嚴苛、酸度高、單寧明顯、思辨性強,擁有一種嚴峻的美感。" +
          "你給人節制、自持、結構分明的印象,情感真實但不會隨意外放。" +
          "你是帶著論點的優雅。",
        expr:   "Naoussa、Amyndeon",
        tags:   ["#嚴苛美感", "#思辨深度", "#精煉優雅"]
      },
      "Corvina": {
        sig:    "節制",
        blurb:
          "Corvina 提拔、低調、安靜時尚,有清新與節制,而非粗獷的力量。" +
          "你優雅、自我控制,難以被一眼看穿。" +
          "你是「不全盤交出」這門藝術。",
        expr:   "Valpolicella Classico、Amarone della Valpolicella",
        tags:   ["#節制風格", "#安靜時尚", "#優雅保留"]
      },
      "Mencía": {
        sig:    "自由",
        blurb:
          "Mencía 清新、花香、稍帶野性、能量充沛,介於優雅與自由之間。" +
          "你體貼、敏感,並且剛好野到令人興奮。" +
          "你最有可能同時擁有好品味,以及一些稍微危險的直覺。",
        expr:   "Bierzo、Ribeira Sacra",
        tags:   ["#自由靈魂", "#野性優雅", "#花香未馴"]
      },
      "Pinotage": {
        sig:    "叛逆",
        blurb:
          "Pinotage 煙燻、強悍、辨識度高,毫不掩飾地做自己。" +
          "你大膽、不走尋常路、無法被誤認成任何人。" +
          "你不會試圖討好整個房間 \u2014 而奇妙的是,這反而成立了。",
        expr:   "Stellenbosch、Swartland",
        tags:   ["#叛逆姿態", "#煙燻強悍", "#不可複製"]
      },

      /* ===== Whites ===== */
      "Chardonnay": {
        sig:    "光潤",
        blurb:
          "Chardonnay 光潤、適應力強、結構分明,能在多種風格中保持經典。" +
          "你能幹、多面向、自然得體,適合場合卻又不會被場合吃掉。" +
          "你總是看起來像早就知道 dress code。",
        expr:   "Burgundy、California Chardonnay",
        tags:   ["#光潤質感", "#多面優雅", "#經典輪廓"]
      },
      "Sauvignon Blanc": {
        sig:    "清亮",
        blurb:
          "Sauvignon Blanc 銳利、明亮、生動,酸度與清晰度直接劃過。" +
          "你直接、清新、警醒,是那種讓對話迷霧瞬間散去的人。" +
          "你是有意見的清脆能量。",
        expr:   "Sancerre、Marlborough",
        tags:   ["#清亮直率", "#爽脆", "#新鮮觀點"]
      },
      "Riesling": {
        sig:    "精準",
        blurb:
          "Riesling 精準、酸度高、結構細緻,美感建立在張力與細節之上。" +
          "你看起來秀氣、聰明,實際上比第一眼來得精準許多。" +
          "你看起來柔軟,直到對方意識到你其實有多銳利。",
        expr:   "Mosel、Rheingau",
        tags:   ["#精準張力", "#秀外慧中", "#柔中藏鋒"]
      },
      "Chenin Blanc": {
        sig:    "幅度",
        blurb:
          "Chenin Blanc 多面向、酸度高、層次豐富,能明亮、能厚實、能嚴肅、能俏皮,卻始終是自己。" +
          "你聰明、複雜,難以被簡化,擁有不只一個音域,也沒有必要只選一個。" +
          "你包容多重面貌,而且大概也清楚這一點。",
        expr:   "Vouvray、Savennières",
        tags:   ["#多元幅度", "#多重音域", "#智性深度"]
      },
      "Gewürztraminer": {
        sig:    "鮮明",
        blurb:
          "Gewürztraminer 香氣濃烈、豐厚、辨識度極高,全是香水、香料與個性。" +
          "你表達力強、原創、極為自我。" +
          "人們對你不會中立,而老實說,這也很好。",
        expr:   "Alsace、Alto Adige",
        tags:   ["#鮮明個性", "#濃烈香氣", "#不可複製的自己"]
      },
      "Pinot Grigio": {
        sig:    "乾淨",
        blurb:
          "Pinot Grigio 乾淨、爽脆、清新,從容與簡單也是它的迷人之處。" +
          "你低戲劇、明亮、好相處,不需要時刻表演複雜。" +
          "你是大家原本沒意識到自己需要的鬆一口氣。",
        expr:   "Alto Adige、Friuli",
        tags:   ["#乾淨爽脆", "#低戲劇", "#輕盈舒緩"]
      },
      "Viognier": {
        sig:    "豐潤",
        blurb:
          "Viognier 豐厚、花香、酒體飽滿,柔軟、香氣與一種浪漫的質感並存。" +
          "你表達豐富、溫暖、稍帶華麗,自然會佔據情感空間。" +
          "你不是太多 \u2014 是其他人調味不夠。",
        expr:   "Condrieu、California Viognier",
        tags:   ["#豐潤質感", "#浪漫溫暖", "#花桃香氣"]
      },
      "Albariño": {
        sig:    "海風",
        blurb:
          "Albariño 明亮、帶鹹味、活潑,清新、迷人,像海風一樣讓人提神。" +
          "你善於社交、開放、容易被喜歡,出現本身就讓氣氛變好。" +
          "你是化身為人的清新空氣。",
        expr:   "Rías Baixas、Vinho Verde Alvarinho",
        tags:   ["#海風氣質", "#沿海明亮", "#社交火花"]
      },
      "Assyrtiko": {
        sig:    "鋼骨",
        blurb:
          "Assyrtiko 電流般、礦石感、結構強勢,酸度強烈、骨架真實。" +
          "你專注、有韌性、不容易被折彎。" +
          "你是壓力下仍保持優雅的那種人。",
        expr:   "Santorini、希臘大陸 Assyrtiko",
        tags:   ["#鋼骨結構", "#火山張力", "#電流般專注"]
      },
      "Grüner Veltliner": {
        sig:    "機智",
        blurb:
          "Grüner Veltliner 爽脆、藥草、胡椒、聰明,清新之外還有微鹹的切入感。" +
          "你機智、沉著,比平靜的外表所暗示的更銳利一些。" +
          "你是房間裡會用淡定表情說出最好笑的話的人。",
        expr:   "Wachau、Kamptal",
        tags:   ["#機智冷靜", "#胡椒銳利", "#聰慧沉著"]
      },
      "Muscat": {
        sig:    "魅力",
        blurb:
          "Muscat 香氣濃郁、迷人、表達力強,即使釀成乾型,個性依然甜美。" +
          "你明亮、好親近,完全不會被誤認成節制的極簡。" +
          "你知道自己有魅力,坦白說,你也很會用。",
        expr:   "Moscato d'Asti、Muscat d'Alsace",
        tags:   ["#魅力四溢", "#甜美個性", "#坦率表達"]
      },
      "Torrontés": {
        sig:    "色彩",
        blurb:
          "Torrontés 香氣明顯、俏皮、色彩飽滿,個性鮮明、花香提拔。" +
          "你活潑、表達豐富,剛好戲劇到讓人覺得有趣。" +
          "你是「明亮」決定當主角時會發生的事。",
        expr:   "Salta、阿根廷 La Rioja",
        tags:   ["#色彩飽滿", "#俏皮表達", "#花香主角"]
      },
      "Vermentino": {
        sig:    "從容",
        blurb:
          "Vermentino 陽光、藥草感、帶鹹味,擁有地中海式的從容與明亮。" +
          "你放鬆、自然,容易讓人想像在某趟漂亮的旅程上。" +
          "你是化身為「好決定」的渡假感。",
        expr:   "Sardinia、Liguria",
        tags:   ["#地中海從容", "#陽光藥草", "#渡假能量"]
      },
      "Arneis": {
        sig:    "難捉",
        blurb:
          "Arneis 柔軟、優雅、難以捉摸,美感是細微的,而非顯而易見的。" +
          "你優雅、稍稍距離感、不容易被快速定義。" +
          "你是那種人們先稱「有意思」,再慢慢解釋為什麼的存在。",
        expr:   "Roero Arneis、Piedmont Arneis",
        tags:   ["#難以捉摸", "#柔和神祕", "#難以一句話定義"]
      },
      "Falanghina": {
        sig:    "歡快",
        blurb:
          "Falanghina 明亮、友善、能量飽滿,清新與魅力都不費力。" +
          "你開朗、好聊、自然輕快。" +
          "你像把窗戶整個打開的那種情緒。",
        expr:   "Falanghina del Sannio、Campania",
        tags:   ["#歡快氣息", "#明亮提振", "#不費力歡愉"]
      },
      "Semillon": {
        sig:    "耐心",
        blurb:
          "Semillon 平靜、寬廣、會慢慢加深,常常不那麼搶眼,但極為耐久。" +
          "你穩定、有耐心,隨時間推移比第一印象更有份量。" +
          "你不是即時效果 \u2014 你是長線。",
        expr:   "Hunter Valley、Bordeaux Blanc / Sauternes",
        tags:   ["#耐心深度", "#慢慢顯露", "#安靜出眾"]
      },
      "Fiano": {
        sig:    "踏實",
        blurb:
          "Fiano 踏實、有質地、有思想,溫暖、有份量、內在沉靜。" +
          "你內省、有份量、安靜地自信。" +
          "你是不需要戲劇的深度。",
        expr:   "Fiano di Avellino、Campania Fiano",
        tags:   ["#踏實沉穩", "#內在沉靜", "#不戲劇的深度"]
      },
      "Garganega": {
        sig:    "微光",
        blurb:
          "Garganega 優雅、細微、柔和地發光,帶著輕柔的果味與低調的美。" +
          "你沉穩、優雅,容易在初識時被低估,直到對方花更多時間和你相處。" +
          "你是柔和的光,而不是閃爍的星。",
        expr:   "Soave Classico、Recioto di Soave",
        tags:   ["#柔和微光", "#低調美感", "#溫柔光暈"]
      },
      "Godello": {
        sig:    "節制",
        blurb:
          "Godello 節制、礦石、結構安靜,屬於沉穩的力量,而非花俏的張揚。" +
          "你穩定、自我包容,比表面看起來更強。" +
          "你是那種沉默不空虛、反而有重量的人。",
        expr:   "Valdeorras、Bierzo",
        tags:   ["#節制力量", "#安靜強度", "#底蘊飽滿"]
      },
      "Verdicchio": {
        sig:    "紀律",
        blurb:
          "Verdicchio 明亮、有紀律、清爽乾淨,酸度與秩序帶來提神,而非嚴峻。" +
          "你條理清楚、令人放心。" +
          "你是「一切都被打理好了」的個性版本。",
        expr:   "Castelli di Jesi、Matelica",
        tags:   ["#紀律分明", "#爽脆秩序", "#一切搞定"]
      },
      "Marsanne": {
        sig:    "份量",
        blurb:
          "Marsanne 有份量、平靜、肩膀寬,酸度較低,給人踏實厚重的感覺。" +
          "你紮實、自我包容、安靜地有力量。" +
          "你不是閃光,而是承接。",
        expr:   "Hermitage Blanc、Saint-Joseph Blanc",
        tags:   ["#沉穩份量", "#平靜在場", "#寬肩承接"]
      },
      "Roussanne": {
        sig:    "柔軟",
        blurb:
          "Roussanne 香氣豐富、層次細緻、質地柔軟,美感會慢慢展開。" +
          "你溫柔、體貼,情感層次以非常吸引人的方式被著色。" +
          "你細膩,但從不平淡。",
        expr:   "Hermitage Blanc、Châteauneuf-du-Pape Blanc",
        tags:   ["#柔軟細緻", "#層次展開", "#芬芳精緻"]
      },
      "Ribolla Gialla": {
        sig:    "好奇",
        blurb:
          "Ribolla Gialla 明亮、有質地、稍帶非主流,好奇心是它本身的個性。" +
          "你體貼、稍微偏離中心,更感興趣的是「有意思」而非「明顯」。" +
          "你絕對會注意到別人錯過的細節。",
        expr:   "Collio、Brda",
        tags:   ["#好奇心強", "#稍稍偏移", "#質地心思"]
      },
      "Xarel-lo": {
        sig:    "骨架",
        blurb:
          "Xarel-lo 結構分明、乾、安靜地有力量,擁有骨架而非外放的魅力。" +
          "你自律、可靠,比表面強很多。" +
          "你是讓整件事成立的關鍵。",
        expr:   "Penedès、Cava",
        tags:   ["#骨架支撐", "#安靜力量", "#結構穩固"]
      },
      "Savagnin": {
        sig:    "怪奇",
        blurb:
          "Savagnin 酸度高、怪奇、極度個人化,結構真實、辨識度十足。" +
          "你強烈、自我包容,完全不感興趣融入。" +
          "你不是偶然小眾。",
        expr:   "Côtes du Jura Savagnin、Vin Jaune",
        tags:   ["#怪奇個性", "#強烈自我", "#選擇做自己"]
      }
    },

    /* ── 25 種 Pairing 解說 ────────────────────────────────────── */
    pairings: {
      "R1+W1": {
        text:
          "這個組合自律、沉著、極度自我包容。你的紅酒面帶來結構、標準與認真,白酒面增添光潤、節制與內在控制。" +
          "兩者合在一起,構成一種建立在內涵而非聲量上的人格 \u2014 穩定、能幹、踏實。",
        tags: ["#自律核心", "#內涵勝過聲量"]
      },
      "R1+W2": {
        text:
          "這個組合在權威與清新之間找到平衡。紅酒面給你骨氣、份量與高標準,白酒面則保持你的開放、清晰與容易接近。" +
          "於是,你強壯,卻不至嚴峻。",
        tags: ["#權威與清新", "#強而不冷"]
      },
      "R1+W3": {
        text:
          "這是高解析度的組合:結構分明、精準、不容糊化。紅酒面帶來嚴肅與形體,白酒面增添精準、張力與內在的銳利。" +
          "你看起來精煉、聰明、極度自持。",
        tags: ["#高解析度", "#銳利清晰"]
      },
      "R1+W4": {
        text:
          "這個組合把節制與顯而易見的個性融在一起。紅酒面給你深度、控制與權威,白酒面增添表達力、香氣,以及更外顯的情感層次。" +
          "你內裡認真,卻從不顯得平板。",
        tags: ["#節制與表達", "#認真但好接近"]
      },
      "R1+W5": {
        text:
          "這個組合體貼、層次豐富、安靜地有品味。紅酒面帶給你結構與重力,白酒面提供細緻的個性與內在質地。" +
          "於是,你既有標準,也有感知的深度。",
        tags: ["#安靜的品味", "#標準與深度"]
      },
      "R2+W1": {
        text:
          "這個組合厚重、可控、讓人不容輕視。紅酒面帶來力量、暗沉與情感的份量,白酒面為這份強度賦予形體與紀律。" +
          "於是,你強大、認真、難以被動搖。",
        tags: ["#不容輕視", "#力量配上形體"]
      },
      "R2+W2": {
        text:
          "這個組合替強度增添提拔。紅酒面深沉、強烈、情緒充滿,白酒面則讓你保持鮮明、社交活躍、容易被連結。" +
          "你強壯、活著、磁性十足。",
        tags: ["#提拔的強度", "#磁性存在"]
      },
      "R2+W3": {
        text:
          "這是最銳利的組合之一:暗黑力量配上明亮張力。紅酒面帶來深度與重力,白酒面增添精準、礦石氣與神經。" +
          "你強烈、聚焦,難以被簡化成一句話。",
        tags: ["#暗黑力量", "#明亮張力"]
      },
      "R2+W4": {
        text:
          "這個組合戲劇感強、表達豐富、極為難忘。紅酒面帶來陰影、熱度與力量,白酒面增添香氣、柔軟,或外顯的情緒。" +
          "你豐厚、迷人、稍微比生活大一點。",
        tags: ["#戲劇表達", "#超脫日常"]
      },
      "R2+W5": {
        text:
          "這個組合深沉、奇特、質地複雜。紅酒面帶著嚴肅與情感力度,白酒面則加入細微的個性與不那麼顯眼的內在層次。" +
          "你看起來神祕、體貼、難以被壓平成單一音符。",
        tags: ["#深沉質地", "#神祕內裡"]
      },
      "R3+W1": {
        text:
          "這個組合在溫暖與形狀之間取得平衡。紅酒面帶來開放、社交與慷慨,白酒面增添沉著、結構與安靜的控制。" +
          "你親切、踏實,比第一印象更精煉。",
        tags: ["#帶形狀的溫暖", "#踏實魅力"]
      },
      "R3+W2": {
        text:
          "這是系統裡最明亮、最容易親近的組合之一。紅酒面帶來溫度、動能與情感慷慨,白酒面增添清新、開放與自然的魅力。" +
          "你活潑、好邀請、容易被喜歡。",
        tags: ["#明亮親近", "#活潑魅力"]
      },
      "R3+W3": {
        text:
          "這個組合在明亮與輪廓之間取得平衡。紅酒面給你溫暖與動感,白酒面則增添精準、警醒與更銳的邊緣。" +
          "你慷慨卻不模糊 \u2014 開放、清楚。",
        tags: ["#明亮的清晰", "#開放但分明"]
      },
      "R3+W4": {
        text:
          "這個組合表達力強、社交飽滿、色彩繽紛。紅酒面帶來情感的溫暖與慷慨,白酒面增添香氣、個性與顯而易見的魅力。" +
          "你光彩奪目、令人投入,自然難忘。",
        tags: ["#色彩表達", "#光彩能量"]
      },
      "R3+W5": {
        text:
          "這個組合外暖、內裡層次豐富。紅酒面帶來輕鬆、慷慨與動能,白酒面增添好奇、個性與隱藏的深度。" +
          "你一開始好親近,越相處越有層次。",
        tags: ["#外暖內豐", "#隱藏層次"]
      },
      "R4+W1": {
        text:
          "這個組合優雅、沉著、結構細膩。紅酒面帶來細微、提拔與情感層次,白酒面增添光潤與內在控制。" +
          "你看起來精煉、自覺,結構整體妥當。",
        tags: ["#優雅沉著", "#精緻平衡"]
      },
      "R4+W2": {
        text:
          "這個組合輕、優雅、容易連結。紅酒面帶來安靜的風格與細節,白酒面增添開放、明亮與社交的從容。" +
          "你溫柔、清新、自然討人喜歡。",
        tags: ["#輕盈優雅", "#清新柔和"]
      },
      "R4+W3": {
        text:
          "這個組合纖細卻精準。紅酒面帶來細緻的情感層次,白酒面增添清晰、張力與精度。" +
          "你聰明、骨架秀氣,安靜地令人難忘。",
        tags: ["#纖細精準", "#秀骨清晰"]
      },
      "R4+W4": {
        text:
          "這個組合偏抒情、表達豐富、氛圍柔軟。紅酒面帶來提拔與含蓄,白酒面增添香氣、感受與更明顯的情緒色彩。" +
          "你優雅、夢幻,以非顯眼的方式令人記得。",
        tags: ["#抒情夢境", "#柔軟氛圍"]
      },
      "R4+W5": {
        text:
          "這個組合細緻、好奇、難以快速被簡化。紅酒面帶來細微與安靜風格,白酒面增添質地、內向與個性。" +
          "你體貼、優雅,稍稍難以捉摸。",
        tags: ["#細緻好奇", "#優雅難捉"]
      },
      "R5+W1": {
        text:
          "這個組合在個性與控制之間取得平衡。紅酒面帶來特色、辨識度,或不可預測,白酒面增添形體、紀律與內在秩序。" +
          "你原創,卻從不混亂。",
        tags: ["#原創有序", "#個性可控"]
      },
      "R5+W2": {
        text:
          "這個組合鮮明、表達豐富、社交活躍。紅酒面帶來個性與魅力,白酒面增添明亮、開放與輕巧。" +
          "你引人注目、辨識度高、極容易被注意到。",
        tags: ["#鮮明表達", "#辨識魅力"]
      },
      "R5+W3": {
        text:
          "這個組合把個性磨成精準。紅酒面帶來原創與強烈個性,白酒面增添聚焦、張力與輪廓。" +
          "你有意思的原因,不只是你不同 \u2014 而是你清楚。",
        tags: ["#精準個性", "#有趣且分明"]
      },
      "R5+W4": {
        text:
          "這是最具表達力的組合之一:個性遇上香氣。紅酒面帶來個性與獨特之處,白酒面增添香氣、戲劇,或情感的可見度。" +
          "你鮮明、難忘,絕無法被泛化。",
        tags: ["#個性與香氣", "#鮮明難忘"]
      },
      "R5+W5": {
        text:
          "這個組合質地豐富、辨識度高、安靜地非主流。紅酒面帶來個性與特色,白酒面增添細微的怪奇、好奇,或內向的複雜。" +
          "你像那種讓人在對話結束後仍持續想起的存在。",
        tags: ["#質地個性", "#安靜的非主流"]
      }
    },

    /* ── 50 個 Chemistry blurb (你會為之心動的葡萄) ───────────── */
    chemistry: {
      "Cabernet Sauvignon": {
        blurb:
          "Cabernet Sauvignon 不需要開口就能要走你的注意。那份冷靜的肯定、那種不追逐任何人的安靜,讓你想停留得比預期更久。",
        tags: ["#安靜的掌控", "#難以抗拒的肯定"]
      },
      "Merlot": {
        blurb:
          "Merlot 會用從容卸下你的防備。那份溫暖即時且真實,你還沒回神,就已經比好久以來都更放鬆。",
        tags: ["#瞬間舒服", "#溫暖會留下"]
      },
      "Pinot Noir": {
        blurb:
          "Pinot Noir 會以最美的方式縈繞你。你會反覆回想那些細節 \u2014 那份纖細、那種安靜的強度 \u2014 在當下早已過去之後。",
        tags: ["#揮之不去", "#細微著迷"]
      },
      "Syrah": {
        blurb:
          "Syrah 會用那種暗黑磁性把你拉進去。那裡有危險,但是好的那種 \u2014 那種讓其他事都顯得太安全的危險。",
        tags: ["#暗黑磁性", "#危險地好"]
      },
      "Grenache": {
        blurb:
          "Grenache 會在你還沒想第二遍前就把你捲走。那份溫暖、即興、感染力強的喜悅 \u2014 你毫無招架之力。",
        tags: ["#感染力喜悅", "#被一把捲走"]
      },
      "Nebbiolo": {
        blurb:
          "Nebbiolo 會用它美麗的嚴峻迷住你。它越保留,你越想了解 \u2014 而它從不讓你真正讀完。",
        tags: ["#美麗嚴峻", "#永遠未完"]
      },
      "Sangiovese": {
        blurb:
          "Sangiovese 會以誠實的個性贏得你。沒有遊戲、沒有表演 \u2014 只是溫暖、骨氣,還有一份完全真實的魅力。",
        tags: ["#誠實魅力", "#真實吸引"]
      },
      "Tempranillo": {
        blurb:
          "Tempranillo 會在你還沒察覺前就贏得你的信任。那份沉著、安靜的可靠 \u2014 是不需要戲劇就能加深的吸引。",
        tags: ["#安靜信任", "#不戲劇的加深"]
      },
      "Malbec": {
        blurb:
          "Malbec 會帶著無法忽略的存在感登場。大膽、慷慨、極為自信 \u2014 是那種讓你感覺自己是房裡最重要的人的能量。",
        tags: ["#存在感無敵", "#大膽慷慨"]
      },
      "Cabernet Franc": {
        blurb:
          "Cabernet Franc 會用你差點錯過的細節吸引你。那份智性、那種細微 \u2014 是值得耐心與專注的吸引。",
        tags: ["#獎勵專注", "#智性吸引"]
      },
      "Gamay": {
        blurb:
          "Gamay 會立刻、徹底地迷住你。那份輕盈、幽默、毫不費力的能量 \u2014 你還沒搞清楚為什麼,就已經在笑了。",
        tags: ["#瞬間心動", "#忍不住微笑"]
      },
      "Zinfandel": {
        blurb:
          "Zinfandel 會以最美好的方式淹沒你。會不會太多?也許。但你不會想要任何別的版本。",
        tags: ["#華麗過度", "#沒有後悔"]
      },
      "Barbera": {
        blurb:
          "Barbera 會替你充電。那種不安分的胃口、動感、不肯靜止的姿態 \u2014 會傳染,而你會喜歡其中每一分鐘。",
        tags: ["#感染力能量", "#坐不下來"]
      },
      "Dolcetto": {
        blurb:
          "Dolcetto 會像回家一樣。那份溫柔、安靜的舒服 \u2014 是不需要大聲卻處處被感覺到的吸引。",
        tags: ["#舒服吸引", "#安靜難拒"]
      },
      "Cinsault": {
        blurb:
          "Cinsault 會用毫不費力的優雅把你帶進去。輕盈、漂亮、完全不刻意 \u2014 你會懷疑怎麼有人能做到看起來這麼輕鬆。",
        tags: ["#不費力優雅", "#自然之美"]
      },
      "Mourvèdre": {
        blurb:
          "Mourvèdre 會把你拉回地面。那裡有重力、有深度,會穿透一切表面說:這才是真正重要的。",
        tags: ["#踏實重力", "#穿透表面"]
      },
      "Carmenère": {
        blurb:
          "Carmenère 會以表面之下的東西吸引你。先柔順、溫暖,越靠近越奇特、越深。",
        tags: ["#隱藏深度", "#柔後奇特"]
      },
      "Aglianico": {
        blurb:
          "Aglianico 會挑戰你 \u2014 那正是讓它無法抗拒的原因。強度、耐力、不肯讓自己變得容易 \u2014 這是長線級的執著。",
        tags: ["#長線著迷", "#值得等待"]
      },
      "Touriga Nacional": {
        blurb:
          "Touriga Nacional 會用純粹的戲劇感擄獲你。那份豐厚、香氣、毫不掩飾的強度 \u2014 它從不做含蓄,你的吸引也不會。",
        tags: ["#純粹戲劇", "#不含蓄的強度"]
      },
      "Nero d’Avola": {
        blurb:
          "Nero d'Avola 會驚到你 \u2014 那份陽光自信底下竟然藏了這麼多份量。一開始好玩,接著意外地深。",
        tags: ["#陽光後深", "#意外份量"]
      },
      "Blaufränkisch": {
        blurb:
          "Blaufränkisch 會以冷靜的精準打動你。低調、聰明,剛好銳利到讓你不敢放鬆。",
        tags: ["#冷靜精準", "#銳利吸引"]
      },
      "Xinomavro": {
        blurb:
          "Xinomavro 會以它思辨性的美迷住你。那份嚴峻不是冷漠 \u2014 是聚焦,而那種聚焦會把你拉進去。",
        tags: ["#思辨之美", "#聚焦吸引"]
      },
      "Corvina": {
        blurb:
          "Corvina 會以它沒說出口的部分擄獲你。那份節制、安靜的優雅 \u2014 你會花很長時間想讀懂字裡行間。",
        tags: ["#字裡行間", "#安靜優雅"]
      },
      "Mencía": {
        blurb:
          "Mencía 會以那份美麗的野性讓你心動。體貼卻未馴、優雅卻自由 \u2014 是稍稍危險、卻完全活著的吸引。",
        tags: ["#美麗野性", "#危險地活"]
      },
      "Pinotage": {
        blurb:
          "Pinotage 會挑戰你以為自己喜歡的類型。大膽、叛逆、毫不掩飾的不同 \u2014 而奇怪的是,正因如此你被吸進去。",
        tags: ["#打破類型", "#叛逆吸引"]
      },
      "Chardonnay": {
        blurb:
          "Chardonnay 會以光潤與適應力打動你。在任何場合都毫不費力地得體 \u2014 那種存在會讓你也想拉高自己的水準。",
        tags: ["#光潤吸引", "#拉高水準"]
      },
      "Sauvignon Blanc": {
        blurb:
          "Sauvignon Blanc 會直接劃過你的防備。那份直率、那份清晰 \u2014 像新鮮空氣,讓其他事都顯得霧霧的。",
        tags: ["#穿透清晰", "#令人神清"]
      },
      "Riesling": {
        blurb:
          "Riesling 會用隱藏的銳利讓你驚艷。看起來細緻,直到你意識到它有多精準、多有力 \u2014 那時你已經被擄獲。",
        tags: ["#隱藏銳利", "#柔中藏鋒"]
      },
      "Chenin Blanc": {
        blurb:
          "Chenin Blanc 會慢慢把你拉進去。一開始它聰明、平靜,還有一點難以定義 \u2014 然後你忽然發現,它的深度比你以為的多很多。",
        tags: ["#慢火吸引", "#不只如此"]
      },
      "Gewürztraminer": {
        blurb:
          "Gewürztraminer 不可能被忘記。那份強度、辨識度、堅持做自己的態度 \u2014 你不是著迷,就是被淹沒。沒有中間地帶。",
        tags: ["#著迷或淹沒", "#沒有中間"]
      },
      "Pinot Grigio": {
        blurb:
          "Pinot Grigio 會以你不知道自己需要的方式讓你放鬆。沒有壓力、沒有表演 \u2014 只是乾淨、輕鬆、真實愉快的同伴。",
        tags: ["#輕鬆吸引", "#放鬆下來"]
      },
      "Viognier": {
        blurb:
          "Viognier 會以豐厚與溫暖誘惑你。豐潤、表達豐富、毫不掩飾的浪漫 \u2014 是會填滿整個房間的吸引。",
        tags: ["#豐潤吸引", "#浪漫氣息"]
      },
      "Albariño": {
        blurb:
          "Albariño 會把一切都點亮。那份輕盈、魅力、海風般的從容 \u2026 這份能量像春天的第一個暖日。",
        tags: ["#春天暖日", "#明亮心動"]
      },
      "Assyrtiko": {
        blurb:
          "Assyrtiko 會在贏得你的喜愛之前先贏得你的尊敬。那份鋼骨、韌性、不肯彎曲 \u2014 然後你會發現,尊敬其實是最深的吸引。",
        tags: ["#敬意成欲望", "#鋼骨靈魂"]
      },
      "Grüner Veltliner": {
        blurb:
          "Grüner Veltliner 會在你愛上之前先讓你笑。那份機智、藏在冷靜底下的銳利 \u2014 是會悄悄逼近的智性。",
        tags: ["#先笑後愛", "#悄悄逼近"]
      },
      "Muscat": {
        blurb:
          "Muscat 會坦率而徹底地迷住你。那份甜真實、那份溫暖真誠,效果即時 \u2014 你甚至不會想抵抗。",
        tags: ["#坦率魅力", "#瞬間生效"]
      },
      "Torrontés": {
        blurb:
          "Torrontés 會以色彩與能量讓你目不暇給。鮮豔、俏皮,剛好戲劇到讓事情有趣 \u2014 是「吸引等同表演」的版本。",
        tags: ["#炫目能量", "#吸引如表演"]
      },
      "Vermentino": {
        blurb:
          "Vermentino 會讓一切變得更容易。那份溫暖、從容、地中海式的平靜 \u2014 你會覺得自己已經在度假了。",
        tags: ["#度假能量", "#輕鬆吸引"]
      },
      "Arneis": {
        blurb:
          "Arneis 會以它的難以捉摸吸引你。你越想定義它,它越有意思 \u2014 而那份神祕,正是重點。",
        tags: ["#神祕為重點", "#難以捉摸的魅力"]
      },
      "Falanghina": {
        blurb:
          "Falanghina 會在不費力之間提振你的心情。那份開朗會傳染、能量毫不費力、魅力完全真誠。",
        tags: ["#感染歡愉", "#不費力提振"]
      },
      "Semillon": {
        blurb:
          "Semillon 會安靜地長進你心裡。不華麗、不即時 \u2014 但有一天你會發現,它是房裡最讓人印象深刻的存在。",
        tags: ["#慢慢顯露", "#安靜出眾"]
      },
      "Fiano": {
        blurb:
          "Fiano 會以安靜的份量讓你踏實。沒有表演、沒有偽裝 \u2014 只是真實的深度,讓其他事都顯得淺一點。",
        tags: ["#不戲劇的深度", "#真實份量"]
      },
      "Garganega": {
        blurb:
          "Garganega 會柔和地朝你發光。不是閃爍、不是炫目 \u2014 是發光。而那份溫和的光暈,會讓你停不下想念。",
        tags: ["#溫和光暈", "#停不下想念"]
      },
      "Godello": {
        blurb:
          "Godello 會以它安靜的力量吸引你。那份節制不是空,而是被收住的飽滿 \u2014 你會想成為那個被允許看見全部的人。",
        tags: ["#安靜力量", "#被收住的飽滿"]
      },
      "Verdicchio": {
        blurb:
          "Verdicchio 會以紀律與清晰讓你折服。一切到位、一切被打理 \u2014 那份自信本身就極具吸引力。",
        tags: ["#紀律魅力", "#一切搞定"]
      },
      "Marsanne": {
        blurb:
          "Marsanne 會以平靜的份量擁住你。不華麗、不喧鬧 \u2014 只是紮實、在場、無法被推動。那份穩定本身就是吸引。",
        tags: ["#平靜重量", "#穩固吸引"]
      },
      "Roussanne": {
        blurb:
          "Roussanne 會緩緩、優雅地展開。柔軟把你引進去,層次留住你 \u2014 是每次相處都揭開新一層的那種葡萄。",
        tags: ["#層層展開", "#每次都新"]
      },
      "Ribolla Gialla": {
        blurb:
          "Ribolla Gialla 會以那份好奇心迷住你。稍微非主流、永遠對「有意思」感興趣 \u2014 是那種你想一直探索下去的心思。",
        tags: ["#好奇心思", "#一直探索"]
      },
      "Xarel-lo": {
        blurb:
          "Xarel-lo 會以安靜的力量贏得你的欣賞。那份骨架、紀律、從不需要證明的力量 \u2014 極為迷人。",
        tags: ["#安靜力量", "#不必證明"]
      },
      "Savagnin": {
        blurb:
          "Savagnin 會以它強烈的個體性讓你著迷。怪奇、強烈、完全不感興趣融入 \u2014 是那種你說不清楚卻無法抗拒的吸引。",
        tags: ["#強烈個體", "#說不清的吸引"]
      }
    }
  },

  /* ─────────────────────────────────────────────────────────────────
     SIMPLIFIED CHINESE (zh-Hans)

     Mostly character-level 繁→简 conversion of zh-Hant. Mainland-
     conventional vocabulary swaps applied where they meaningfully
     differ (e.g. 計畫→计划, 經典電影 titles localized to mainland
     conventional names like 罗马假日 / 天使爱美丽 / 穿普拉达的女王).
     Grape varietal names stay in Latin script in both Chinese
     locales — international wine convention.
     ───────────────────────────────────────────────────────────────── */
  "zh-Hans": {
    ui: {
      pageTitle: "你是哪一款葡萄?",

      landingTitleHTML: "你是哪一款 <em>葡萄</em>?",
      landingSubHTML:
        "15 道题目 \u00B7 5 个人格维度 \u00B7 50 种葡萄品种<br>" +
        "找出属于你的 <strong>红葡萄</strong> 与 <strong>白葡萄</strong>。",
      landingCTA:  "开始测验",
      landingNote: "约需 3 分钟 \u00B7 无需注册",
      landingCoverAlt: "你是哪一款葡萄?",

      questionLabelFmt: "第 {n} 题",
      progressFmt:      "{n} / {total}",
      backBtn:          "上一题",
      nextBtn:          "下一题",
      finalBtn:         "查看我的结果",

      calcText: "正在从 50 种葡萄中为你寻找最契合的个性\u2026",

      resultsTitle:        "你的葡萄配对",
      redMatchBadge:       "红葡萄",
      whiteMatchBadge:     "白葡萄",
      tanninPrefix:        "单宁:",
      acidityPrefix:       "酸度:",
      classicExpressions:  "经典产区:",
      wikiLink:            "在维基百科了解更多 \u2192",

      pairingHeading:    "为什么这个组合很搭",
      pairingNoteFmt:    "这是一场 {sigRed} 与 {sigWhite} 的配对。",
      fallForHeading:    "你会为之心动的葡萄",
      profileHeading:    "你在 5 个人格维度上的位置",
      profileIntro:
        "每一条轴显示你在两种特质之间的位置。" +
        "圆点标示你的落点;越靠中央越平衡。",
      orbitHeading: "与你共振的其他葡萄",
      orbitIntro:   "另外四款和你频率相近的葡萄。",

      profileLeaning:  "偏向",
      profileBalanced: "平衡",
      profileSep:      " \u00B7 ",

      shareTitleDownload:  "保存图片",
      shareTitleInstagram: "分享到 Instagram",
      shareTitleX:         "分享到 X",
      shareTitleFacebook:  "分享到 Facebook",
      shareTitleWhatsapp:  "分享到 WhatsApp",
      shareTitleLine:      "分享到 LINE",
      shareTitleCopy:      "复制文字",

      shareCopied:         "已复制到剪贴板!",
      shareCopyFailed:     "无法自动复制 \u2014 请手动复制。",
      shareInstagramToast: "图片已保存!打开 Instagram 从相册选择分享。",
      shareXToast:         "图片已保存 \u2014 发帖时附上即可!",
      shareFacebookToast:  "图片已保存 \u2014 在 Facebook 发帖时附上!",
      shareWhatsappToast:  "图片已保存 \u2014 在聊天中附上即可!",
      shareLineToast:      "图片已保存 \u2014 在 LINE 聊天附上即可!",

      retakeBtn: "重新测验",

      shareTextHeader: "我做了葡萄人格测验!",
      shareTextRed:    "红葡萄配对",
      shareTextWhite:  "白葡萄配对",
      shareTextFall:   "让我心动的葡萄",
      shareTextTry:    "你也来试试",

      langToggleEn:   "EN",
      langToggleTc:   "繁",
      langToggleSc:   "简",
      langSwitchAria: "切换语言"
    },

    /* ── 5 人格维度 ─────────────────────────────────────────────── */
    dims: [
      { left: "外向",     right: "内省" },     // S
      { left: "浓烈",     right: "细致" },     // B
      { left: "经典",     right: "冒险" },     // C
      { left: "大地系",   right: "花香系" },   // E
      { left: "规律",     right: "随性" }      // P
    ],

    /* ── 单宁 / 酸度 等级 ──────────────────────────────────────── */
    tannins: {
      "Firm":         "强壮",
      "Velvety":      "丝滑",
      "Silky":        "柔顺",
      "Low":          "轻柔",
      "Fine-grained": "细腻",
      "Gripping":     "紧实"
    },
    acidities: {
      "Fresh":    "清新",
      "Bright":   "明亮",
      "Racy":     "锐利",
      "Soft":     "柔和",
      "Electric": "电流般"
    },

    /* ── 15 道题目 ─────────────────────────────────────────────── */
    questions: [
      {
        text: "你给人留下的第一印象通常是\u2026",
        opts: [
          "鲜明、强烈,让人无法忽略",
          "温暖、自信,自然吸引目光",
          "温柔、优雅,从容沉静",
          "内敛、安静,让人慢慢记住"
        ]
      },
      {
        text: "选择纪念日晚餐的餐厅时,你最喜欢\u2026",
        opts: [
          "你已经信任的经典名店,每个细节都做得到位",
          "熟悉的爱店推出新菜单或巧思变化",
          "你喜欢的料理风格,但选一家更出乎意料的店",
          "全新开业、原创、令人难忘的店"
        ]
      },
      {
        text: "如果可以随意度过一个安静的午后,你会选择\u2026",
        opts: [
          "阴凉森林,有苔藓、树皮与光影",
          "静谧花园,有香草、茶与石板小径",
          "春日市集,绿意盎然、新鲜花香扑鼻",
          "玫瑰与野花花园,柔软、芬芳、如梦似幻"
        ]
      },
      {
        text: "处理重要事情时,你的节奏通常是\u2026",
        opts: [
          "深思熟虑、井然有序、仔细打磨",
          "稳定可靠,留有呼吸的空间",
          "直觉灵活,跟着当下的感觉走",
          "全凭本能、流动,在行动中完全活着"
        ]
      },
      {
        text: "认识新朋友时,你的直觉反应是\u2026",
        opts: [
          "轻松聊、开玩笑,看连接往哪里走",
          "问体贴的问题,自然地建立温度",
          "等到对的时机,才慢慢展现自己",
          "先静静观察,等到连接真实才加入"
        ]
      },
      {
        text: "什么样的电影或剧集最能打动你?",
        opts: [
          "至今依然强大的真正经典 \u2014 罗马假日、傲慢与偏见、教父",
          "精致迷人、制作精良 \u2014 穿普拉达的女王、朱莉与朱莉娅、吉尔莫女孩",
          "新鲜、有风格、稍微非主流 \u2014 天使爱美丽、布达佩斯大饭店",
          "怪奇原创、难以归类 \u2014 黑镜、人生切割术、超现实或不寻常的故事"
        ]
      },
      {
        text: "在紧张或高张力的时刻,你的存在感更像\u2026",
        opts: [
          "立刻改变整个氛围的力量",
          "让人自然依靠的稳定中心",
          "让情绪沉淀、变得细腻的柔和细节",
          "在一切结束后仍隐约留下的痕迹"
        ]
      },
      {
        text: "哪一种逃离日常的方式最像你?",
        opts: [
          "山林避世,安静而踏实",
          "乡间小住,有花园、茶与村落小径",
          "明亮小镇,充满花卉、市集与海风",
          "梦幻的地方,柔软、晶莹、略带不真实"
        ]
      },
      {
        text: "在群体中,你的存在最常被感受为\u2026",
        opts: [
          "点亮气氛、推动事情前进的火花",
          "让人放松、彼此连接的温暖",
          "话不多却洞察一切的安静觉察",
          "让某个人感到真正被看见的深度"
        ]
      },
      {
        text: "你对美的品味,通常倾向\u2026",
        opts: [
          "经得起时间考验、隽永的优雅",
          "带有温度与个性的细致品味",
          "新鲜、好奇、稍带意外感",
          "独特、极具个人风格、完全自成一格"
        ]
      },
      {
        text: "在美丽的场景中,你最先注意到什么?",
        opts: [
          "质地 \u2014 木头、石头、土壤、清凉的阴影",
          "静谧生机 \u2014 叶子、香草、枝条、所有活着的绿意",
          "新鲜感 \u2014 光线、花瓣、柑橘、清晨空气",
          "香气 \u2014 玫瑰、花朵、香水、整个氛围"
        ]
      },
      {
        text: "计划突然改变时,你的第一反应是\u2026",
        opts: [
          "重新建立秩序,立刻拟定新计划",
          "冷静调整,让情况保持平衡",
          "见招拆招,相信自己的直觉",
          "顺着新的能量走,看会通往哪里"
        ]
      },
      {
        text: "哪一种歌曲最吸引你?",
        opts: [
          "强而有力、戏剧性十足 \u2014 007 主题曲、波西米亚狂想曲、宏大交响式情歌",
          "温暖饱满、充满生命力 \u2014 ABBA、Motown、爵士流行、令人愉悦的经典",
          "柔软、精致、层次细腻 \u2014 木吉他歌曲、轻柔钢琴、低调独立情歌",
          "萦绕心头、挥之不去 \u2014 梦幻流行、氛围配乐、会留在脑海里的歌"
        ]
      },
      {
        text: "走进一个满是人的房间时,你自然会\u2026",
        opts: [
          "轻松开启对话,把气氛点亮",
          "从几段温暖的交流开始,让场合变得欢迎",
          "先靠近熟悉的人事物,再慢慢打开",
          "走向某个让你真正有感觉的人或瞬间"
        ]
      },
      {
        text: "对你来说最自然的生活节奏是\u2026",
        opts: [
          "清楚、有意识、安静地掌控一切",
          "稳定、平衡、被温柔地接住",
          "弹性、开放、随时可以转向",
          "自发、本能,难以被太久地框住"
        ]
      }
    ],

    /* ── 50 种葡萄 ─────────────────────────────────────────────── */
    grapes: {
      /* ===== Reds ===== */
      "Cabernet Sauvignon": {
        sig:    "掌控",
        blurb:
          "Cabernet Sauvignon 结构分明、力量饱满,沉稳到无可置疑;它建立在深度、掌控与稳固的形体之上。" +
          "作为一个人,你给人能干、自持、难以动摇的印象。你不是混乱式的魅力 \u2014 你就是那个计划本身。",
        expr:   "波尔多左岸、纳帕谷",
        tags:   ["#掌控感", "#强势气场", "#结构派灵魂"]
      },
      "Merlot": {
        sig:    "从容",
        blurb:
          "Merlot 柔软、圆润、慷慨,柔软并不代表单薄。" +
          "你给人温暖、好亲近、情绪上轻松相处的感觉,但底下其实很有分量。" +
          "人们在你身边很快就能放松,然后才意识到你其实层次相当丰富。",
        expr:   "Pomerol、Saint-Émilion",
        tags:   ["#从容自在", "#温暖亲近", "#沉静层次"]
      },
      "Pinot Noir": {
        sig:    "细腻",
        blurb:
          "Pinot Noir 细致、层次丰富、充满细节,展现的是细腻而非粗暴的力量。" +
          "你敏感、有洞察力、安静地散发吸引力,是那种让人事后仍持续想起的人。" +
          "你不会大声走进房间;你会留下来。",
        expr:   "Burgundy、Willamette Valley",
        tags:   ["#细腻心思", "#柔中有力", "#余韵悠长"]
      },
      "Syrah": {
        sig:    "阴影",
        blurb:
          "Syrah 暗沉、强烈,充满香料、烟熏与阴影。" +
          "你同时拥有力量与神秘,即使沉默,存在感也很强烈。" +
          "你的本质不是低调的 \u2014 只是时机掌握得好。",
        expr:   "Northern Rhône、Barossa Shiraz",
        tags:   ["#阴影气场", "#暗黑强度", "#香料烟熏"]
      },
      "Grenache": {
        sig:    "光亮",
        blurb:
          "Grenache 多汁、温暖、坦诚,带着明亮、果香与大方的慷慨。" +
          "你充满能量、即兴、情感丰沛,像那种会自然把一天变得更精彩的人。" +
          "你非常擅长把「只喝一杯」变成整晚的故事。",
        expr:   "Châteauneuf-du-Pape、Priorat",
        tags:   ["#光亮明媚", "#坦率真心", "#自由灵魂"]
      },
      "Nebbiolo": {
        sig:    "严峻",
        blurb:
          "Nebbiolo 高音调、结构分明,以一种美丽的方式严峻 \u2014 全是张力、香气与单宁。" +
          "你看起来优雅、认真、不容急切催促,标准在你开口前就能被感觉到。" +
          "你不是「难搞」 \u2014 你只是难以被简化。",
        expr:   "Barolo、Barbaresco",
        tags:   ["#美丽严峻", "#优雅张力", "#为时光而生"]
      },
      "Sangiovese": {
        sig:    "个性",
        blurb:
          "Sangiovese 咸香、生动、结构鲜明,有酸度、有个性,还带一点棱角般的魅力。" +
          "你诚实、生动、踏实,温暖却又有骨气。" +
          "你讨人喜欢,但从不平淡。",
        expr:   "Chianti Classico、Brunello di Montalcino",
        tags:   ["#鲜明个性", "#诚实魅力", "#咸香骨气"]
      },
      "Tempranillo": {
        sig:    "从容",
        blurb:
          "Tempranillo 沉着、平衡、安静地高贵,带着节制、光泽与稳定的深度。" +
          "你给人可靠、成熟、自我控制的印象,从不需要刻意宣告自己的冷静。" +
          "你是那种大家会把订位、预算、群体决定都交给你的人。",
        expr:   "Rioja、Ribera del Duero",
        tags:   ["#沉着从容", "#安静贵族", "#稳定深度"]
      },
      "Malbec": {
        sig:    "震撼",
        blurb:
          "Malbec 饱满、深沉、强烈,丰厚的能量会迅速而清楚地落地。" +
          "你自信、慷慨、极好读懂,人们在你进门的瞬间就能感受到你的气场。" +
          "你是有礼貌的震撼。",
        expr:   "Cahors、Mendoza",
        tags:   ["#存在震撼", "#丝绒力量", "#慷慨能量"]
      },
      "Cabernet Franc": {
        sig:    "智性",
        blurb:
          "Cabernet Franc 提拔、带药草气、聪明,比第一眼看上去更精细一些。" +
          "你善于观察、优雅、隐然原创,是那种值得花时间细看的存在。" +
          "你很少是现场最大声的人,但常常是最有意思的那位。",
        expr:   "Chinon、Bourgueil",
        tags:   ["#智性魅力", "#提拔风格", "#青草边缘"]
      },
      "Gamay": {
        sig:    "火花",
        blurb:
          "Gamay 明亮、多汁、俏皮、满是魅力,清新的气质让它即刻讨喜。" +
          "你社交、有幽默感、自然带来愉悦感,是那种不费力就能提振气氛的人。" +
          "你不肤浅 \u2014 只是危险地容易被喜欢。",
        expr:   "Beaujolais、Cru Beaujolais",
        tags:   ["#瞬间火花", "#俏皮魅力", "#即刻欢愉"]
      },
      "Zinfandel": {
        sig:    "豪放",
        blurb:
          "Zinfandel 热情奔放、成熟、能量饱满,有时甚至华丽地过头。" +
          "你给人鲜明、冲动、难以收敛的感觉,个性偏好满音量,而非谨慎的节制。" +
          "你不来这里做一半。",
        expr:   "California Zinfandel、Primitivo di Manduria",
        tags:   ["#豪放奔放", "#满音量", "#不留余地"]
      },
      "Barbera": {
        sig:    "动能",
        blurb:
          "Barbera 活泼、酸度高、充满动感,没有太多单宁抓地,却一直在前进。" +
          "你充满能量、开放、永远在动,是那种对人生充满食欲、无法安静太久的人。" +
          "你满口「走吧」,很少说「也许再说」。",
        expr:   "Barbera d'Asti、Barbera d'Alba",
        tags:   ["#动感前进", "#明亮酸度", "#食欲旺盛"]
      },
      "Dolcetto": {
        sig:    "舒服",
        blurb:
          "Dolcetto 柔软、好亲近、轻微的土壤气息,是舒服与从容,而非锐利的戏剧。" +
          "你踏实、善良、安静地让人放松,是那种光是出现就能降低房里焦虑的人。" +
          "你是有品味的舒服。",
        expr:   "Dolcetto d'Alba、Dogliani",
        tags:   ["#舒服亲近", "#温柔土地", "#安静疗愈"]
      },
      "Cinsault": {
        sig:    "轻盈",
        blurb:
          "Cinsault 轻盈、灵巧、优雅,柔软、香气与从容并存。" +
          "你放松、好看、自然地不刻意,是那种越不过度经营越漂亮的人。" +
          "你非常擅长看起来「毫不费力」 \u2014 那当然,本身就是一种技术。",
        expr:   "南罗讷河混酿、南非老藤 Cinsault",
        tags:   ["#轻盈空气", "#步履轻巧", "#不费力的优雅"]
      },
      "Mourvèdre": {
        sig:    "重力",
        blurb:
          "Mourvèdre 带着土壤气、密度高、严肃,有深度、温度,还有更暗一层的重力感。" +
          "你给人有主见、踏实、不太愿意停留在表层的印象。" +
          "你是团体里最容易说「不,我们来谈谈真正在发生什么」的那个人。",
        expr:   "Bandol、以 Mourvèdre 为主的 GSM 混酿",
        tags:   ["#沉重重力", "#深沉气质", "#踏实力量"]
      },
      "Carmenère": {
        sig:    "丝绒",
        blurb:
          "Carmenère 质地柔软、果味偏深、带一点神秘,常常先柔顺、后在底下变得有趣。" +
          "你温暖、引人好奇、稍稍难以捉摸,柔软之下藏着比人们以为更多的层次。" +
          "你好亲近,但从不一览无遗。",
        expr:   "Peumo、Colchagua Valley",
        tags:   ["#丝绒质地", "#柔顺神秘", "#隐藏层次"]
      },
      "Aglianico": {
        sig:    "耐力",
        blurb:
          "Aglianico 力量强大、结构分明、为时间而建,带着严肃的单宁与深度。" +
          "你内敛、强烈、有耐力 \u2014 不是一见钟情型,但极为真实。" +
          "你不会是大家随意的最爱;你会是某个人的长期执着。",
        expr:   "Taurasi、Aglianico del Vulture",
        tags:   ["#漫长耐力", "#严峻结构", "#长线着迷"]
      },
      "Touriga Nacional": {
        sig:    "戏剧",
        blurb:
          "Touriga Nacional 丰厚、芬芳、单宁明显、戏剧感十足,将力量与花香的提升融合在一起。" +
          "你骄傲、强烈、隐隐地有舞台感,存在感同时强大且光润。" +
          "你不只是走进场景 \u2014 你是登场。",
        expr:   "Douro 红酒、Vintage Port",
        tags:   ["#戏剧登场", "#芬芳力量", "#华丽风采"]
      },
      "Nero d’Avola": {
        sig:    "阳光",
        blurb:
          "Nero d'Avola 暗、强烈、被阳光烘暖,果香慷慨,结构也比初印象来得扎实。" +
          "你给人开朗、温暖、自信的印象,但底下其实很有分量。" +
          "你是那个有趣的人,意外地拥有强烈的主见。",
        expr:   "Sicilia、Noto / Eloro",
        tags:   ["#阳光气质", "#温暖自信", "#有分量的开朗"]
      },
      "Blaufränkisch": {
        sig:    "冷感",
        blurb:
          "Blaufränkisch 冷调、带香料、结构细腻,清新与智性胜过丰厚。" +
          "你思路清楚、沉着,稍微让不专心的人感到压力。" +
          "你不是冷漠 \u2014 只是精准。",
        expr:   "Burgenland、Leithaberg",
        tags:   ["#冷静清晰", "#精准锐利", "#安静边缘"]
      },
      "Xinomavro": {
        sig:    "严苛",
        blurb:
          "Xinomavro 严苛、酸度高、单宁明显、思辨性强,拥有一种严峻的美感。" +
          "你给人节制、自持、结构分明的印象,情感真实但不会随意外放。" +
          "你是带着论点的优雅。",
        expr:   "Naoussa、Amyndeon",
        tags:   ["#严苛美感", "#思辨深度", "#精炼优雅"]
      },
      "Corvina": {
        sig:    "节制",
        blurb:
          "Corvina 提拔、低调、安静时尚,有清新与节制,而非粗犷的力量。" +
          "你优雅、自我控制,难以被一眼看穿。" +
          "你是「不全盘交出」这门艺术。",
        expr:   "Valpolicella Classico、Amarone della Valpolicella",
        tags:   ["#节制风格", "#安静时尚", "#优雅保留"]
      },
      "Mencía": {
        sig:    "自由",
        blurb:
          "Mencía 清新、花香、稍带野性、能量充沛,介于优雅与自由之间。" +
          "你体贴、敏感,并且刚好野到令人兴奋。" +
          "你最有可能同时拥有好品味,以及一些稍微危险的直觉。",
        expr:   "Bierzo、Ribeira Sacra",
        tags:   ["#自由灵魂", "#野性优雅", "#花香未驯"]
      },
      "Pinotage": {
        sig:    "叛逆",
        blurb:
          "Pinotage 烟熏、强悍、辨识度高,毫不掩饰地做自己。" +
          "你大胆、不走寻常路、无法被误认成任何人。" +
          "你不会试图讨好整个房间 \u2014 而奇妙的是,这反而成立了。",
        expr:   "Stellenbosch、Swartland",
        tags:   ["#叛逆姿态", "#烟熏强悍", "#不可复制"]
      },

      /* ===== Whites ===== */
      "Chardonnay": {
        sig:    "光润",
        blurb:
          "Chardonnay 光润、适应力强、结构分明,能在多种风格中保持经典。" +
          "你能干、多面向、自然得体,适合场合却又不会被场合吃掉。" +
          "你总是看起来像早就知道 dress code。",
        expr:   "Burgundy、California Chardonnay",
        tags:   ["#光润质感", "#多面优雅", "#经典轮廓"]
      },
      "Sauvignon Blanc": {
        sig:    "清亮",
        blurb:
          "Sauvignon Blanc 锐利、明亮、生动,酸度与清晰度直接划过。" +
          "你直接、清新、警醒,是那种让对话迷雾瞬间散去的人。" +
          "你是有意见的清脆能量。",
        expr:   "Sancerre、Marlborough",
        tags:   ["#清亮直率", "#爽脆", "#新鲜观点"]
      },
      "Riesling": {
        sig:    "精准",
        blurb:
          "Riesling 精准、酸度高、结构细腻,美感建立在张力与细节之上。" +
          "你看起来秀气、聪明,实际上比第一眼来得精准许多。" +
          "你看起来柔软,直到对方意识到你其实有多锐利。",
        expr:   "Mosel、Rheingau",
        tags:   ["#精准张力", "#秀外慧中", "#柔中藏锋"]
      },
      "Chenin Blanc": {
        sig:    "幅度",
        blurb:
          "Chenin Blanc 多面向、酸度高、层次丰富,能明亮、能厚实、能严肃、能俏皮,却始终是自己。" +
          "你聪明、复杂,难以被简化,拥有不只一个音域,也没有必要只选一个。" +
          "你包容多重面貌,而且大概也清楚这一点。",
        expr:   "Vouvray、Savennières",
        tags:   ["#多元幅度", "#多重音域", "#智性深度"]
      },
      "Gewürztraminer": {
        sig:    "鲜明",
        blurb:
          "Gewürztraminer 香气浓烈、丰厚、辨识度极高,全是香水、香料与个性。" +
          "你表达力强、原创、极为自我。" +
          "人们对你不会中立,而老实说,这也很好。",
        expr:   "Alsace、Alto Adige",
        tags:   ["#鲜明个性", "#浓烈香气", "#不可复制的自己"]
      },
      "Pinot Grigio": {
        sig:    "干净",
        blurb:
          "Pinot Grigio 干净、爽脆、清新,从容与简单也是它的迷人之处。" +
          "你低戏剧、明亮、好相处,不需要时刻表演复杂。" +
          "你是大家原本没意识到自己需要的松一口气。",
        expr:   "Alto Adige、Friuli",
        tags:   ["#干净爽脆", "#低戏剧", "#轻盈舒缓"]
      },
      "Viognier": {
        sig:    "丰润",
        blurb:
          "Viognier 丰厚、花香、酒体饱满,柔软、香气与一种浪漫的质感并存。" +
          "你表达丰富、温暖、稍带华丽,自然会占据情感空间。" +
          "你不是太多 \u2014 是其他人调味不够。",
        expr:   "Condrieu、California Viognier",
        tags:   ["#丰润质感", "#浪漫温暖", "#花桃香气"]
      },
      "Albariño": {
        sig:    "海风",
        blurb:
          "Albariño 明亮、带咸味、活泼,清新、迷人,像海风一样让人提神。" +
          "你善于社交、开放、容易被喜欢,出现本身就让气氛变好。" +
          "你是化身为人的清新空气。",
        expr:   "Rías Baixas、Vinho Verde Alvarinho",
        tags:   ["#海风气质", "#沿海明亮", "#社交火花"]
      },
      "Assyrtiko": {
        sig:    "钢骨",
        blurb:
          "Assyrtiko 电流般、矿石感、结构强势,酸度强烈、骨架真实。" +
          "你专注、有韧性、不容易被折弯。" +
          "你是压力下仍保持优雅的那种人。",
        expr:   "Santorini、希腊大陆 Assyrtiko",
        tags:   ["#钢骨结构", "#火山张力", "#电流般专注"]
      },
      "Grüner Veltliner": {
        sig:    "机智",
        blurb:
          "Grüner Veltliner 爽脆、药草、胡椒、聪明,清新之外还有微咸的切入感。" +
          "你机智、沉着,比平静的外表所暗示的更锐利一些。" +
          "你是房间里会用淡定表情说出最好笑的话的人。",
        expr:   "Wachau、Kamptal",
        tags:   ["#机智冷静", "#胡椒锐利", "#聪慧沉着"]
      },
      "Muscat": {
        sig:    "魅力",
        blurb:
          "Muscat 香气浓郁、迷人、表达力强,即使酿成干型,个性依然甜美。" +
          "你明亮、好亲近,完全不会被误认成节制的极简。" +
          "你知道自己有魅力,坦白说,你也很会用。",
        expr:   "Moscato d'Asti、Muscat d'Alsace",
        tags:   ["#魅力四溢", "#甜美个性", "#坦率表达"]
      },
      "Torrontés": {
        sig:    "色彩",
        blurb:
          "Torrontés 香气明显、俏皮、色彩饱满,个性鲜明、花香提拔。" +
          "你活泼、表达丰富,刚好戏剧到让人觉得有趣。" +
          "你是「明亮」决定当主角时会发生的事。",
        expr:   "Salta、阿根廷 La Rioja",
        tags:   ["#色彩饱满", "#俏皮表达", "#花香主角"]
      },
      "Vermentino": {
        sig:    "从容",
        blurb:
          "Vermentino 阳光、药草感、带咸味,拥有地中海式的从容与明亮。" +
          "你放松、自然,容易让人想象在某趟漂亮的旅程上。" +
          "你是化身为「好决定」的度假感。",
        expr:   "Sardinia、Liguria",
        tags:   ["#地中海从容", "#阳光药草", "#度假能量"]
      },
      "Arneis": {
        sig:    "难捉",
        blurb:
          "Arneis 柔软、优雅、难以捉摸,美感是细微的,而非显而易见的。" +
          "你优雅、稍稍距离感、不容易被快速定义。" +
          "你是那种人们先称「有意思」,再慢慢解释为什么的存在。",
        expr:   "Roero Arneis、Piedmont Arneis",
        tags:   ["#难以捉摸", "#柔和神秘", "#难以一句话定义"]
      },
      "Falanghina": {
        sig:    "欢快",
        blurb:
          "Falanghina 明亮、友善、能量饱满,清新与魅力都不费力。" +
          "你开朗、好聊、自然轻快。" +
          "你像把窗户整个打开的那种情绪。",
        expr:   "Falanghina del Sannio、Campania",
        tags:   ["#欢快气息", "#明亮提振", "#不费力欢愉"]
      },
      "Semillon": {
        sig:    "耐心",
        blurb:
          "Semillon 平静、宽广、会慢慢加深,常常不那么抢眼,但极为耐久。" +
          "你稳定、有耐心,随时间推移比第一印象更有分量。" +
          "你不是即时效果 \u2014 你是长线。",
        expr:   "Hunter Valley、Bordeaux Blanc / Sauternes",
        tags:   ["#耐心深度", "#慢慢显露", "#安静出众"]
      },
      "Fiano": {
        sig:    "踏实",
        blurb:
          "Fiano 踏实、有质地、有思想,温暖、有分量、内在沉静。" +
          "你内省、有分量、安静地自信。" +
          "你是不需要戏剧的深度。",
        expr:   "Fiano di Avellino、Campania Fiano",
        tags:   ["#踏实沉稳", "#内在沉静", "#不戏剧的深度"]
      },
      "Garganega": {
        sig:    "微光",
        blurb:
          "Garganega 优雅、细微、柔和地发光,带着轻柔的果味与低调的美。" +
          "你沉稳、优雅,容易在初识时被低估,直到对方花更多时间和你相处。" +
          "你是柔和的光,而不是闪烁的星。",
        expr:   "Soave Classico、Recioto di Soave",
        tags:   ["#柔和微光", "#低调美感", "#温柔光晕"]
      },
      "Godello": {
        sig:    "节制",
        blurb:
          "Godello 节制、矿石、结构安静,属于沉稳的力量,而非花俏的张扬。" +
          "你稳定、自我包容,比表面看起来更强。" +
          "你是那种沉默不空虚、反而有重量的人。",
        expr:   "Valdeorras、Bierzo",
        tags:   ["#节制力量", "#安静强度", "#底蕴饱满"]
      },
      "Verdicchio": {
        sig:    "纪律",
        blurb:
          "Verdicchio 明亮、有纪律、清爽干净,酸度与秩序带来提神,而非严峻。" +
          "你条理清楚、令人放心。" +
          "你是「一切都被打理好了」的个性版本。",
        expr:   "Castelli di Jesi、Matelica",
        tags:   ["#纪律分明", "#爽脆秩序", "#一切搞定"]
      },
      "Marsanne": {
        sig:    "分量",
        blurb:
          "Marsanne 有分量、平静、肩膀宽,酸度较低,给人踏实厚重的感觉。" +
          "你扎实、自我包容、安静地有力量。" +
          "你不是闪光,而是承接。",
        expr:   "Hermitage Blanc、Saint-Joseph Blanc",
        tags:   ["#沉稳分量", "#平静在场", "#宽肩承接"]
      },
      "Roussanne": {
        sig:    "柔软",
        blurb:
          "Roussanne 香气丰富、层次细腻、质地柔软,美感会慢慢展开。" +
          "你温柔、体贴,情感层次以非常吸引人的方式被着色。" +
          "你细腻,但从不平淡。",
        expr:   "Hermitage Blanc、Châteauneuf-du-Pape Blanc",
        tags:   ["#柔软细腻", "#层次展开", "#芬芳精致"]
      },
      "Ribolla Gialla": {
        sig:    "好奇",
        blurb:
          "Ribolla Gialla 明亮、有质地、稍带非主流,好奇心是它本身的个性。" +
          "你体贴、稍微偏离中心,更感兴趣的是「有意思」而非「明显」。" +
          "你绝对会注意到别人错过的细节。",
        expr:   "Collio、Brda",
        tags:   ["#好奇心强", "#稍稍偏移", "#质地心思"]
      },
      "Xarel-lo": {
        sig:    "骨架",
        blurb:
          "Xarel-lo 结构分明、干、安静地有力量,拥有骨架而非外放的魅力。" +
          "你自律、可靠,比表面强很多。" +
          "你是让整件事成立的关键。",
        expr:   "Penedès、Cava",
        tags:   ["#骨架支撑", "#安静力量", "#结构稳固"]
      },
      "Savagnin": {
        sig:    "怪奇",
        blurb:
          "Savagnin 酸度高、怪奇、极度个人化,结构真实、辨识度十足。" +
          "你强烈、自我包容,完全不感兴趣融入。" +
          "你不是偶然小众。",
        expr:   "Côtes du Jura Savagnin、Vin Jaune",
        tags:   ["#怪奇个性", "#强烈自我", "#选择做自己"]
      }
    },

    /* ── 25 种 Pairing 解说 ────────────────────────────────────── */
    pairings: {
      "R1+W1": {
        text:
          "这个组合自律、沉着、极度自我包容。你的红酒面带来结构、标准与认真,白酒面增添光润、节制与内在控制。" +
          "两者合在一起,构成一种建立在内涵而非声量上的人格 \u2014 稳定、能干、踏实。",
        tags: ["#自律核心", "#内涵胜过声量"]
      },
      "R1+W2": {
        text:
          "这个组合在权威与清新之间找到平衡。红酒面给你骨气、分量与高标准,白酒面则保持你的开放、清晰与容易接近。" +
          "于是,你强壮,却不至严峻。",
        tags: ["#权威与清新", "#强而不冷"]
      },
      "R1+W3": {
        text:
          "这是高分辨率的组合:结构分明、精准、不容糊化。红酒面带来严肃与形体,白酒面增添精准、张力与内在的锐利。" +
          "你看起来精炼、聪明、极度自持。",
        tags: ["#高分辨率", "#锐利清晰"]
      },
      "R1+W4": {
        text:
          "这个组合把节制与显而易见的个性融在一起。红酒面给你深度、控制与权威,白酒面增添表达力、香气,以及更外显的情感层次。" +
          "你内里认真,却从不显得平板。",
        tags: ["#节制与表达", "#认真但好接近"]
      },
      "R1+W5": {
        text:
          "这个组合体贴、层次丰富、安静地有品味。红酒面带给你结构与重力,白酒面提供细致的个性与内在质地。" +
          "于是,你既有标准,也有感知的深度。",
        tags: ["#安静的品味", "#标准与深度"]
      },
      "R2+W1": {
        text:
          "这个组合厚重、可控、让人不容轻视。红酒面带来力量、暗沉与情感的分量,白酒面为这份强度赋予形体与纪律。" +
          "于是,你强大、认真、难以被动摇。",
        tags: ["#不容轻视", "#力量配上形体"]
      },
      "R2+W2": {
        text:
          "这个组合替强度增添提拔。红酒面深沉、强烈、情绪充满,白酒面则让你保持鲜明、社交活跃、容易被连接。" +
          "你强壮、活着、磁性十足。",
        tags: ["#提拔的强度", "#磁性存在"]
      },
      "R2+W3": {
        text:
          "这是最锐利的组合之一:暗黑力量配上明亮张力。红酒面带来深度与重力,白酒面增添精准、矿石气与神经。" +
          "你强烈、聚焦,难以被简化成一句话。",
        tags: ["#暗黑力量", "#明亮张力"]
      },
      "R2+W4": {
        text:
          "这个组合戏剧感强、表达丰富、极为难忘。红酒面带来阴影、热度与力量,白酒面增添香气、柔软,或外显的情绪。" +
          "你丰厚、迷人、稍微比生活大一点。",
        tags: ["#戏剧表达", "#超脱日常"]
      },
      "R2+W5": {
        text:
          "这个组合深沉、奇特、质地复杂。红酒面带着严肃与情感力度,白酒面则加入细微的个性与不那么显眼的内在层次。" +
          "你看起来神秘、体贴、难以被压平成单一音符。",
        tags: ["#深沉质地", "#神秘内里"]
      },
      "R3+W1": {
        text:
          "这个组合在温暖与形状之间取得平衡。红酒面带来开放、社交与慷慨,白酒面增添沉着、结构与安静的控制。" +
          "你亲切、踏实,比第一印象更精炼。",
        tags: ["#带形状的温暖", "#踏实魅力"]
      },
      "R3+W2": {
        text:
          "这是系统里最明亮、最容易亲近的组合之一。红酒面带来温度、动能与情感慷慨,白酒面增添清新、开放与自然的魅力。" +
          "你活泼、好邀请、容易被喜欢。",
        tags: ["#明亮亲近", "#活泼魅力"]
      },
      "R3+W3": {
        text:
          "这个组合在明亮与轮廓之间取得平衡。红酒面给你温暖与动感,白酒面则增添精准、警醒与更锐的边缘。" +
          "你慷慨却不模糊 \u2014 开放、清楚。",
        tags: ["#明亮的清晰", "#开放但分明"]
      },
      "R3+W4": {
        text:
          "这个组合表达力强、社交饱满、色彩缤纷。红酒面带来情感的温暖与慷慨,白酒面增添香气、个性与显而易见的魅力。" +
          "你光彩夺目、令人投入,自然难忘。",
        tags: ["#色彩表达", "#光彩能量"]
      },
      "R3+W5": {
        text:
          "这个组合外暖、内里层次丰富。红酒面带来轻松、慷慨与动能,白酒面增添好奇、个性与隐藏的深度。" +
          "你一开始好亲近,越相处越有层次。",
        tags: ["#外暖内丰", "#隐藏层次"]
      },
      "R4+W1": {
        text:
          "这个组合优雅、沉着、结构细腻。红酒面带来细微、提拔与情感层次,白酒面增添光润与内在控制。" +
          "你看起来精炼、自觉,结构整体妥当。",
        tags: ["#优雅沉着", "#精致平衡"]
      },
      "R4+W2": {
        text:
          "这个组合轻、优雅、容易连接。红酒面带来安静的风格与细节,白酒面增添开放、明亮与社交的从容。" +
          "你温柔、清新、自然讨人喜欢。",
        tags: ["#轻盈优雅", "#清新柔和"]
      },
      "R4+W3": {
        text:
          "这个组合纤细却精准。红酒面带来细致的情感层次,白酒面增添清晰、张力与精度。" +
          "你聪明、骨架秀气,安静地令人难忘。",
        tags: ["#纤细精准", "#秀骨清晰"]
      },
      "R4+W4": {
        text:
          "这个组合偏抒情、表达丰富、氛围柔软。红酒面带来提拔与含蓄,白酒面增添香气、感受与更明显的情绪色彩。" +
          "你优雅、梦幻,以非显眼的方式令人记得。",
        tags: ["#抒情梦境", "#柔软氛围"]
      },
      "R4+W5": {
        text:
          "这个组合细致、好奇、难以快速被简化。红酒面带来细微与安静风格,白酒面增添质地、内向与个性。" +
          "你体贴、优雅,稍稍难以捉摸。",
        tags: ["#细致好奇", "#优雅难捉"]
      },
      "R5+W1": {
        text:
          "这个组合在个性与控制之间取得平衡。红酒面带来特色、辨识度,或不可预测,白酒面增添形体、纪律与内在秩序。" +
          "你原创,却从不混乱。",
        tags: ["#原创有序", "#个性可控"]
      },
      "R5+W2": {
        text:
          "这个组合鲜明、表达丰富、社交活跃。红酒面带来个性与魅力,白酒面增添明亮、开放与轻巧。" +
          "你引人注目、辨识度高、极容易被注意到。",
        tags: ["#鲜明表达", "#辨识魅力"]
      },
      "R5+W3": {
        text:
          "这个组合把个性磨成精准。红酒面带来原创与强烈个性,白酒面增添聚焦、张力与轮廓。" +
          "你有意思的原因,不只是你不同 \u2014 而是你清楚。",
        tags: ["#精准个性", "#有趣且分明"]
      },
      "R5+W4": {
        text:
          "这是最具表达力的组合之一:个性遇上香气。红酒面带来个性与独特之处,白酒面增添香气、戏剧,或情感的可见度。" +
          "你鲜明、难忘,绝无法被泛化。",
        tags: ["#个性与香气", "#鲜明难忘"]
      },
      "R5+W5": {
        text:
          "这个组合质地丰富、辨识度高、安静地非主流。红酒面带来个性与特色,白酒面增添细微的怪奇、好奇,或内向的复杂。" +
          "你像那种让人在对话结束后仍持续想起的存在。",
        tags: ["#质地个性", "#安静的非主流"]
      }
    },

    /* ── 50 个 Chemistry blurb (你会为之心动的葡萄) ───────────── */
    chemistry: {
      "Cabernet Sauvignon": {
        blurb:
          "Cabernet Sauvignon 不需要开口就能要走你的注意。那份冷静的肯定、那种不追逐任何人的安静,让你想停留得比预期更久。",
        tags: ["#安静的掌控", "#难以抗拒的肯定"]
      },
      "Merlot": {
        blurb:
          "Merlot 会用从容卸下你的防备。那份温暖即时且真实,你还没回神,就已经比好久以来都更放松。",
        tags: ["#瞬间舒服", "#温暖会留下"]
      },
      "Pinot Noir": {
        blurb:
          "Pinot Noir 会以最美的方式萦绕你。你会反复回想那些细节 \u2014 那份纤细、那种安静的强度 \u2014 在当下早已过去之后。",
        tags: ["#挥之不去", "#细微着迷"]
      },
      "Syrah": {
        blurb:
          "Syrah 会用那种暗黑磁性把你拉进去。那里有危险,但是好的那种 \u2014 那种让其他事都显得太安全的危险。",
        tags: ["#暗黑磁性", "#危险地好"]
      },
      "Grenache": {
        blurb:
          "Grenache 会在你还没想第二遍前就把你卷走。那份温暖、即兴、感染力强的喜悦 \u2014 你毫无招架之力。",
        tags: ["#感染力喜悦", "#被一把卷走"]
      },
      "Nebbiolo": {
        blurb:
          "Nebbiolo 会用它美丽的严峻迷住你。它越保留,你越想了解 \u2014 而它从不让你真正读完。",
        tags: ["#美丽严峻", "#永远未完"]
      },
      "Sangiovese": {
        blurb:
          "Sangiovese 会以诚实的个性赢得你。没有游戏、没有表演 \u2014 只是温暖、骨气,还有一份完全真实的魅力。",
        tags: ["#诚实魅力", "#真实吸引"]
      },
      "Tempranillo": {
        blurb:
          "Tempranillo 会在你还没察觉前就赢得你的信任。那份沉着、安静的可靠 \u2014 是不需要戏剧就能加深的吸引。",
        tags: ["#安静信任", "#不戏剧的加深"]
      },
      "Malbec": {
        blurb:
          "Malbec 会带着无法忽略的存在感登场。大胆、慷慨、极为自信 \u2014 是那种让你感觉自己是房里最重要的人的能量。",
        tags: ["#存在感无敌", "#大胆慷慨"]
      },
      "Cabernet Franc": {
        blurb:
          "Cabernet Franc 会用你差点错过的细节吸引你。那份智性、那种细微 \u2014 是值得耐心与专注的吸引。",
        tags: ["#奖励专注", "#智性吸引"]
      },
      "Gamay": {
        blurb:
          "Gamay 会立刻、彻底地迷住你。那份轻盈、幽默、毫不费力的能量 \u2014 你还没搞清楚为什么,就已经在笑了。",
        tags: ["#瞬间心动", "#忍不住微笑"]
      },
      "Zinfandel": {
        blurb:
          "Zinfandel 会以最美好的方式淹没你。会不会太多?也许。但你不会想要任何别的版本。",
        tags: ["#华丽过度", "#没有后悔"]
      },
      "Barbera": {
        blurb:
          "Barbera 会替你充电。那种不安分的胃口、动感、不肯静止的姿态 \u2014 会传染,而你会喜欢其中每一分钟。",
        tags: ["#感染力能量", "#坐不下来"]
      },
      "Dolcetto": {
        blurb:
          "Dolcetto 会像回家一样。那份温柔、安静的舒服 \u2014 是不需要大声却处处被感觉到的吸引。",
        tags: ["#舒服吸引", "#安静难拒"]
      },
      "Cinsault": {
        blurb:
          "Cinsault 会用毫不费力的优雅把你带进去。轻盈、漂亮、完全不刻意 \u2014 你会怀疑怎么有人能做到看起来这么轻松。",
        tags: ["#不费力优雅", "#自然之美"]
      },
      "Mourvèdre": {
        blurb:
          "Mourvèdre 会把你拉回地面。那里有重力、有深度,会穿透一切表面说:这才是真正重要的。",
        tags: ["#踏实重力", "#穿透表面"]
      },
      "Carmenère": {
        blurb:
          "Carmenère 会以表面之下的东西吸引你。先柔顺、温暖,越靠近越奇特、越深。",
        tags: ["#隐藏深度", "#柔后奇特"]
      },
      "Aglianico": {
        blurb:
          "Aglianico 会挑战你 \u2014 那正是让它无法抗拒的原因。强度、耐力、不肯让自己变得容易 \u2014 这是长线级的执着。",
        tags: ["#长线着迷", "#值得等待"]
      },
      "Touriga Nacional": {
        blurb:
          "Touriga Nacional 会用纯粹的戏剧感掳获你。那份丰厚、香气、毫不掩饰的强度 \u2014 它从不做含蓄,你的吸引也不会。",
        tags: ["#纯粹戏剧", "#不含蓄的强度"]
      },
      "Nero d’Avola": {
        blurb:
          "Nero d'Avola 会惊到你 \u2014 那份阳光自信底下竟然藏了这么多分量。一开始好玩,接着意外地深。",
        tags: ["#阳光后深", "#意外分量"]
      },
      "Blaufränkisch": {
        blurb:
          "Blaufränkisch 会以冷静的精准打动你。低调、聪明,刚好锐利到让你不敢放松。",
        tags: ["#冷静精准", "#锐利吸引"]
      },
      "Xinomavro": {
        blurb:
          "Xinomavro 会以它思辨性的美迷住你。那份严峻不是冷漠 \u2014 是聚焦,而那种聚焦会把你拉进去。",
        tags: ["#思辨之美", "#聚焦吸引"]
      },
      "Corvina": {
        blurb:
          "Corvina 会以它没说出口的部分掳获你。那份节制、安静的优雅 \u2014 你会花很长时间想读懂字里行间。",
        tags: ["#字里行间", "#安静优雅"]
      },
      "Mencía": {
        blurb:
          "Mencía 会以那份美丽的野性让你心动。体贴却未驯、优雅却自由 \u2014 是稍稍危险、却完全活着的吸引。",
        tags: ["#美丽野性", "#危险地活"]
      },
      "Pinotage": {
        blurb:
          "Pinotage 会挑战你以为自己喜欢的类型。大胆、叛逆、毫不掩饰的不同 \u2014 而奇怪的是,正因如此你被吸进去。",
        tags: ["#打破类型", "#叛逆吸引"]
      },
      "Chardonnay": {
        blurb:
          "Chardonnay 会以光润与适应力打动你。在任何场合都毫不费力地得体 \u2014 那种存在会让你也想拉高自己的水准。",
        tags: ["#光润吸引", "#拉高水准"]
      },
      "Sauvignon Blanc": {
        blurb:
          "Sauvignon Blanc 会直接划过你的防备。那份直率、那份清晰 \u2014 像新鲜空气,让其他事都显得雾雾的。",
        tags: ["#穿透清晰", "#令人神清"]
      },
      "Riesling": {
        blurb:
          "Riesling 会用隐藏的锐利让你惊艳。看起来细致,直到你意识到它有多精准、多有力 \u2014 那时你已经被掳获。",
        tags: ["#隐藏锐利", "#柔中藏锋"]
      },
      "Chenin Blanc": {
        blurb:
          "Chenin Blanc 会慢慢把你拉进去。一开始它聪明、平静,还有一点难以定义 \u2014 然后你忽然发现,它的深度比你以为的多很多。",
        tags: ["#慢火吸引", "#不只如此"]
      },
      "Gewürztraminer": {
        blurb:
          "Gewürztraminer 不可能被忘记。那份强度、辨识度、坚持做自己的态度 \u2014 你不是着迷,就是被淹没。没有中间地带。",
        tags: ["#着迷或淹没", "#没有中间"]
      },
      "Pinot Grigio": {
        blurb:
          "Pinot Grigio 会以你不知道自己需要的方式让你放松。没有压力、没有表演 \u2014 只是干净、轻松、真实愉快的同伴。",
        tags: ["#轻松吸引", "#放松下来"]
      },
      "Viognier": {
        blurb:
          "Viognier 会以丰厚与温暖诱惑你。丰润、表达丰富、毫不掩饰的浪漫 \u2014 是会填满整个房间的吸引。",
        tags: ["#丰润吸引", "#浪漫气息"]
      },
      "Albariño": {
        blurb:
          "Albariño 会把一切都点亮。那份轻盈、魅力、海风般的从容 \u2026 这份能量像春天的第一个暖日。",
        tags: ["#春天暖日", "#明亮心动"]
      },
      "Assyrtiko": {
        blurb:
          "Assyrtiko 会在赢得你的喜爱之前先赢得你的尊敬。那份钢骨、韧性、不肯弯曲 \u2014 然后你会发现,尊敬其实是最深的吸引。",
        tags: ["#敬意成欲望", "#钢骨灵魂"]
      },
      "Grüner Veltliner": {
        blurb:
          "Grüner Veltliner 会在你爱上之前先让你笑。那份机智、藏在冷静底下的锐利 \u2014 是会悄悄逼近的智性。",
        tags: ["#先笑后爱", "#悄悄逼近"]
      },
      "Muscat": {
        blurb:
          "Muscat 会坦率而彻底地迷住你。那份甜真实、那份温暖真诚,效果即时 \u2014 你甚至不会想抵抗。",
        tags: ["#坦率魅力", "#瞬间生效"]
      },
      "Torrontés": {
        blurb:
          "Torrontés 会以色彩与能量让你目不暇给。鲜艳、俏皮,刚好戏剧到让事情有趣 \u2014 是「吸引等同表演」的版本。",
        tags: ["#炫目能量", "#吸引如表演"]
      },
      "Vermentino": {
        blurb:
          "Vermentino 会让一切变得更容易。那份温暖、从容、地中海式的平静 \u2014 你会觉得自己已经在度假了。",
        tags: ["#度假能量", "#轻松吸引"]
      },
      "Arneis": {
        blurb:
          "Arneis 会以它的难以捉摸吸引你。你越想定义它,它越有意思 \u2014 而那份神秘,正是重点。",
        tags: ["#神秘为重点", "#难以捉摸的魅力"]
      },
      "Falanghina": {
        blurb:
          "Falanghina 会在不费力之间提振你的心情。那份开朗会传染、能量毫不费力、魅力完全真诚。",
        tags: ["#感染欢愉", "#不费力提振"]
      },
      "Semillon": {
        blurb:
          "Semillon 会安静地长进你心里。不华丽、不即时 \u2014 但有一天你会发现,它是房里最让人印象深刻的存在。",
        tags: ["#慢慢显露", "#安静出众"]
      },
      "Fiano": {
        blurb:
          "Fiano 会以安静的分量让你踏实。没有表演、没有伪装 \u2014 只是真实的深度,让其他事都显得浅一点。",
        tags: ["#不戏剧的深度", "#真实分量"]
      },
      "Garganega": {
        blurb:
          "Garganega 会柔和地朝你发光。不是闪烁、不是炫目 \u2014 是发光。而那份温和的光晕,会让你停不下想念。",
        tags: ["#温和光晕", "#停不下想念"]
      },
      "Godello": {
        blurb:
          "Godello 会以它安静的力量吸引你。那份节制不是空,而是被收住的饱满 \u2014 你会想成为那个被允许看见全部的人。",
        tags: ["#安静力量", "#被收住的饱满"]
      },
      "Verdicchio": {
        blurb:
          "Verdicchio 会以纪律与清晰让你折服。一切到位、一切被打理 \u2014 那份自信本身就极具吸引力。",
        tags: ["#纪律魅力", "#一切搞定"]
      },
      "Marsanne": {
        blurb:
          "Marsanne 会以平静的分量拥住你。不华丽、不喧闹 \u2014 只是扎实、在场、无法被推动。那份稳定本身就是吸引。",
        tags: ["#平静重量", "#稳固吸引"]
      },
      "Roussanne": {
        blurb:
          "Roussanne 会缓缓、优雅地展开。柔软把你引进去,层次留住你 \u2014 是每次相处都揭开新一层的那种葡萄。",
        tags: ["#层层展开", "#每次都新"]
      },
      "Ribolla Gialla": {
        blurb:
          "Ribolla Gialla 会以那份好奇心迷住你。稍微非主流、永远对「有意思」感兴趣 \u2014 是那种你想一直探索下去的心思。",
        tags: ["#好奇心思", "#一直探索"]
      },
      "Xarel-lo": {
        blurb:
          "Xarel-lo 会以安静的力量赢得你的欣赏。那份骨架、纪律、从不需要证明的力量 \u2014 极为迷人。",
        tags: ["#安静力量", "#不必证明"]
      },
      "Savagnin": {
        blurb:
          "Savagnin 会以它强烈的个体性让你着迷。怪奇、强烈、完全不感兴趣融入 \u2014 是那种你说不清楚却无法抗拒的吸引。",
        tags: ["#强烈个体", "#说不清的吸引"]
      }
    }
  }
};

if (typeof window !== "undefined") window.I18N = I18N;
