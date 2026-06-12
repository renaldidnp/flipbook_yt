// ============================================================
// KONFIGURASI
// ============================================================
const TOTAL = 11; // Sesuaikan jumlah halaman
let current = 0;
let isAnimating = false;

// ============================================================
// ROUTER HALAMAN
// ============================================================
function pg(num) {
  switch (num) {
    case 1:
      return page1();
    case 2:
      return page2();
    case 3:
      return page3();
    case 4:
      return page4();
    case 5:
      return page5();
    case 6:
      return page6();
    case 7:
      return page7();
    case 8:
      return page8();
    case 9:
      return page9();
    case 10:
      return page10();
    case 11:
      return page10();
    default:
      return `<div style="padding:20px;font-size:14px;color:#333">Halaman ${num}</div>`;
  }
}

// ============================================================
// AUDIO
// ============================================================
let audioCtx = null,
  musicOn = false,
  musicInterval = null,
  musicNodes = [];

function initAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}

function playTone(f, dur, type = "sine", vol = 0.07, delay = 0) {
  if (!audioCtx || !musicOn) return;
  const o = audioCtx.createOscillator(),
    g = audioCtx.createGain();
  const fl = audioCtx.createBiquadFilter();
  fl.type = "lowpass";
  fl.frequency.value = 1200;
  o.connect(fl);
  fl.connect(g);
  g.connect(audioCtx.destination);
  o.type = type;
  o.frequency.value = f;
  g.gain.setValueAtTime(0, audioCtx.currentTime + delay);
  g.gain.linearRampToValueAtTime(vol, audioCtx.currentTime + delay + 0.06);
  g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + delay + dur);
  o.start(audioCtx.currentTime + delay);
  o.stop(audioCtx.currentTime + delay + dur + 0.1);
  musicNodes.push(o);
}

const GN = [261.6, 293.7, 329.6, 392.0, 440.0, 523.2];

const melody = [0, 1, 2, 3, 2, 1, 0, 2, 3, 4, 3, 2, 1, 0];
let melodyIndex = 0;

function playChord() {
  if (!musicOn) return;
  const note = GN[melody[melodyIndex % melody.length]];
  playTone(note, 0.9, "sine", 0.05);
  melodyIndex++;
}

musicInterval = setInterval(() => {
  if (musicOn) playChord();
}, 900);

function startMusic() {
  initAudio();
  if (audioCtx.state === "suspended") audioCtx.resume();
  musicOn = true;
  playChord();
  musicInterval = setInterval(() => {
    if (musicOn) playChord();
  }, 2600);
}

function stopMusic() {
  musicOn = false;
  if (musicInterval) clearInterval(musicInterval);
  musicNodes.forEach((n) => {
    try {
      n.stop();
    } catch (e) {}
  });
  musicNodes = [];
}

function toggleMusic() {
  initAudio();
  if (musicOn) {
    stopMusic();
    document.getElementById("soundBtn").innerHTML =
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`;
  } else {
    startMusic();
    document.getElementById("soundBtn").innerHTML =
      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`;
  }
}

function clickSnd(f = 600) {
  initAudio();
  if (audioCtx.state === "suspended") audioCtx.resume();
  const o = audioCtx.createOscillator(),
    g = audioCtx.createGain();
  o.connect(g);
  g.connect(audioCtx.destination);
  o.type = "sine";
  o.frequency.setValueAtTime(f, audioCtx.currentTime);
  o.frequency.exponentialRampToValueAtTime(f * 0.65, audioCtx.currentTime + 0.14);
  g.gain.setValueAtTime(0.09, audioCtx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
  o.start();
  o.stop(audioCtx.currentTime + 0.22);
}

function flipSnd() {
  initAudio();
  if (audioCtx.state === "suspended") audioCtx.resume();
  const o = audioCtx.createOscillator(),
    g = audioCtx.createGain();
  o.connect(g);
  g.connect(audioCtx.destination);
  o.type = "triangle";
  o.frequency.setValueAtTime(900, audioCtx.currentTime);
  o.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.35);
  g.gain.setValueAtTime(0.06, audioCtx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
  o.start();
  o.stop(audioCtx.currentTime + 0.45);
}

function successSnd() {
  initAudio();
  if (audioCtx.state === "suspended") audioCtx.resume();
  [523, 659, 784, 1047].forEach((f, i) => {
    const o = audioCtx.createOscillator(),
      g = audioCtx.createGain();
    o.connect(g);
    g.connect(audioCtx.destination);
    o.type = "sine";
    o.frequency.value = f;
    g.gain.setValueAtTime(0.09, audioCtx.currentTime + i * 0.1);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.1 + 0.28);
    o.start(audioCtx.currentTime + i * 0.1);
    o.stop(audioCtx.currentTime + i * 0.1 + 0.3);
  });
}

function errorSnd() {
  initAudio();
  if (audioCtx.state === "suspended") audioCtx.resume();
  [300, 240].forEach((f, i) => {
    const o = audioCtx.createOscillator(),
      g = audioCtx.createGain();
    o.connect(g);
    g.connect(audioCtx.destination);
    o.type = "sawtooth";
    o.frequency.value = f;
    g.gain.setValueAtTime(0.07, audioCtx.currentTime + i * 0.16);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.16 + 0.22);
    o.start(audioCtx.currentTime + i * 0.16);
    o.stop(audioCtx.currentTime + i * 0.16 + 0.25);
  });
}

// ============================================================
// DATA QUIZ & EVALUASI
// ============================================================
const quizData = [
  { q: "Seni tradisional khas Semanding adalah …", opts: ["Reog", "Tayub", "Jaipong", "Kecak"], ans: 1 },
  { q: "Mata pencaharian utama masyarakat Semanding adalah …", opts: ["Nelayan", "Pilot", "Petani", "Dokter"], ans: 2 },
  { q: "Sandur merupakan kesenian yang berasal dari kehidupan …", opts: ["Pedagang", "Petani", "Nelayan", "Polisi"], ans: 1 },
];
let quizAns = new Array(quizData.length).fill(null);

const evalData = [
  { q: "1. Siapa seniman patung terkenal dari Desa Bejagung?", opts: ["Mbah Somi", "Abah Janjang", "Pak Sandur", "Bu Waranggono"], ans: 1 },
  { q: "2. Apa nama riasan pengantin khas daerah Semanding?", opts: ["Paes Jogja", "Paes Sunda", "Paes Semandingan", "Paes Bali"], ans: 2 },
  { q: "3. Kesenian yang menggabungkan cerita, lawakan, musik dan tari disebut...", opts: ["Tayub", "Kentrung", "Sandur", "Tabuh Lesung"], ans: 2 },
  { q: "4. Siraman Waranggono adalah prosesi penyucian penari sebelum...", opts: ["Belajar menari", "Tampil di depan umum", "Menikah", "Beribadah"], ans: 1 },
  { q: "5. Lesung adalah alat tradisional yang digunakan untuk...", opts: ["Memasak nasi", "Menumbuk padi", "Mengambil air", "Membuat gerabah"], ans: 1 },
];
let evalAns = new Array(evalData.length).fill(null);

const gameAns = { g1: "Ritual Keleman", g2: "Siraman Waranggono", g3: "Seni Tayub", g4: "Gerabah", g5: "Paes Semandingan" };

// ============================================================
// QUIZ LOGIC
// ============================================================
function answerQuiz(qi, oi) {
  if (quizAns[qi] !== null) return;
  quizAns[qi] = oi;
  const c = quizData[qi].ans;
  for (let i = 0; i < quizData[qi].opts.length; i++) {
    const el = document.getElementById("qo_" + qi + "_" + i);
    if (!el) continue;
    el.style.pointerEvents = "none";
    if (i === c) {
      el.style.background = "#E8F5E9";
      el.style.borderColor = "#43A047";
    } else if (i === oi) {
      el.style.background = "#FFEBEE";
      el.style.borderColor = "#E53935";
    } else {
      el.style.opacity = "0.5";
    }
  }
  const fb = document.getElementById("qf_" + qi);
  if (!fb) return;
  fb.style.display = "block";
  if (oi === c) {
    fb.style.background = "#E8F5E9";
    fb.style.color = "#2E7D32";
    fb.textContent = "✅ Jawaban Benar! Hebat!";
    successSnd();
  } else {
    fb.style.background = "#FFEBEE";
    fb.style.color = "#C62828";
    fb.textContent = "❌ Benar: " + String.fromCharCode(65 + c) + ". " + quizData[qi].opts[c];
    errorSnd();
  }
}

function selectEval(qi, oi) {
  clickSnd(550);
  for (let i = 0; i < evalData[qi].opts.length; i++) {
    const el = document.getElementById("eo_" + qi + "_" + i);
    if (el) el.classList.remove("selected");
  }
  const el = document.getElementById("eo_" + qi + "_" + oi);
  if (el) el.classList.add("selected");
  evalAns[qi] = oi;
}

function submitEval() {
  clickSnd(700);
  const score = evalAns.filter((a, i) => a === evalData[i].ans).length;
  const pct = Math.round((score / evalData.length) * 100);
  evalData.forEach((q, qi) => {
    for (let oi = 0; oi < q.opts.length; oi++) {
      const el = document.getElementById("eo_" + qi + "_" + oi);
      if (!el) continue;
      el.style.pointerEvents = "none";
      if (oi === q.ans) {
        el.style.borderColor = "#43A047";
        el.style.background = "#E8F5E9";
      } else if (evalAns[qi] === oi) {
        el.style.borderColor = "#E53935";
        el.style.background = "#FFEBEE";
      }
    }
  });
  const eb = document.getElementById("evalBtn");
  if (eb) eb.style.display = "none";
  const msg = pct >= 80 ? "🌟 Luar biasa! Sangat Hebat!" : pct >= 60 ? "👍 Bagus! Terus semangat!" : "💪 Jangan menyerah! Pelajari lagi ya!";
  showPop(pct >= 80 ? "🎉" : pct >= 60 ? "😊" : "💪", "Nilai Evaluasi", pct, msg + ` (${score}/${evalData.length} benar)`);
  if (pct >= 80) successSnd();
  else if (pct >= 60) clickSnd(600);
  else errorSnd();
}

function checkGame() {
  clickSnd(660);
  let correct = 0;
  for (const [id, ans] of Object.entries(gameAns)) {
    const el = document.getElementById(id);
    if (el && el.value === ans) correct++;
  }
  const pct = correct * 20;
  const msg = correct === 5 ? "🎉 Sempurna!" : correct >= 3 ? "👍 Hampir sempurna!" : "💪 Coba lagi ya!";
  showPop(correct >= 4 ? "🎊" : correct >= 2 ? "😊" : "💪", "Skor Permainan", pct, `${msg} (${correct}/5 jawaban benar)`);
  if (correct >= 4) successSnd();
  else if (correct >= 2) clickSnd(600);
  else errorSnd();
}

function showPop(icon, title, score, msg) {
  document.getElementById("rIcon").textContent = icon;
  document.getElementById("rTitle").textContent = title;
  document.getElementById("rScore").textContent = score;
  document.getElementById("rMsg").textContent = msg;
  document.getElementById("resultPop").classList.add("show");
}

function closePop() {
  document.getElementById("resultPop").classList.remove("show");
}

// ============================================================
// NAVIGASI
// ============================================================
function renderPage(n) {
  document.getElementById("pageInner").innerHTML = pg(n + 1);
  document.getElementById("btnPrev").disabled = n === 0;
  document.getElementById("btnNext").disabled = n === TOTAL - 1;
  document.getElementById("pageSlider").value = n;
  document.getElementById("sliderLabel").textContent = n + 1 + " / " + TOTAL;
}

function changePage(dir) {
  initAudio();
  const next = current + dir;
  if (next < 0 || next >= TOTAL || isAnimating) return;
  isAnimating = true;
  flipSnd();
  const page = document.getElementById("mainPage");
  page.classList.add(dir > 0 ? "flip-left" : "flip-right");
  setTimeout(() => {
    page.classList.remove("flip-left", "flip-right");
    current = next;
    renderPage(current);
    isAnimating = false;
  }, 450);
}

function goToPage(n) {
  initAudio();
  clickSnd(700);
  if (n - 1 === current || isAnimating) return;
  const dir = n - 1 > current ? 1 : -1;
  isAnimating = true;
  flipSnd();
  const page = document.getElementById("mainPage");
  page.classList.add(dir > 0 ? "flip-left" : "flip-right");
  setTimeout(() => {
    page.classList.remove("flip-left", "flip-right");
    current = n - 1;
    renderPage(current);
    isAnimating = false;
  }, 450);
}

function sliderChange(val) {
  if (parseInt(val) === current || isAnimating) return;
  const dir = parseInt(val) > current ? 1 : -1;
  isAnimating = true;
  flipSnd();
  const page = document.getElementById("mainPage");
  page.classList.add(dir > 0 ? "flip-left" : "flip-right");
  setTimeout(() => {
    page.classList.remove("flip-left", "flip-right");
    current = parseInt(val);
    renderPage(current);
    isAnimating = false;
  }, 450);
}

function toggleFull() {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen();
  else document.exitFullscreen();
}

let zoomed = false;
function toggleZoom() {
  zoomed = !zoomed;
  const bs = document.getElementById("bookScene");
  bs.style.transform = zoomed ? "scale(1.25)" : "scale(1)";
  bs.style.transition = "transform .3s";
}

// ============================================================
// TOUCH SWIPE
// ============================================================
let touchStartX = 0,
  touchStartY = 0,
  touchCurrentX = 0;
let isDragging = false,
  dragOffset = 0;
const mainPage = document.getElementById("mainPage");

mainPage.addEventListener(
  "touchstart",
  (e) => {
    if (isAnimating) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchCurrentX = touchStartX;
    isDragging = false;
    dragOffset = 0;
  },
  { passive: true },
);

mainPage.addEventListener(
  "touchmove",
  (e) => {
    if (isAnimating) return;
    const dx = e.touches[0].clientX - touchStartX;
    const dy = e.touches[0].clientY - touchStartY;
    if (!isDragging && Math.abs(dy) > Math.abs(dx)) return;
    isDragging = true;
    touchCurrentX = e.touches[0].clientX;
    dragOffset = touchCurrentX - touchStartX;
    const maxDrag = 80;
    const clampedOffset = Math.max(-maxDrag, Math.min(maxDrag, dragOffset));
    const rotate = clampedOffset * 0.03;
    const scale = 1 - Math.abs(clampedOffset) * 0.0008;
    mainPage.style.transition = "none";
    mainPage.style.transform = `translateX(${clampedOffset * 0.4}px) rotate(${rotate}deg) scale(${scale})`;
    e.preventDefault();
  },
  { passive: false },
);

mainPage.addEventListener("touchend", () => {
  if (!isDragging || isAnimating) {
    mainPage.style.transition = "transform 0.3s ease";
    mainPage.style.transform = "";
    isDragging = false;
    return;
  }
  isDragging = false;
  const threshold = 50;
  if (dragOffset < -threshold && current < TOTAL - 1) doSwipeFlip(1);
  else if (dragOffset > threshold && current > 0) doSwipeFlip(-1);
  else {
    mainPage.style.transition = "transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    mainPage.style.transform = "";
    setTimeout(() => {
      mainPage.style.transition = "";
    }, 350);
  }
});

function doSwipeFlip(dir) {
  isAnimating = true;
  flipSnd();
  const exitX = dir < 0 ? "60px" : "-60px";
  const exitRot = dir < 0 ? "4deg" : "-4deg";
  mainPage.style.transition = "transform 0.2s cubic-bezier(0.4, 0, 1, 1), opacity 0.2s ease";
  mainPage.style.transform = `translateX(${exitX}) rotate(${exitRot}) scale(0.94)`;
  mainPage.style.opacity = "0";
  setTimeout(() => {
    current += dir;
    renderPage(current);
    const enterX = dir < 0 ? "-60px" : "60px";
    const enterRot = dir < 0 ? "-4deg" : "4deg";
    mainPage.style.transition = "none";
    mainPage.style.transform = `translateX(${enterX}) rotate(${enterRot}) scale(0.94)`;
    mainPage.style.opacity = "0";
    mainPage.offsetHeight;
    mainPage.style.transition = "transform 0.3s cubic-bezier(0, 0, 0.2, 1), opacity 0.25s ease";
    mainPage.style.transform = "";
    mainPage.style.opacity = "1";
    setTimeout(() => {
      mainPage.style.transition = "";
      mainPage.style.transform = "";
      mainPage.style.opacity = "";
      isAnimating = false;
    }, 320);
  }, 200);
}

// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  renderPage(0);
  startMusic();
});
