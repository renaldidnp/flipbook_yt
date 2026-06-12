// ============================================================
// PAGE 4 - BAB 1: LINGKUNGAN DAERAHKU
// ============================================================
function page5() {
  const imgGrid = (folder, count, cols = 4) => {
    let items = "";
    for (let i = 1; i <= count; i++) {
      items += `<img src="img/${folder}/${i}.jpg"
        onclick="this.style.transform = this.style.transform == 'scale(2)' ? 'scale(1)' : 'scale(2)'; this.style.zIndex = this.style.zIndex == '10' ? '1' : '10';"
        style="width:100%; height:60px; object-fit:cover; border-radius:8px; cursor:pointer; transition:transform 0.2s; position:relative; box-shadow: 0 2px 5px rgba(0,0,0,0.1);"
        alt="Gambar ${i}"/>`;
    }
    return `<div style="margin-top: 15px; display: grid; grid-template-columns: repeat(${cols}, 1fr); gap: 6px;">${items}</div>`;
  };

  return `
<div class="inner-page" style="background:linear-gradient(160deg,#E8F5E9 0%,#C8E6C9 45%,#A5D6A7 100%); min-height: 100vh; display: flex; flex-direction: column; justify-content: space-between;">

  <div class="inner-topbar" style="background:linear-gradient(135deg,#2E7D32,#1B5E20); display: flex; justify-content: space-between; align-items: center; padding: 12px 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.15);">
    <button onclick="changePage(-1)" style="background: #4CAF50; color: white; border: none; padding: 10px 16px; border-radius: 20px; font-weight: bold; font-size: 14px; cursor: pointer;">◀ Kembali</button>
    <div style="color: white; font-family: 'Fredoka One', cursive; font-size: 16px; text-align: center; flex: 1; margin: 0 10px;">BAB 1: Semanding</div>
    <button onclick="changePage(1)" style="background: #4CAF50; color: white; border: none; padding: 10px 16px; border-radius: 20px; font-weight: bold; font-size: 14px; cursor: pointer;">Lanjut ▶</button>
  </div>

  <div class="inner-body" style="padding: 15px; max-width: 500px; margin: 0 auto; width: 100%; box-sizing: border-box;">

    <!-- Header BAB -->
    <div style="
      background: rgba(255, 255, 255, 0.25); border: 3px dashed rgba(46, 125, 50, 0.6);
      backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
      border-radius: 16px; text-align: center; padding: 15px; margin-bottom: 15px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    ">
      <div style="font-size: 22px; color: #1B5E20; font-family: 'Fredoka One', cursive;">✨ BAB 1 ✨</div>
      <div style="font-family: 'Fredoka One', cursive; font-size: 18px; color: #1B5E20; margin-top: 5px;">Lingkungan Daerahku</div>
      <div style="margin-top: 8px; color: #2E4A3F; font-size: 13px; font-weight: bold;">🌳 Mengenal lingkungan dan kehidupan masyarakat Semanding</div>
    </div>

    <!-- Video -->
    <div style="
      background: rgba(255, 255, 255, 0.3); backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.4);
      border-radius: 16px; padding: 15px; margin-bottom: 15px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.05);
    ">
      <div style="color: #1B5E20; font-family: 'Fredoka One', cursive; font-size: 16px; margin-bottom: 8px;">🎬 Video: Mengenal Semanding</div>
      <div style="font-size: 13px; color: #2E4A3F; margin-bottom: 10px;">Yuk tonton video berikut untuk mengenal Semanding lebih dekat! 🌿</div>
      <div style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 10px; border: 2px solid #A5D6A7;">
        <iframe
          src="https://www.youtube.com/embed/1tL2vJR0igg?si=OAwNiGeWC-zgTNUA"
          title="Mengenal Semanding"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 8px;">
        </iframe>
      </div>
      <div style="margin-top: 8px; padding: 8px 10px; background: rgba(255,245,157,0.6); border-radius: 8px; border-left: 4px solid #FBC02D;">
        <span style="font-size: 12px; color: #4E342E; font-weight: bold;">💡 Sambil menonton, perhatikan:</span>
        <ul style="margin: 5px 0 0; padding-left: 18px; font-size: 12px; color: #5D4037;">
          <li>Apa saja yang kamu lihat di Semanding?</li>
          <li>Kegiatan apa yang dilakukan masyarakat?</li>
        </ul>
      </div>
    </div>

    <!-- Mengenal Daerah -->
    <div style="
      background: rgba(255, 255, 255, 0.3); backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.4);
      border-radius: 16px; padding: 15px; margin-bottom: 15px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.05);
    ">
      <div style="color: #1B5E20; font-family: 'Fredoka One', cursive; font-size: 16px; margin-bottom: 10px;">A. Mengenal Daerah Semanding</div>
      <div style="line-height: 1.6; text-align: left; color: #0b3c11; font-size: 14px; font-weight: 500;">
        <b>Semanding</b> merupakan salah satu wilayah di Kabupaten Tuban, Jawa Timur. Daerah ini memiliki kekayaan budaya, kesenian, dan tradisi yang masih dijaga lho!
        <br><br>
        Masyarakat Semanding hidup rukun dan saling bekerja sama. Banyak penduduk bekerja sebagai 👨‍🌾 <b>petani</b>, 🛍️ <b>pedagang</b>, dan 🎨 <b>pengrajin</b>.
      </div>
      ${imgGrid("bab2", 8, 4)}
      <small style="color: #1B5E20; font-size: 10px; display: block; text-align: center; margin-top: 7px; font-weight: bold;">*Ketuk gambar untuk memperbesar</small>
    </div>

    <!-- Lingkungan Alam -->
    <div style="
      background: rgba(255, 255, 255, 0.3); backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.4);
      border-radius: 16px; padding: 15px; margin-bottom: 15px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.05);
    ">
      <div style="color: #1B5E20; font-family: 'Fredoka One', cursive; font-size: 16px; margin-bottom: 10px;">B. Lingkungan Alam Semanding</div>
      <div style="line-height: 1.6; color: #0b3c11; font-size: 14px; font-weight: 500;">
        Daerah Semanding memiliki alam yang indah:
        <div style="margin: 10px 0; padding-left: 10px; border-left: 3px solid #2E7D32; font-weight: bold;">
          🌾 • Persawahan<br>
          🏡 • Perkebunan<br>
          💧 • Sungai<br>
          ⛰️ • Daerah perbukitan
        </div>
        Lingkungan alam ini dimanfaatkan masyarakat untuk bertani dan beternak hewan.
      </div>

      <div style="
        margin-top: 15px; padding: 12px; border-radius: 12px;
        background: rgba(255, 245, 157, 0.6); backdrop-filter: blur(4px);
        border-left: 5px solid #FBC02D; color: #4E342E;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      ">
        <span style="font-weight: bold; font-size: 14px; display: block; margin-bottom: 5px;">🎮 Aktivitas Seru</span>
        <label style="font-size: 13px; display:block; margin-bottom: 8px; font-weight: 500;">✏️ Sebutkan lingkungan alam yang ada di sekitar rumahmu!</label>
        <div style="display: flex; gap: 5px;">
          <input id="jawaban-anak" type="text" placeholder="Ketik jawabanmu di sini..."
            style="flex: 1; padding: 8px 10px; border: 1px solid #FBC02D; border-radius: 8px; font-size: 13px; outline: none; background: rgba(255,255,255,0.7); font-weight: bold; color: #4E342E;"/>
          <button onclick="alert('Hebat! Jawabanmu sudah tersimpan! 🌟')"
            style="background: #FBC02D; border: none; padding: 8px 12px; border-radius: 8px; font-weight: bold; color: #4E342E; cursor: pointer; font-size: 13px;">Kirim</button>
        </div>
      </div>
    </div>

  </div>

  <div class="pg-footer" style="background: rgba(255,255,255,0.25); backdrop-filter: blur(4px); color: #1B5E20; font-weight: 700; text-align: center; padding: 10px; font-size: 12px;">
    📖 Halaman 4 dari 16
  </div>
</div>`;
}
