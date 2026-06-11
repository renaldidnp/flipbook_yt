// ============================================================
// PAGE 10 - EVALUASI & LKPD
// ============================================================
function page10() {
  return `
<div class="inner-page" style="background:linear-gradient(160deg,#FFF3E0 0%,#FFE0B2 45%,#FFCC80 100%); min-height: 100vh; display: flex; flex-direction: column; justify-content: space-between;">

  <div class="inner-topbar" style="background:linear-gradient(135deg,#D84315,#BF360C); display: flex; justify-content: space-between; align-items: center; padding: 12px 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.15);">
    <button onclick="changePage(-1)" style="background: #FF5722; color: white; border: none; padding: 10px 16px; border-radius: 20px; font-weight: bold; font-size: 14px; cursor: pointer;">◀ Kembali</button>
    <div style="color: white; font-family: 'Fredoka One', cursive; font-size: 15px; text-align: center; flex: 1; margin: 0 10px;">📝 EVALUASI & LKPD</div>
    <button onclick="changePage(1)" style="background: #FF5722; color: white; border: none; padding: 10px 16px; border-radius: 20px; font-weight: bold; font-size: 14px; cursor: pointer;">Lanjut ▶</button>
  </div>

  <div class="inner-body" style="padding: 15px; max-width: 500px; margin: 0 auto; width: 100%; box-sizing: border-box;">

    <!-- Evaluasi -->
    <div style="border-left: 6px solid #C2185B; background: rgba(255, 255, 255, 0.3); backdrop-filter: blur(8px); border-radius: 16px; padding: 15px; margin-bottom: 15px; box-shadow: 0 4px 16px rgba(0,0,0,.05);">
      <div style="color: #C2185B; font-family: 'Fredoka One', cursive; font-size: 18px; margin-bottom: 8px;">A. Evaluasi</div>
      <div style="line-height: 1.6; color: #4E342E; font-size: 14px;">
        Ayo Kerjakan soal berikut:
        <ol style="margin: 5px 0; padding-left: 20px;">
          <li>Jelaskan pengertian kearifan lokal!</li>
          <li>Mengapa budaya daerah harus dilestarikan?</li>
          <li>Sebutkan contoh budaya daerah Semanding!</li>
          <li>Bagaimana cara menjaga lingkungan sekitar?</li>
        </ol>
      </div>
    </div>

    <!-- LKPD -->
    <div style="border-left: 6px solid #2E7D32; background: rgba(255, 255, 255, 0.3); backdrop-filter: blur(8px); border-radius: 16px; padding: 15px; margin-bottom: 15px; box-shadow: 0 4px 16px rgba(0,0,0,.05);">
      <div style="color: #2E7D32; font-family: 'Fredoka One', cursive; font-size: 18px; margin-bottom: 8px;">B. LKPD: Tugas Kelompok</div>

      <div style="margin-bottom: 15px;">
        <div style="font-size: 13px; font-weight: bold; color: #1B5E20; margin-bottom: 5px;">1. Pengamatan Lingkungan:</div>
        <textarea placeholder="Tuliskan 2 contoh kearifan lokal di sini..." style="width:100%; border-radius:8px; border:1px solid #ccc; padding:8px; font-size:13px; box-sizing:border-box;"></textarea>
      </div>

      <div style="margin-bottom: 15px;">
        <div style="font-size: 13px; font-weight: bold; color: #1B5E20; margin-bottom: 5px;">2. Wawancara Tradisi:</div>
        <textarea placeholder="Tuliskan hasil wawancara di sini..." style="width:100%; border-radius:8px; border:1px solid #ccc; padding:8px; font-size:13px; box-sizing:border-box;"></textarea>
      </div>

      <div>
        <div style="font-size: 13px; font-weight: bold; color: #1B5E20; margin-bottom: 5px;">3. Diskusi Kelompok:</div>
        <textarea placeholder="Tuliskan kesimpulan diskusi di sini..." style="width:100%; border-radius:8px; border:1px solid #ccc; padding:8px; font-size:13px; box-sizing:border-box;"></textarea>
      </div>
    </div>

  </div>

  <div class="pg-footer" style="background: rgba(255,255,255,0.25); backdrop-filter: blur(4px); color: #5D4037; font-weight: 700; text-align: center; padding: 10px; font-size: 12px;">
    📖 Halaman 10 dari 10
  </div>
</div>`;
}
