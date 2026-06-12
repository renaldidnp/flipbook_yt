// ============================================================
// PAGE 6 - BAB 3: MATA PENCAHARIAN
// ============================================================
function page7() {
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
<div class="inner-page" style="background: linear-gradient(rgba(255,255,255,.18), rgba(255,255,255,.18)), linear-gradient(160deg,#F3E5F5 0%,#E1BEE7 45%,#CE93D8 100%); min-height: 100vh; display: flex; flex-direction: column; justify-content: space-between;">

  <div class="inner-topbar" style="background:linear-gradient(135deg,#7B1FA2,#4A148C); display: flex; justify-content: space-between; align-items: center; padding: 12px 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.15);">
    <button onclick="changePage(-1)" style="background: #9C27B0; color: white; border: none; padding: 10px 16px; border-radius: 20px; font-weight: bold; font-size: 14px; cursor: pointer;">◀ Kembali</button>
    <div style="color: white; font-family: 'Fredoka One', cursive; font-size: 15px; text-align: center; flex: 1; margin: 0 10px;">💼 BAB 3: Mata Pencaharian</div>
    <button onclick="changePage(1)" style="background: #9C27B0; color: white; border: none; padding: 10px 16px; border-radius: 20px; font-weight: bold; font-size: 14px; cursor: pointer;">Lanjut ▶</button>
  </div>

  <div class="inner-body" style="padding: 15px; max-width: 500px; margin: 0 auto; width: 100%; box-sizing: border-box;">

    <!-- Petani -->
    <div style="border-left: 6px solid #2E7D32; background: rgba(255, 255, 255, 0.3); backdrop-filter: blur(8px); border-radius: 16px; padding: 15px; margin-bottom: 15px; box-shadow: 0 4px 16px rgba(0,0,0,.05);">
      <div style="color: #2E7D32; font-family: 'Fredoka One', cursive; font-size: 18px; margin-bottom: 8px;">A. Petani</div>
      <div style="line-height: 1.6; color: #4E342E; font-size: 14px; margin-bottom: 10px;">
        Sebagian besar masyarakat Semanding bekerja sebagai petani. Mereka menanam:
        <ul style="margin: 5px 0; padding-left: 20px;">
          <li>Padi, Jagung, Kacang, dan Sayuran</li>
        </ul>
        Petani memanfaatkan tanah yang subur untuk memenuhi kebutuhan hidup.
      </div>
      ${imgGrid("bab3", 8)}
    </div>

    <!-- Pedagang & Pengrajin -->
    <div style="border-left: 6px solid #D84315; background: rgba(255, 255, 255, 0.3); backdrop-filter: blur(8px); border-radius: 16px; padding: 15px; margin-bottom: 15px; box-shadow: 0 4px 16px rgba(0,0,0,.05);">
      <div style="color: #D84315; font-family: 'Fredoka One', cursive; font-size: 18px; margin-bottom: 8px;">B. Pedagang dan Pengrajin</div>
      <div style="line-height: 1.6; color: #4E342E; font-size: 14px; margin-bottom: 10px;">
        Selain bertani, masyarakat juga berdagang dan membuat kerajinan seperti:
        <ul style="margin: 5px 0; padding-left: 20px;">
          <li>Anyaman bambu</li>
          <li>Kerajinan kayu</li>
          <li>Makanan tradisional</li>
        </ul>
      </div>
    </div>

    <!-- Aktivitas -->
    <div style="background: #FFF3E0; border: 2px solid #FFCC80; border-radius: 16px; padding: 15px;">
      <div style="color: #BF360C; font-family: 'Fredoka One', cursive; font-size: 16px; margin-bottom: 8px;">📝 Aktivitas Interaktif</div>
      <div style="font-size: 14px; color: #5D4037;">Tuliskan pekerjaan orang tuamu dan manfaatnya bagi masyarakat!</div>
      <textarea style="width: 100%; margin-top: 10px; border-radius: 8px; border: 1px solid #ccc; padding: 8px; font-family: inherit; box-sizing: border-box;" rows="3" placeholder="Tulis jawabanmu di sini..."></textarea>
    </div>

  </div>

  <div class="pg-footer" style="background: rgba(255,255,255,0.25); backdrop-filter: blur(4px); color: #4A148C; font-weight: 700; text-align: center; padding: 10px; font-size: 12px;">
    📖 Halaman 6 dari 16
  </div>
</div>`;
}
