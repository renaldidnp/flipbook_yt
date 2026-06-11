// ============================================================
// PAGE 3 - PETUNJUK PENGGUNAAN
// ============================================================
function page3() {
  const tips = [
    ["➡️", "#1976D2", "Klik tombol panah di pojok kanan atau kiri untuk membalik halaman."],
    ["🖼️", "#00796B", "Perhatikan gambar dan baca teks dengan teliti."],
    ["🔊", "#E65100", "Klik ikon Speaker jika ingin mendengar suara penjelasan."],
    ["✏️", "#7B1FA2", "Kerjakan soal latihan dan kuis dengan jujur."],
    ["🎉", "#2E7D32", "Selamat belajar dan semoga menyenangkan!"],
  ];

  const tipsHTML = tips
    .map(
      ([icon, color, text], i) => `
    <div class="benefit-row" style="
      display: flex; align-items: center; gap: 12px;
      margin-bottom: 10px; padding: 12px;
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.4);
      border-left: 5px solid ${color};
      border-radius: 14px;
      box-shadow: 0 4px 16px rgba(0,0,0,.04);
    ">
      <div style="
        width: 44px; height: 44px; border-radius: 12px; background: ${color};
        display: flex; align-items: center; justify-content: center;
        font-size: 22px; color: #fff; box-shadow: 0 3px 8px rgba(0,0,0,.15);
        flex-shrink: 0;
      ">${icon}</div>
      <div>
        <div style="color: ${color}; font-size: 13px; font-weight: 900; font-family: 'Fredoka One', cursive; text-shadow: 1px 1px 0px rgba(255,255,255,0.3);">Petunjuk ${i + 1}</div>
        <div style="font-size: 13px; line-height: 1.5; color: #1C2833; font-weight: 500; margin-top: 2px;">${text}</div>
      </div>
    </div>
  `,
    )
    .join("");

  return `
<div class="inner-page" style="background:linear-gradient(160deg,#E3F2FD 0%,#BBDEFB 45%,#90CAF9 100%); min-height: 100vh; display: flex; flex-direction: column; justify-content: space-between;">

  <div class="inner-topbar" style="background:linear-gradient(135deg,#1976D2,#1565C0); display: flex; justify-content: space-between; align-items: center; padding: 12px 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.15);">
    <button onclick="changePage(-1)" style="background: #2196F3; color: white; border: none; padding: 10px 16px; border-radius: 20px; font-weight: bold; font-size: 14px; cursor: pointer;">◀ Kembali</button>
    <div style="color: white; font-family: 'Fredoka One', cursive; font-size: 15px; text-align: center; flex: 1; margin: 0 10px;">📘 Petunjuk Penggunaan</div>
    <button onclick="changePage(1)" style="background: #2196F3; color: white; border: none; padding: 10px 16px; border-radius: 20px; font-weight: bold; font-size: 14px; cursor: pointer;">Lanjut ▶</button>
  </div>

  <div class="inner-body" style="padding: 15px; max-width: 500px; margin: 0 auto; width: 100%; box-sizing: border-box;">

    <div style="
      background: rgba(255, 255, 255, 0.25);
      border: 3px dashed rgba(25, 118, 210, 0.5);
      text-align: center; position: relative; overflow: hidden;
      backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
      border-radius: 16px; padding: 15px; margin-bottom: 15px;
      box-shadow: 0 4px 20px rgba(0,0,0,.06);
    ">
      <div style="position: absolute; top: -10px; right: -10px; font-size: 70px; opacity: .08;">📚</div>
      <div style="font-size: 40px; margin-bottom: 5px;">🚀</div>
      <div style="font-size: 18px; color: #1565C0; font-family: 'Fredoka One', cursive; letter-spacing: .5px;">Ayo Belajar dengan Cara Seru!</div>
      <div style="margin-top: 5px; color: #1A237E; font-size: 13px; font-weight: bold;">Ikuti petunjuk berikut agar belajar menjadi lebih mudah dan menyenangkan ✨</div>
    </div>

    ${tipsHTML}

    <div style="
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
      border: 1.5px solid rgba(255, 255, 255, 0.4);
      border-radius: 16px; padding: 15px; text-align: center;
      box-shadow: 0 4px 20px rgba(0,0,0,.06); margin-top: 15px;
    ">
      <div style="font-size: 34px; margin-bottom: 4px;">🌟</div>
      <div style="font-family: 'Fredoka One', cursive; font-size: 16px; color: #E65100; margin-bottom: 6px;">Siap Menjelajah?</div>
      <div style="font-size: 13px; color: #3E2723; line-height: 1.6; font-weight: 500;">
        Yuk mulai petualangan mengenal <b>Kearifan Lokal Semanding</b> dengan semangat dan rasa ingin tahu!
      </div>
    </div>

  </div>

  <div class="pg-footer" style="background: rgba(255,255,255,0.25); backdrop-filter: blur(4px); color: #1565C0; font-weight: 700; text-align: center; padding: 10px; font-size: 12px;">
    📖 Halaman 3 dari 16
  </div>
</div>`;
}
