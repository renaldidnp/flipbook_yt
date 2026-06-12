// ============================================================
// PAGE 5 - BAB 2: KEARIFAN LOKAL SEMANDING
// ============================================================
function page6() {
  const imgGrid = (folder, from, to) => {
    let items = "";
    for (let i = from; i <= to; i++) {
      items += `<img src="img/${folder}/${i}.jpg"
        onclick="this.style.transform = this.style.transform == 'scale(2)' ? 'scale(1)' : 'scale(2)'; this.style.zIndex = this.style.zIndex == '10' ? '1' : '10';"
        style="width:100%; height:60px; object-fit:cover; border-radius:8px; cursor:pointer; transition:transform 0.2s; position:relative; box-shadow: 0 2px 5px rgba(0,0,0,0.1);"
        alt="Gambar ${i}"/>`;
    }
    return `<div style="margin-top: 10px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px;">${items}</div>`;
  };

  return `
<div class="inner-page" style="background:linear-gradient(160deg,#FFF8E1 0%,#FFE0B2 45%,#FFCC80 100%); min-height: 100vh; display: flex; flex-direction: column; justify-content: space-between;">

  <div class="inner-topbar" style="background:linear-gradient(135deg,#E65100,#BF360C); display: flex; justify-content: space-between; align-items: center; padding: 12px 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.15);">
    <button onclick="changePage(-1)" style="background: #FF9800; color: white; border: none; padding: 10px 16px; border-radius: 20px; font-weight: bold; font-size: 14px; cursor: pointer;">◀ Kembali</button>
    <div style="color: white; font-family: 'Fredoka One', cursive; font-size: 15px; text-align: center; flex: 1; margin: 0 10px;">🏮 BAB 2: Kearifan Lokal Semanding</div>
    <button onclick="changePage(1)" style="background: #FF9800; color: white; border: none; padding: 10px 16px; border-radius: 20px; font-weight: bold; font-size: 14px; cursor: pointer;">Lanjut ▶</button>
  </div>

  <div class="inner-body" style="padding: 15px; max-width: 500px; margin: 0 auto; width: 100%; box-sizing: border-box;">

    <!-- Video Section -->
    <div style="
      background: rgba(255, 255, 255, 0.3); backdrop-filter: blur(8px);
      border: 2px solid #FFCC80; border-radius: 16px; padding: 15px; margin-bottom: 15px;
      box-shadow: 0 4px 16px rgba(0,0,0,.05);
    ">
      <div style="color: #E65100; font-family: 'Fredoka One', cursive; font-size: 18px; margin-bottom: 5px;">🎥 Ayo Menonton!</div>
      <div style="font-size: 13px; color: #5D4037; margin-bottom: 12px;">Tonton kedua video berikut, lalu jawab pertanyaan di bawahnya!</div>

      <div style="margin-bottom: 14px;">
        <div style="font-size: 13px; font-weight: 800; color: #D84315; margin-bottom: 6px;">🎭 Video 1: Tari Tayub</div>
        <div style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 10px; border: 2px solid #FFAB91;">
          <iframe src="https://www.youtube.com/embed/fujNsa9pdls?si=3AzbUgu-CwU4OrKm" title="Tari Tayub Tuban" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 8px;"></iframe>
        </div>
      </div>

      <div style="margin-bottom: 14px;">
        <div style="font-size: 13px; font-weight: 800; color: #2E7D32; margin-bottom: 6px;">🎪 Video 2: Seni Sandur</div>
        <div style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 10px; border: 2px solid #A5D6A7;">
          <iframe src="https://www.youtube.com/embed/rahyZygojI0?si=qWzy24pv5aC7svYK" title="Seni Sandur Tuban" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 8px;"></iframe>
        </div>
      </div>

      <!-- Tabel Perbandingan -->
      <div style="margin-bottom: 10px;">
        <div style="font-size: 13px; font-weight: 800; color: #BF360C; margin-bottom: 8px;">✏️ Setelah menonton, isi tabel perbedaan berikut!</div>
        <table style="width: 100%; border-collapse: collapse; font-size: 12px;">
          <thead>
            <tr>
              <th style="background: #E65100; color: white; padding: 7px; border-radius: 6px 0 0 0; text-align: center;">Aspek</th>
              <th style="background: #D84315; color: white; padding: 7px; text-align: center;">Tayub</th>
              <th style="background: #2E7D32; color: white; padding: 7px; border-radius: 0 6px 0 0; text-align: center;">Sandur</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background: rgba(255,255,255,0.6);">
              <td style="padding: 6px 8px; font-weight: bold; color: #4E342E; border-bottom: 1px solid #eee;">Jenis</td>
              <td style="padding: 4px;"><input type="text" placeholder="Tulis..." style="width:100%; border: 1px solid #FFAB91; border-radius: 6px; padding: 4px 6px; font-size: 11px; outline: none;"/></td>
              <td style="padding: 4px;"><input type="text" placeholder="Tulis..." style="width:100%; border: 1px solid #A5D6A7; border-radius: 6px; padding: 4px 6px; font-size: 11px; outline: none;"/></td>
            </tr>
            <tr style="background: rgba(255,255,255,0.4);">
              <td style="padding: 6px 8px; font-weight: bold; color: #4E342E; border-bottom: 1px solid #eee;">Pemain</td>
              <td style="padding: 4px;"><input type="text" placeholder="Tulis..." style="width:100%; border: 1px solid #FFAB91; border-radius: 6px; padding: 4px 6px; font-size: 11px; outline: none;"/></td>
              <td style="padding: 4px;"><input type="text" placeholder="Tulis..." style="width:100%; border: 1px solid #A5D6A7; border-radius: 6px; padding: 4px 6px; font-size: 11px; outline: none;"/></td>
            </tr>
            <tr style="background: rgba(255,255,255,0.6);">
              <td style="padding: 6px 8px; font-weight: bold; color: #4E342E;">Waktu Tampil</td>
              <td style="padding: 4px;"><input type="text" placeholder="Tulis..." style="width:100%; border: 1px solid #FFAB91; border-radius: 6px; padding: 4px 6px; font-size: 11px; outline: none;"/></td>
              <td style="padding: 4px;"><input type="text" placeholder="Tulis..." style="width:100%; border: 1px solid #A5D6A7; border-radius: 6px; padding: 4px 6px; font-size: 11px; outline: none;"/></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Refleksi -->
      <div style="padding: 10px; background: rgba(255,245,157,0.6); border-radius: 10px; border-left: 4px solid #FBC02D;">
        <div style="font-size: 12px; font-weight: 800; color: #E65100; margin-bottom: 5px;">💬 Refleksi</div>
        <div style="font-size: 12px; color: #5D4037; margin-bottom: 6px;">Kesenian mana yang paling menarik menurutmu? Mengapa?</div>
        <textarea placeholder="Tulis pendapatmu di sini..." rows="3"
          style="width: 100%; border-radius: 8px; border: 1px solid #FBC02D; padding: 7px; font-size: 12px; font-family: inherit; resize: none; background: rgba(255,255,255,0.7);"></textarea>
      </div>
    </div>

    <!-- Seni Tayub -->
    <div style="border-left: 6px solid #D84315; background: rgba(255, 255, 255, 0.3); backdrop-filter: blur(8px); border-radius: 16px; padding: 15px; margin-bottom: 15px; box-shadow: 0 4px 16px rgba(0,0,0,.05);">
      <div style="color: #D84315; font-family: 'Fredoka One', cursive; font-size: 18px; margin-bottom: 8px;">A. Seni Tayub</div>
      <div style="line-height: 1.6; color: #5D4037; font-size: 14px; margin-bottom: 10px;">
        Seni Tayub merupakan tarian tradisional khas Tuban yang dimainkan dengan iringan gamelan. Penari perempuan disebut waranggono. Kesenian Tayub menjadi hiburan masyarakat sekaligus bentuk pelestarian budaya daerah.
      </div>
      ${imgGrid("bab2", 1, 6)}
      <div style="background: rgba(255, 255, 255, 0.6); padding: 10px; border-radius: 10px; margin-top: 10px;">
        <div style="font-weight: bold; color: #BF360C; margin-bottom: 5px;">Tahukah Kamu?</div>
        <div style="font-size: 13px;">Tayub mengajarkan nilai:</div>
        <ul style="margin: 5px 0; padding-left: 20px; font-size: 13px;">
          <li>Kebersamaan</li>
          <li>Gotong royong</li>
          <li>Menghormati budaya daerah</li>
        </ul>
      </div>
    </div>

    <!-- Seni Sandur -->
    <div style="border-left: 6px solid #2E7D32; background: rgba(255, 255, 255, 0.3); backdrop-filter: blur(8px); border-radius: 16px; padding: 15px; margin-bottom: 15px; box-shadow: 0 4px 16px rgba(0,0,0,.05);">
      <div style="color: #2E7D32; font-family: 'Fredoka One', cursive; font-size: 18px; margin-bottom: 8px;">B. Seni Sandur</div>
      <div style="line-height: 1.6; color: #3E2723; font-size: 14px; margin-bottom: 10px;">
        Sandur merupakan pertunjukan rakyat yang berasal dari kehidupan petani. Kesenian ini memadukan tari, musik, dan cerita rakyat. Biasanya pertunjukan Sandur dilakukan saat panen atau acara desa.
      </div>
      ${imgGrid("bab2", 7, 15)}
    </div>

    <!-- Aktivitas Kelompok -->
    <div style="background: #FFF3E0; border: 2px solid #FFCC80; border-radius: 16px; padding: 15px; margin-bottom: 15px;">
      <div style="color: #BF360C; font-family: 'Fredoka One', cursive; font-size: 16px; margin-bottom: 8px;">👥 Aktivitas Kelompok</div>
      <div style="font-size: 14px; color: #5D4037;">Diskusikan bersama temanmu:</div>
      <ul style="margin: 10px 0; padding-left: 20px; font-size: 14px; color: #5D4037;">
        <li>Mengapa budaya daerah harus dilestarikan?</li>
        <li>Apa akibatnya jika budaya daerah hilang?</li>
      </ul>
    </div>

  </div>

  <div class="pg-footer" style="background: rgba(255,255,255,0.25); backdrop-filter: blur(4px); color: #6D4C41; font-weight: 700; text-align: center; padding: 10px; font-size: 12px;">
    📖 Halaman 5 dari 16
  </div>
</div>`;
}
