// ============================================================
// PAGE 2 - KATA PENGANTAR
// ============================================================
function page2() {
  return `
<div class="inner-page" style="background:linear-gradient(160deg,#FFF8E1 0%,#FFE082 45%,#FFD54F 100%); min-height: 100vh; display: flex; flex-direction: column; justify-content: space-between;">

  <div class="inner-topbar" style="background:linear-gradient(135deg,#F9A825,#F57F17); display: flex; justify-content: space-between; align-items: center; padding: 12px 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.15);">
    <button class="topbar-back" onclick="changePage(-1)" style="background: #FF9800; color: white; border: none; padding: 10px 16px; border-radius: 20px; font-weight: bold; font-size: 14px; cursor: pointer; box-shadow: 0 3px 6px rgba(0,0,0,0.1);">◀ Kembali</button>
    <div class="topbar-title" style="color: white; font-family: 'Fredoka One', cursive; font-size: 16px; text-align: center; flex: 1; margin: 0 10px;">Kata Pengantar</div>
    <button class="topbar-next" onclick="changePage(1)" style="background: #FF9800; color: white; border: none; padding: 10px 16px; border-radius: 20px; font-weight: bold; font-size: 14px; cursor: pointer; box-shadow: 0 3px 6px rgba(0,0,0,0.1);">Lanjut ▶</button>
  </div>

  <div class="inner-body" style="padding: 15px; max-width: 500px; margin: 0 auto; width: 100%; box-sizing: border-box;">

    <div class="card" style="
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border-radius: 16px;
      padding: 18px;
      margin-bottom: 15px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-left: 6px solid #FFa000;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    ">
      <div class="card-title" style="
        font-size: 20px;
        color: #BF360C;
        font-family: 'Fredoka One', cursive;
        letter-spacing: .5px;
        text-shadow: 1px 1px 0px rgba(255,255,255,0.6);
        text-align: center;
        margin-bottom: 15px;
      ">👋 HALO ANAK HEBAT!</div>

      <div class="card-text" style="font-size: 14px; line-height: 1.6; text-align: left; color: #3E2723; font-weight: 500;">
        <p style="margin-bottom: 12px">
          Puji syukur ke hadirat Tuhan Yang Maha Esa karena 📱 <b>E-Book Interaktif</b> berbasis kearifan lokal daerah Semanding ini dapat selesai dengan baik.
        </p>
        <p style="margin-bottom: 12px">
          Buku digital ini dibuat khusus untuk membantu kamu, siswa kelas IV SD, agar bisa belajar materi <b>IPAS</b> dengan cara yang lebih seru, asyik, dan dekat dengan kehidupanmu sehari-hari.
        </p>
        <p style="margin-bottom: 12px">
          Di dalam buku ini, kita akan berjalan-jalan mengenal 🎭 <b>budaya lokal</b>, 🎨 <b>kesenian indah</b>, 👨‍🌾 <b>pekerjaan seru</b>, serta 🌳 <b>lingkungan alam</b> di sekitar Semanding. Semoga kamu makin suka belajar dan makin cinta dengan daerahmu sendiri ya!
        </p>
        <p style="margin-bottom: 5px">Selamat belajar petualang cilik! 🌟</p>
      </div>

      <div style="margin-top: 15px; text-align: right; color: #5D4037; font-weight: bold;">
        <div style="font-family: 'Fredoka One', cursive; font-size: 14px; color: #BF360C; text-shadow: 1px 1px 0px rgba(255,255,255,0.5);">
          ✍️ Tim Penulis
        </div>
      </div>

      <div style="
        margin-top: 20px;
        padding: 12px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.4);
        border: 1px dashed #FF9800;
        text-align: center;
      ">
        <span style="font-size: 13px; font-weight: bold; color: #BF360C; display: block; margin-bottom: 8px;">Apakah kamu siap bertualang? Ketuk tombol di bawah!</span>
        <div style="display: flex; justify-content: center; gap: 10px;">
          <button onclick="alert('Yey! Semangat belajar ya! 💪🔥')" style="background: #FF9800; border: none; padding: 8px 15px; border-radius: 20px; color: white; font-weight: bold; font-size: 13px; cursor: pointer; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">Siap! 🔥</button>
          <button onclick="alert('Keren! Yuk, langsung klik tombol Lanjut di atas! ✨')" style="background: #FFB300; border: none; padding: 8px 15px; border-radius: 20px; color: white; font-weight: bold; font-size: 13px; cursor: pointer; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">Sangat Siap! ⭐</button>
        </div>
      </div>
    </div>

  </div>

  <div class="pg-footer" style="
    background: rgba(255,255,255,0.25);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    color: #5D4037;
    font-weight: 700;
    text-align: center;
    padding: 10px;
    font-size: 12px;
  ">📖 Halaman 2 dari 16</div>

</div>`;
}
