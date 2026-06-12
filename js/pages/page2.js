// ============================================================
// PAGE 2 - BIODATA PENULIS
// ============================================================
function page2() {
  return `
<div class="inner-page" style="background:linear-gradient(160deg,#FFF8E1 0%,#FFE082 45%,#FFD54F 100%); min-height: 100vh; display: flex; flex-direction: column; justify-content: space-between;">

  <div class="inner-topbar" style="background:linear-gradient(135deg,#F9A825,#F57F17); display: flex; justify-content: space-between; align-items: center; padding: 12px 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.15);">
    <button class="topbar-back" onclick="changePage(-1)" style="background: #FF9800; color: white; border: none; padding: 10px 16px; border-radius: 20px; font-weight: bold; font-size: 14px; cursor: pointer; box-shadow: 0 3px 6px rgba(0,0,0,0.1);">◀ Kembali</button>
    <div class="topbar-title" style="color: white; font-family: 'Fredoka One', cursive; font-size: 16px; text-align: center; flex: 1; margin: 0 10px;">Biodata Penulis</div>
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

      <!-- Avatar / Foto -->
      <div style="text-align: center; margin-bottom: 16px;">
        <div style="
          width: 90px; height: 90px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FF9800, #F57F17);
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 42px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.15);
          border: 3px solid rgba(255,255,255,0.6);
        ">👩‍🎓</div>
      </div>

      <!-- Nama -->
      <div style="
        font-size: 20px;
        color: #BF360C;
        font-family: 'Fredoka One', cursive;
        letter-spacing: .5px;
        text-shadow: 1px 1px 0px rgba(255,255,255,0.6);
        text-align: center;
        margin-bottom: 6px;
      ">Siti Nurhalimah</div>

      <!-- Institusi -->
      <div style="text-align: center; margin-bottom: 16px;">
        <span style="
          display: inline-block;
          background: rgba(255,152,0,0.2);
          border: 1px solid #FF9800;
          color: #5D4037;
          font-size: 12px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 20px;
        ">🏫 Universitas PGRI Ronggolawe Tuban</span>
      </div>

      <!-- Deskripsi -->
      <div style="font-size: 14px; line-height: 1.7; color: #3E2723; font-weight: 500; text-align: left;">
        <p style="margin-bottom: 12px;">
          Siti Nurhalimah adalah seorang Mahasiswa <b>Universitas PGRI Ronggolawe Tuban</b> yang memiliki minat dan pengalaman di bidang <b>Pendidikan</b>.
        </p>
        <p style="margin-bottom: 12px;">
          Melalui e-book ini, ia berbagi pengetahuan, pengalaman, dan wawasan praktis yang telah dipelajari selama bertahun-tahun.
        </p>
        <p style="margin-bottom: 0;">
          Dengan gaya penyampaian yang sederhana dan mudah dipahami, Siti Nurhalimah berharap karya ini dapat memberikan manfaat serta membantu pembaca mencapai tujuan mereka. 🌟
        </p>
      </div>

      <!-- Divider -->
      <div style="border-top: 1px dashed #FF9800; margin: 16px 0;"></div>

      <!-- Badge bidang -->
      <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;">
        <span style="background: rgba(255,255,255,0.5); border: 1px solid #FFB300; color: #5D4037; font-size: 12px; font-weight: 700; padding: 5px 12px; border-radius: 20px;">📚 Pendidikan</span>
        <span style="background: rgba(255,255,255,0.5); border: 1px solid #FFB300; color: #5D4037; font-size: 12px; font-weight: 700; padding: 5px 12px; border-radius: 20px;">🌍 Kearifan Lokal</span>
        <span style="background: rgba(255,255,255,0.5); border: 1px solid #FFB300; color: #5D4037; font-size: 12px; font-weight: 700; padding: 5px 12px; border-radius: 20px;">✍️ Penulis E-Book</span>
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
  ">📖 Halaman 2 dari 10</div>

</div>`;
}
