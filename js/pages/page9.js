// ============================================================
// PAGE 9 - PILIHAN GANDA + GAME WORDWALL + PUZZLE BUDAYA
// ============================================================

// DEFINE GLOBAL FUNCTIONS BEFORE PAGE9() IS CALLED
// (Place this code OUTSIDE the page9 function, in your main JS file)

// ==================== PAGE 9 GLOBAL VARIABLES ====================
window.pg10QuizState = {
  quiz: [
    { opts: 3, ans: 1 },
    { opts: 3, ans: 2 },
  ],
  answered: [null, null],
};

window.wwGameState = {
  items: [
    { id: "tayub", label: "Seni Tayub" },
    { id: "sandur", label: "Seni Sandur" },
    { id: "gerabah", label: "Gerabah" },
    { id: "siraman", label: "Siraman Waranggono" },
    { id: "tongklek", label: "Tongklek Tuban" },
  ],
  matched: {},
  selImg: null,
  selName: null,
  wrongFlash: false,
};

window.pzGameState = {
  data: {
    1: { words: ["Seni", "Tayub", "khas", "Tuban"], answer: "Seni Tayub khas Tuban" },
    2: { words: ["Siraman", "Semandingan", "pengantin"], answer: "Siraman Waranggono" },
  },
  selected: { 1: [], 2: [] },
};

// ==================== PAGE 9 REVEAL ====================
window.pg9Reveal = function () {
  var cover = document.getElementById("pg9_cover");
  var content = document.getElementById("pg9_content");
  if (!cover || !content) return;

  // Animate cover out
  cover.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  cover.style.opacity = "0";
  cover.style.transform = "scale(1.04)";

  setTimeout(function () {
    cover.style.display = "none";

    // Show content with fade in
    content.style.display = "block";
    content.style.opacity = "0";
    content.style.transition = "opacity 0.6s ease";

    // Force reflow
    content.offsetHeight;
    content.style.opacity = "1";

    // Init puzzles after reveal
    setTimeout(function () {
      if (typeof window.renderPzTiles === "function") {
        window.renderPzTiles(1);
        window.renderPzTiles(2);
      }
    }, 150);

    if (typeof clickSnd === "function") clickSnd(600);
  }, 480);
};

// ==================== PAGE 9 PILIHAN GANDA ====================
window.pg10Answer = function (qi, oi) {
  console.log("pg10Answer called", qi, oi);
  if (window.pg10QuizState.answered[qi] !== null) return;
  window.pg10QuizState.answered[qi] = oi;
  var ans = window.pg10QuizState.quiz[qi].ans;

  for (var i = 0; i < window.pg10QuizState.quiz[qi].opts; i++) {
    var el = document.getElementById("pg10_opt_" + qi + "_" + i);
    if (!el) continue;
    el.style.pointerEvents = "none";
    if (i === ans) {
      el.style.background = "#E8F5E9";
      el.style.borderColor = "#43A047";
    } else if (i === oi) {
      el.style.background = "#FFEBEE";
      el.style.borderColor = "#E53935";
    } else {
      el.style.opacity = "0.45";
    }
  }

  var fb = document.getElementById("pg10_fb_" + qi);
  if (!fb) return;
  fb.style.display = "block";

  if (oi === ans) {
    fb.style.background = "#E8F5E9";
    fb.style.color = "#2E7D32";
    fb.textContent = "✅ Benar! Hebat sekali!";
    if (typeof successSnd === "function") successSnd();
  } else {
    fb.style.background = "#FFEBEE";
    fb.style.color = "#C62828";
    fb.textContent = "❌ Kurang tepat. Jawaban yang benar adalah pilihan " + String.fromCharCode(97 + ans) + ".";
    if (typeof errorSnd === "function") errorSnd();
  }
};

// ==================== PAGE 9 WORDWALL ====================
window.setWwStyle = function (el, state) {
  if (!el) return;
  if (state === "selected") {
    el.style.border = "2.5px solid #7B1FA2";
    el.style.background = "#F3E5F5";
    el.style.transform = "scale(0.97)";
  } else if (state === "matched-img") {
    el.style.border = "2.5px solid #43A047";
    el.style.background = "#E8F5E9";
    el.style.cursor = "default";
    el.style.transform = "none";
  } else if (state === "matched-name") {
    el.style.border = "2.5px solid #43A047";
    el.style.background = "#E8F5E9";
    el.style.color = "#2E7D32";
    el.style.cursor = "default";
    el.style.transform = "none";
  } else if (state === "wrong") {
    el.style.border = "2.5px solid #E53935";
    el.style.background = "#FFEBEE";
    el.style.transform = "none";
  } else {
    el.style.border = "2.5px solid #CE93D8";
    el.style.background = "rgba(255,255,255,0.5)";
    el.style.color = "#6A1B9A";
    el.style.cursor = "pointer";
    el.style.transform = "none";
  }
};

window.setWwStatus = function (msg) {
  var el = document.getElementById("ww_status");
  if (el) el.textContent = msg;
};

window.wwTryMatch = function () {
  if (!window.wwGameState.selImg || !window.wwGameState.selName) return;
  var imgId = window.wwGameState.selImg;
  var nameId = window.wwGameState.selName;
  window.wwGameState.selImg = null;
  window.wwGameState.selName = null;

  var iEl = document.getElementById("img-" + imgId);
  var nEl = document.getElementById("name-" + nameId);

  if (imgId === nameId) {
    window.wwGameState.matched[imgId] = true;
    window.setWwStyle(iEl, "matched-img");
    window.setWwStyle(nEl, "matched-name");

    var found = window.wwGameState.items.find(function (x) {
      return x.id === imgId;
    });
    var lbl = document.getElementById("img-lbl-" + imgId);
    if (lbl) lbl.textContent = found ? found.label : imgId;

    var cnt = Object.keys(window.wwGameState.matched).length;
    var matchedEl = document.getElementById("ww_matched");
    if (matchedEl) matchedEl.textContent = cnt;

    if (cnt === window.wwGameState.items.length) {
      window.setWwStatus("🎉 Semua cocok! Hebat sekali!");
      if (typeof successSnd === "function") successSnd();
    } else {
      window.setWwStatus("✅ Benar! Lanjutkan!");
      if (typeof clickSnd === "function") clickSnd(600);
    }
  } else {
    window.wwGameState.wrongFlash = true;
    window.setWwStyle(iEl, "wrong");
    window.setWwStyle(nEl, "wrong");
    window.setWwStatus("❌ Belum tepat, coba lagi!");
    if (typeof errorSnd === "function") errorSnd();
    setTimeout(function () {
      window.setWwStyle(iEl, "reset");
      window.setWwStyle(nEl, "reset");
      window.wwGameState.wrongFlash = false;
      window.setWwStatus("");
    }, 800);
  }
};

window.wwTapImg = function (id) {
  if (window.wwGameState.matched[id] || window.wwGameState.wrongFlash) return;
  var iEl = document.getElementById("img-" + id);
  if (window.wwGameState.selImg === id) {
    window.setWwStyle(iEl, "reset");
    window.wwGameState.selImg = null;
    window.setWwStatus("");
    return;
  }
  if (window.wwGameState.selImg) {
    window.setWwStyle(document.getElementById("img-" + window.wwGameState.selImg), "reset");
  }
  window.wwGameState.selImg = id;
  window.setWwStyle(iEl, "selected");
  window.setWwStatus("Sekarang ketuk nama yang cocok!");
  window.wwTryMatch();
};

window.wwTapName = function (id) {
  if (window.wwGameState.matched[id] || window.wwGameState.wrongFlash) return;
  var nEl = document.getElementById("name-" + id);
  if (window.wwGameState.selName === id) {
    window.setWwStyle(nEl, "reset");
    window.wwGameState.selName = null;
    window.setWwStatus("");
    return;
  }
  if (window.wwGameState.selName) {
    window.setWwStyle(document.getElementById("name-" + window.wwGameState.selName), "reset");
  }
  window.wwGameState.selName = id;
  window.setWwStyle(nEl, "selected");
  window.setWwStatus("Sekarang ketuk gambarnya!");
  window.wwTryMatch();
};

window.pg10wwReset = function () {
  window.wwGameState.matched = {};
  window.wwGameState.selImg = null;
  window.wwGameState.selName = null;
  window.wwGameState.wrongFlash = false;
  var matchedEl = document.getElementById("ww_matched");
  if (matchedEl) matchedEl.textContent = "0";
  window.setWwStatus("");
  window.wwGameState.items.forEach(function (item) {
    var iEl = document.getElementById("img-" + item.id);
    var nEl = document.getElementById("name-" + item.id);
    var lbl = document.getElementById("img-lbl-" + item.id);
    if (iEl) window.setWwStyle(iEl, "reset");
    if (nEl) window.setWwStyle(nEl, "reset");
    if (lbl) lbl.textContent = "???";
  });
  if (typeof clickSnd === "function") clickSnd(350);
};

// ==================== PAGE 9 TEBAK ALAT MUSIK ====================
window.pg10CheckMusic = function (i, answer) {
  var inp = document.getElementById("music_inp_" + i);
  var fb = document.getElementById("music_fb_" + i);
  if (!inp || !fb) return;
  var val = inp.value.trim().toLowerCase();
  fb.style.display = "block";
  if (val === answer.toLowerCase()) {
    fb.style.background = "#E8F5E9";
    fb.style.color = "#2E7D32";
    fb.textContent = "✅ Benar! Jawabannya: " + answer.charAt(0).toUpperCase() + answer.slice(1);
    inp.style.borderColor = "#43A047";
    inp.disabled = true;
    if (typeof successSnd === "function") successSnd();
  } else if (val === "") {
    fb.style.background = "#FFF9C4";
    fb.style.color = "#F57F17";
    fb.textContent = "⚠️ Ketik jawabanmu dulu!";
    if (typeof clickSnd === "function") clickSnd(400);
  } else {
    fb.style.background = "#FFEBEE";
    fb.style.color = "#C62828";
    fb.textContent = "❌ Belum tepat, coba lagi!";
    inp.style.borderColor = "#E53935";
    if (typeof errorSnd === "function") errorSnd();
  }
};

// ==================== PAGE 9 PUZZLE ====================
window.renderPzTiles = function (num) {
  var data = window.pzGameState.data[num];
  var tilesEl = document.getElementById("pz" + num + "_tiles");
  if (!tilesEl) return;
  var shuffled = data.words.slice().sort(function () {
    return Math.random() - 0.5;
  });
  var html = "";
  for (var i = 0; i < shuffled.length; i++) {
    var w = shuffled[i];
    var safeW = w.replace(/'/g, "\\'");
    html +=
      '<div id="pz' +
      num +
      "_tile_" +
      safeW +
      '"' +
      ' onclick="pg10pzTap(' +
      num +
      ",'" +
      safeW +
      "')\"" +
      ' style="padding:7px 12px; border-radius:8px; cursor:pointer;' +
      " background:linear-gradient(135deg,#A5D6A7,#66BB6A);" +
      " color:#1B5E20; font-weight:800; font-size:13px;" +
      " border:2px solid #43A047; box-shadow:0 2px 5px rgba(0,0,0,0.1);" +
      ' transition:all 0.15s; user-select:none;">' +
      w +
      "</div>";
  }
  tilesEl.innerHTML = html;
};

window.pg10pzTap = function (num, word) {
  var sel = window.pzGameState.selected[num];
  if (sel.indexOf(word) !== -1) return;
  sel.push(word);
  if (typeof clickSnd === "function") clickSnd(520 + sel.length * 30);
  var tile = document.getElementById("pz" + num + "_tile_" + word);
  if (tile) {
    tile.style.opacity = "0.35";
    tile.style.pointerEvents = "none";
  }
  var ansEl = document.getElementById("pz" + num + "_answer");
  if (ansEl) {
    ansEl.innerHTML = sel
      .map(function (w) {
        return '<span style="background:#C8E6C9; padding:4px 9px; border-radius:6px;' + ' font-size:13px; font-weight:800; color:#1B5E20; border:1px solid #81C784;">' + w + "</span>";
      })
      .join("");
  }
};

window.pg10pzCheck = function (num) {
  var fb = document.getElementById("pz" + num + "_fb");
  if (!fb) return;
  var sel = window.pzGameState.selected[num];
  var correct = window.pzGameState.data[num].answer;
  var attempt = sel.join(" ");
  fb.style.display = "block";
  if (attempt === correct) {
    fb.style.background = "#E8F5E9";
    fb.style.color = "#2E7D32";
    fb.textContent = "✅ Benar! Susunan yang tepat: " + correct;
    if (typeof successSnd === "function") successSnd();
  } else if (sel.length < window.pzGameState.data[num].words.length) {
    fb.style.background = "#FFF9C4";
    fb.style.color = "#F57F17";
    fb.textContent = "⚠️ Susun semua kata dulu ya!";
    if (typeof clickSnd === "function") clickSnd(400);
  } else {
    fb.style.background = "#FFEBEE";
    fb.style.color = "#C62828";
    fb.textContent = "❌ Belum tepat. Yang benar: " + correct;
    if (typeof errorSnd === "function") errorSnd();
  }
};

window.pg10pzReset = function (num) {
  window.pzGameState.selected[num] = [];
  window.renderPzTiles(num);
  var ansEl = document.getElementById("pz" + num + "_answer");
  if (ansEl) ansEl.innerHTML = "";
  var fb = document.getElementById("pz" + num + "_fb");
  if (fb) fb.style.display = "none";
  if (typeof clickSnd === "function") clickSnd(350);
};

// ==================== PAGE 9 FUNCTION ====================
function page9() {
  // ---- DATA SOAL PILIHAN GANDA ----
  var pg10Quiz = [
    {
      q: "Kesenian tradisional dari Semanding adalah ....",
      opts: ["Reog", "Tayub", "Kecak"],
      ans: 1,
    },
    {
      q: "Mayoritas pekerjaan masyarakat Semanding adalah ....",
      opts: ["Nelayan", "Pilot", "Petani"],
      ans: 2,
    },
  ];

  // ---- DATA WORDWALL: Cocokkan gambar dengan nama ----
  var wwItems = [
    {
      id: "tayub",
      label: "Seni Tayub",
      img: "https://1.bp.blogspot.com/-MlqSM6If5QE/YTLTyhTOXrI/AAAAAAAAELA/IU8hJeKaG6841KWCHvmZIfhyy65ewo3hQCLcBGAsYHQ/s377/Tayub2.jpg",
      fallback: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f3ad.png",
    },
    {
      id: "sandur",
      label: "Seni Sandur",
      img: "https://1.bp.blogspot.com/-Sf_WoFEbKwU/U7zzQOMHvzI/AAAAAAAAABI/V-eVH4qNwgs/w1200-h630-p-k-no-nu/_tayub-.jpg",
      fallback: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1fa98.png",
    },
    {
      id: "gerabah",
      label: "Gerabah",
      img: "https://tse2.mm.bing.net/th/id/OIP.tvqhFjkEipdUcfrwEQNaLwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
      fallback: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1fba4.png",
    },
    {
      id: "siraman",
      label: "Siraman Waranggono",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1_eyhoNKGhWWO0N-xstN_asg7v-SHPFujWL7IchJo344RFVfW1HKEWdZWOp70dkLjGuVfyyHiTh1B5u4qksSZO6OKXelTPsvno3SQLdmuOAJ9IjKCyYwpaib7Tpq3gNMHo1Q3F9HJhJAi/s1600/siraman-wabup.jpg",
      fallback: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f470.png",
    },
    {
      id: "tongklek",
      label: "Tongklek",
      img: "https://cdn2.gnfi.net/gnfi/uploads/articles/large-festival-tongklek-di-tuban-semarakkan-ramadan-2025-ini-fakta-uniknya-2bYEdbMPTg.jpeg",
      fallback: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f33e.png",
    },
  ];

  // ---- DATA TEBAK ALAT MUSIK ----
  var musicQuiz = [
    {
      clue: "Alat musik pukul dari kayu yang ditabuh saat panen padi?",
      answer: "lesung",
      hint: "L _ _ _ _ _",
    },
    {
      clue: "Alat musik pengiring Tayub yang berbunyi 'gong'?",
      answer: "gamelan",
      hint: "G _ _ _ _ _ _",
    },
  ];

  // ---- BUILD PILIHAN GANDA HTML ----
  var mcHTML = pg10Quiz
    .map(function (q, qi) {
      var optsHTML = q.opts
        .map(function (opt, oi) {
          return (
            '<div id="pg10_opt_' +
            qi +
            "_" +
            oi +
            '" onclick="window.pg10Answer(' +
            qi +
            "," +
            oi +
            ')" style="' +
            "padding: 9px 14px; margin-bottom: 6px; border-radius: 10px;" +
            "border: 2px solid #90CAF9; background: rgba(255,255,255,0.55);" +
            "font-size: 13px; cursor: pointer; font-weight: 600; color: #1A237E;" +
            'transition: all 0.2s; user-select: none;">' +
            String.fromCharCode(97 + oi) +
            ". " +
            opt +
            "</div>"
          );
        })
        .join("");
      return (
        '<div style="margin-bottom: 14px; padding: 13px; background: rgba(255,255,255,0.3); border-radius: 14px; backdrop-filter: blur(6px);">' +
        '<div style="font-size: 10px; font-weight: 800; color: #1565C0; background: #E3F2FD; border: 1px solid #90CAF9; padding: 2px 10px; border-radius: 20px; display: inline-block; margin-bottom: 7px;">Soal ' +
        (qi + 1) +
        "</div>" +
        '<div style="font-size: 13px; font-weight: 800; color: #0D47A1; margin-bottom: 8px; line-height: 1.5;">' +
        q.q +
        "</div>" +
        optsHTML +
        '<div id="pg10_fb_' +
        qi +
        '" style="display:none; margin-top:6px; padding:7px 10px; border-radius:8px; font-size:12px; font-weight:bold;"></div>' +
        "</div>"
      );
    })
    .join("");

  // ---- BUILD WORDWALL: gambar ----
  var wwImgsHTML = wwItems
    .map(function (item) {
      return (
        '<div class="ww-img-card" id="img-' +
        item.id +
        '" onclick="window.wwTapImg(' +
        "'" +
        item.id +
        "'" +
        ')" style="background:rgba(255,255,255,0.5);border:2.5px solid #CE93D8;border-radius:12px;cursor:pointer;overflow:hidden;display:flex;flex-direction:column;align-items:center;user-select:none;-webkit-tap-highlight-color:transparent;transition:border-color .15s,transform .1s;">' +
        '<img src="' +
        item.img +
        '" onerror="this.src=' +
        "'" +
        item.fallback +
        "'" +
        '" style="width:100%;height:75px;object-fit:cover;pointer-events:none;"/>' +
        '<div id="img-lbl-' +
        item.id +
        '" style="font-size:10px;color:#888;padding:3px 6px;font-weight:600;text-align:center;">???</div>' +
        "</div>"
      );
    })
    .join("");

  // ---- BUILD WORDWALL: nama (acak urutan) ----
  var wwNamesShuffled = wwItems.slice().sort(function () {
    return Math.random() - 0.5;
  });
  var wwNamesHTML = wwNamesShuffled
    .map(function (item) {
      return (
        '<div class="ww-name-card" id="name-' +
        item.id +
        '" onclick="window.wwTapName(' +
        "'" +
        item.id +
        "'" +
        ')" style="background:rgba(255,255,255,0.5);border:2.5px solid #CE93D8;border-radius:10px;cursor:pointer;padding:10px 8px;text-align:center;font-size:12px;font-weight:800;color:#6A1B9A;user-select:none;-webkit-tap-highlight-color:transparent;min-height:44px;display:flex;align-items:center;justify-content:center;transition:border-color .15s,transform .1s;">' +
        item.label +
        "</div>"
      );
    })
    .join("");

  // ---- BUILD TEBAK ALAT MUSIK HTML ----
  var musicHTML = musicQuiz
    .map(function (q, i) {
      return (
        '<div style="margin-bottom: 12px; padding: 12px; background: rgba(255,255,255,0.35); border-radius: 13px; backdrop-filter: blur(6px);">' +
        '<div style="font-size: 12px; font-weight: 800; color: #E65100; margin-bottom: 5px;">🎵 Tebak ' +
        (i + 1) +
        "</div>" +
        '<div style="font-size: 12px; color: #4E342E; margin-bottom: 6px; line-height: 1.5;">' +
        q.clue +
        "</div>" +
        '<div style="font-size: 11px; color: #795548; margin-bottom: 6px; font-style: italic;">Petunjuk: ' +
        q.hint +
        "</div>" +
        '<div style="display: flex; gap: 6px;">' +
        '<input id="music_inp_' +
        i +
        '" type="text" placeholder="Ketik jawaban..." style="' +
        "flex: 1; padding: 7px 10px; border: 2px solid #FFCC80; border-radius: 8px;" +
        "font-size: 12px; outline: none; background: rgba(255,255,255,0.7);" +
        'font-family: inherit; color: #4E342E; font-weight: 600;"/>' +
        '<button onclick="window.pg10CheckMusic(' +
        i +
        "," +
        "'" +
        q.answer +
        "'" +
        ')" style="' +
        "background: #FF9800; border: none; padding: 7px 12px; border-radius: 8px;" +
        'color: white; font-weight: bold; font-size: 12px; cursor: pointer;">Cek</button>' +
        "</div>" +
        '<div id="music_fb_' +
        i +
        '" style="display:none; margin-top:5px; padding:6px 10px; border-radius:8px; font-size:12px; font-weight:bold;"></div>' +
        "</div>"
      );
    })
    .join("");

  return `
<div class="inner-page" style="background:linear-gradient(160deg,#E3F2FD 0%,#BBDEFB 45%,#90CAF9 100%); min-height:100vh; display:flex; flex-direction:column; justify-content:space-between; position:relative;">

  <div class="inner-topbar" style="background:linear-gradient(135deg,#1565C0,#0D47A1); display:flex; justify-content:space-between; align-items:center; padding:12px 15px; box-shadow:0 2px 10px rgba(0,0,0,0.15);">
    <button onclick="changePage(-1)" style="background:#1976D2; color:white; border:none; padding:10px 16px; border-radius:20px; font-weight:bold; font-size:14px; cursor:pointer;">◀ Kembali</button>
    <div style="color:white; font-family:'Fredoka One',cursive; font-size:15px; text-align:center; flex:1; margin:0 10px;">🎮 Latihan &amp; Permainan</div>
    <button onclick="changePage(1)" style="background:#1976D2; color:white; border:none; padding:10px 16px; border-radius:20px; font-weight:bold; font-size:14px; cursor:pointer;">Lanjut ▶</button>
  </div>

  <!-- ===== COVER IMAGE (klik untuk mulai) ===== -->
  <div id="pg9_cover" onclick="window.pg9Reveal()" style="
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 10;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(160deg,#E3F2FD 0%,#BBDEFB 45%,#90CAF9 100%);
    padding-top: 60px;
  ">
    <!-- Gambar cover -->
    <div style="
      width: 88%;
      max-width: 420px;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(13,71,161,0.22), 0 2px 8px rgba(0,0,0,0.10);
      border: 4px solid rgba(255,255,255,0.7);
      position: relative;
    ">
      <img
        src="img/cover-9.jpg"
        alt="Cover Halaman 9"
        style="width:100%; display:block; object-fit:cover;"
        onerror="this.style.display='none'; document.getElementById('pg9_cover_fallback').style.display='flex';"
      />
      <!-- Fallback jika gambar tidak ditemukan -->
      <div id="pg9_cover_fallback" style="
        display: none;
        width: 100%; height: 200px;
        background: linear-gradient(135deg,#1565C0,#0D47A1);
        align-items: center; justify-content: center;
        font-size: 60px;
      ">🎮</div>
    </div>

    <!-- Teks ajakan klik -->
    <div style="margin-top: 22px; text-align: center;">
      <div style="
        font-family: 'Fredoka One', cursive;
        font-size: 18px;
        color: #0D47A1;
        margin-bottom: 6px;
      ">Latihan &amp; Permainan</div>
      <div style="
        font-size: 13px;
        color: #1565C0;
        font-weight: 700;
        margin-bottom: 18px;
      ">Uji pemahamanmu tentang budaya Semanding!</div>

      <!-- Tombol / hint klik -->
      <div style="
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: linear-gradient(135deg,#1565C0,#0D47A1);
        color: white;
        font-family: 'Fredoka One', cursive;
        font-size: 15px;
        padding: 12px 28px;
        border-radius: 30px;
        box-shadow: 0 4px 16px rgba(13,71,161,0.35);
        animation: pg9_pulse 1.6s ease-in-out infinite;
      ">
        <span style="font-size:18px;">👆</span> Ketuk untuk Mulai!
      </div>
    </div>
  </div>

  <!-- ===== KONTEN KUIS (tersembunyi sampai cover diklik) ===== -->
  <div id="pg9_content" style="display:none; opacity:0;">
    <div class="inner-body" style="padding:15px; max-width:500px; margin:0 auto; width:100%; box-sizing:border-box;">

      <!-- ===== SECTION 1: PILIHAN GANDA ===== -->
      <div style="background:rgba(255,255,255,0.25); border:3px dashed rgba(21,101,192,0.5); border-radius:16px; padding:14px; margin-bottom:18px; text-align:center;">
        <div style="font-size:28px; margin-bottom:4px;">✏️</div>
        <div style="font-family:'Fredoka One',cursive; font-size:17px; color:#0D47A1;">A. Pilihan Ganda</div>
        <div style="font-size:12px; color:#1A237E; margin-top:3px; font-weight:600;">Pilih jawaban yang paling tepat!</div>
      </div>

      ${mcHTML}

      <!-- ===== SECTION 2: WORDWALL ===== -->
      <div style="background:rgba(255,255,255,0.25); border:3px dashed rgba(106,27,154,0.4); border-radius:16px; padding:14px; margin-bottom:14px; text-align:center;">
        <div style="font-size:28px; margin-bottom:4px;">🃏</div>
        <div style="font-family:'Fredoka One',cursive; font-size:17px; color:#6A1B9A;">B. Game Wordwall</div>
        <div style="font-size:12px; color:#4A148C; margin-top:3px; font-weight:600;">Cocokkan gambar dengan nama budayanya!</div>
      </div>

      <!-- Cocokkan gambar dengan nama -->
      <div style="border-left:6px solid #AB47BC; background:rgba(255,255,255,0.3); backdrop-filter:blur(8px); border-radius:16px; padding:14px; margin-bottom:14px; box-shadow:0 4px 16px rgba(0,0,0,.05);">
        <div style="font-family:'Fredoka One',cursive; font-size:14px; color:#6A1B9A; margin-bottom:4px;">🎭 Cocokkan Gambar &amp; Nama Budaya</div>
        <div style="font-size:12px; color:#4A148C; margin-bottom:10px; font-weight:600;">Ketuk gambar, lalu ketuk nama yang cocok! 👆</div>

        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin-bottom:10px;" id="ww-imgs">
          ${wwImgsHTML}
        </div>

        <div style="font-size:11px; font-weight:800; color:#6A1B9A; margin-bottom:6px;">Nama Budaya:</div>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:6px; margin-bottom:10px;" id="ww-names">
          ${wwNamesHTML}
        </div>

        <div id="ww_status" style="font-size:12px; font-weight:700; text-align:center; min-height:18px; color:#6A1B9A; margin-bottom:8px;"></div>
        <div style="display:flex; gap:8px; align-items:center;">
          <div style="flex:1; background:rgba(255,255,255,0.5); border-radius:10px; padding:8px; text-align:center; font-size:12px; font-weight:800; color:#6A1B9A;">
            Cocok: <span id="ww_matched">0</span> / 5
          </div>
          <button onclick="window.pg10wwReset()" style="background:#9E9E9E; color:white; border:none; padding:8px 14px; border-radius:10px; font-weight:bold; font-size:13px; cursor:pointer;">🔄 Reset</button>
        </div>
      </div>

      <!-- Tebak alat musik -->
      <div style="border-left:6px solid #FF9800; background:rgba(255,255,255,0.3); backdrop-filter:blur(8px); border-radius:16px; padding:14px; margin-bottom:18px; box-shadow:0 4px 16px rgba(0,0,0,.05);">
        <div style="font-family:'Fredoka One',cursive; font-size:14px; color:#E65100; margin-bottom:10px;">🎵 Tebak Alat Musik Tradisional</div>
        ${musicHTML}
      </div>

      <!-- ===== SECTION 3: PUZZLE BUDAYA ===== -->
      <div style="background:rgba(255,255,255,0.25); border:3px dashed rgba(46,125,50,0.4); border-radius:16px; padding:14px; margin-bottom:14px; text-align:center;">
        <div style="font-size:28px; margin-bottom:4px;">🧩</div>
        <div style="font-family:'Fredoka One',cursive; font-size:17px; color:#1B5E20;">C. Puzzle Budaya Daerah</div>
        <div style="font-size:12px; color:#2E4A3F; margin-top:3px; font-weight:600;">Susun potongan kata menjadi nama budaya yang benar!</div>
      </div>

      <div style="border-left:6px solid #43A047; background:rgba(255,255,255,0.3); backdrop-filter:blur(8px); border-radius:16px; padding:14px; margin-bottom:18px; box-shadow:0 4px 16px rgba(0,0,0,.05);">

        <!-- Puzzle 1 -->
        <div style="margin-bottom:16px;">
          <div style="font-size:12px; font-weight:800; color:#1B5E20; margin-bottom:8px;">🧩 Puzzle 1 — Susun kata-kata ini!</div>
          <div id="pz1_tiles" style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:8px;"></div>
          <div style="font-size:11px; color:#388E3C; margin-bottom:5px; font-weight:600;">✏️ Jawaban kamu:</div>
          <div id="pz1_answer" style="min-height:36px; padding:8px 10px; background:rgba(255,255,255,0.6); border:2px dashed #66BB6A; border-radius:8px; font-size:13px; font-weight:700; color:#1B5E20; display:flex; flex-wrap:wrap; gap:5px; align-items:center;"></div>
          <div style="display:flex; gap:6px; margin-top:8px;">
            <button onclick="window.pg10pzCheck(1)" style="flex:1; background:linear-gradient(135deg,#2E7D32,#1B5E20); color:white; border:none; padding:9px; border-radius:10px; font-weight:bold; font-size:12px; cursor:pointer;">✅ Cek Jawaban</button>
            <button onclick="window.pg10pzReset(1)" style="background:#9E9E9E; color:white; border:none; padding:9px 12px; border-radius:10px; font-weight:bold; font-size:12px; cursor:pointer;">🔄</button>
          </div>
          <div id="pz1_fb" style="display:none; margin-top:6px; padding:7px 10px; border-radius:8px; font-size:12px; font-weight:bold;"></div>
        </div>

        <div style="height:1px; background:rgba(0,0,0,0.08); margin-bottom:16px;"></div>

        <!-- Puzzle 2 -->
        <div>
          <div style="font-size:12px; font-weight:800; color:#1B5E20; margin-bottom:8px;">🧩 Puzzle 2 — Susun kata-kata ini!</div>
          <div id="pz2_tiles" style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:8px;"></div>
          <div style="font-size:11px; color:#388E3C; margin-bottom:5px; font-weight:600;">✏️ Jawaban kamu:</div>
          <div id="pz2_answer" style="min-height:36px; padding:8px 10px; background:rgba(255,255,255,0.6); border:2px dashed #66BB6A; border-radius:8px; font-size:13px; font-weight:700; color:#1B5E20; display:flex; flex-wrap:wrap; gap:5px; align-items:center;"></div>
          <div style="display:flex; gap:6px; margin-top:8px;">
            <button onclick="window.pg10pzCheck(2)" style="flex:1; background:linear-gradient(135deg,#2E7D32,#1B5E20); color:white; border:none; padding:9px; border-radius:10px; font-weight:bold; font-size:12px; cursor:pointer;">✅ Cek Jawaban</button>
            <button onclick="window.pg10pzReset(2)" style="background:#9E9E9E; color:white; border:none; padding:9px 12px; border-radius:10px; font-weight:bold; font-size:12px; cursor:pointer;">🔄</button>
          </div>
          <div id="pz2_fb" style="display:none; margin-top:6px; padding:7px 10px; border-radius:8px; font-size:12px; font-weight:bold;"></div>
        </div>

      </div>

    </div>
  </div>

  <div class="pg-footer" style="background:rgba(255,255,255,0.25); backdrop-filter:blur(4px); color:#1565C0; font-weight:700; text-align:center; padding:10px; font-size:12px;">
    📖 Halaman 9 dari 10
  </div>
</div>

<style>
@keyframes pg9_pulse {
  0%, 100% { transform: scale(1); box-shadow: 0 4px 16px rgba(13,71,161,0.35); }
  50%       { transform: scale(1.05); box-shadow: 0 6px 24px rgba(13,71,161,0.50); }
}
</style>`;
}

// Initialize Page 9 functions when page loads
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Page 9 functions ready");
  });
} else {
  console.log("Page 9 functions ready");
}
