// ============================================================
// PAGE 7 - BAB 4: BUDAYA & LINGKUNGAN
// ============================================================
function page8() {
  const imgGrid = (folder, count) => {
    let items = "";
    for (let i = 1; i <= count; i++) {
      items += `<img src="img/${folder}/${i}.jpg"
        onclick="this.style.transform = this.style.transform == 'scale(2)' ? 'scale(1)' : 'scale(2)'; this.style.zIndex = this.style.zIndex == '10' ? '1' : '10';"
        style="width:100%; height:60px; object-fit:cover; border-radius:8px; cursor:pointer; transition:transform 0.2s; position:relative; box-shadow: 0 2px 5px rgba(0,0,0,0.1);"
        alt="Gambar ${i}"/>`;
    }
    return `<div style="margin-top: 10px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px;">${items}</div>`;
  };

  return `
<div class="inner-page" style="background:linear-gradient(160deg,#FFF3E0 0%,#FFE0B2 45%,#FFCC80 100%); min-height: 100vh; display: flex; flex-direction: column; justify-content: space-between;">

  <div class="inner-topbar" style="background:linear-gradient(135deg,#D84315,#BF360C); display: flex; justify-content: space-between; align-items: center; padding: 12px 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.15);">
    <button onclick="changePage(-1)" style="background: #FF5722; color: white; border: none; padding: 10px 16px; border-radius: 20px; font-weight: bold; font-size: 14px; cursor: pointer;">◀ Kembali</button>
    <div style="color: white; font-family: 'Fredoka One', cursive; font-size: 15px; text-align: center; flex: 1; margin: 0 10px;">🌿 BAB 4: Budaya & Lingkungan</div>
    <button onclick="changePage(1)" style="background: #FF5722; color: white; border: none; padding: 10px 16px; border-radius: 20px; font-weight: bold; font-size: 14px; cursor: pointer;">Lanjut ▶</button>
  </div>

  <div class="inner-body" style="padding: 15px; max-width: 500px; margin: 0 auto; width: 100%; box-sizing: border-box;">

    <!-- Cara Melestarikan Budaya -->
    <div style="border-left: 6px solid #C2185B; background: rgba(255, 255, 255, 0.3); backdrop-filter: blur(8px); border-radius: 16px; padding: 15px; margin-bottom: 15px; box-shadow: 0 4px 16px rgba(0,0,0,.05);">
      <div style="color: #C2185B; font-family: 'Fredoka One', cursive; font-size: 18px; margin-bottom: 8px;">A. Cara Melestarikan Budaya</div>
      <div style="line-height: 1.6; color: #4E342E; font-size: 14px; margin-bottom: 10px;">
        Kita dapat menjaga warisan leluhur dengan cara:
        <ul style="margin: 5px 0; padding-left: 20px;">
          <li>Mengikuti kegiatan budaya daerah</li>
          <li>Belajar tarian tradisional</li>
          <li>Menjaga sopan santun</li>
          <li>Menggunakan bahasa daerah dengan baik</li>
        </ul>
      </div>
    </div>

    <!-- Menjaga Lingkungan -->
    <div style="border-left: 6px solid #2E7D32; background: rgba(255, 255, 255, 0.3); backdrop-filter: blur(8px); border-radius: 16px; padding: 15px; margin-bottom: 15px; box-shadow: 0 4px 16px rgba(0,0,0,.05);">
      <div style="color: #2E7D32; font-family: 'Fredoka One', cursive; font-size: 18px; margin-bottom: 8px;">B. Menjaga Lingkungan</div>
      <div style="line-height: 1.6; color: #4E342E; font-size: 14px; margin-bottom: 10px;">
        Lingkungan harus dijaga agar tetap bersih dan sehat dengan cara:
        <ul style="margin: 5px 0; padding-left: 20px;">
          <li>Membuang sampah pada tempatnya</li>
          <li>Menanam pohon</li>
          <li>Membersihkan selokan</li>
          <li>Hemat air</li>
        </ul>
      </div>
      ${imgGrid("bab4", 8)}
    </div>

  </div>

  <div class="pg-footer" style="background: rgba(255,255,255,0.25); backdrop-filter: blur(4px); color: #5D4037; font-weight: 700; text-align: center; padding: 10px; font-size: 12px;">
    📖 Halaman 7 dari 16
  </div>
</div>`;
}
