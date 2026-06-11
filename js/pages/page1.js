// ============================================================
// PAGE 1 - COVER
// ============================================================
function page1() {
  return `
<style>
  @keyframes pulse {
    0% { transform: scale(1); box-shadow: 0 4px 15px rgba(245, 127, 23, 0.4); }
    50% { transform: scale(1.05); box-shadow: 0 6px 22px rgba(245, 127, 23, 0.6); }
    100% { transform: scale(1); box-shadow: 0 4px 15px rgba(245, 127, 23, 0.4); }
  }
  .btn-mulai-baca {
    animation: pulse 2s infinite ease-in-out;
    transition: transform 0.1s, filter 0.2s;
  }
  .btn-mulai-baca:active {
    transform: scale(0.95) !important;
    filter: brightness(0.9);
  }
</style>

<div class="cover-page" style="
  background: url('img/cover.png') center center no-repeat; 
  background-size: cover;
  min-height: 100vh; 
  display: flex; 
  flex-direction: column; 
  justify-content: space-between; 
  box-sizing: border-box;
  overflow: hidden;
">
  <div class="cover-sky" style="padding: 15px; text-align: center; height: 25vh; background: transparent;"></div>

  <div class="cover-scene" style="
    flex-grow: 1; 
    display: flex; 
    align-items: flex-end; 
    justify-content: center; 
    position: relative;
    margin-bottom: -5px;
  ">
    <div style="position: absolute; bottom: 15%; left: 50%; transform: translateX(-50%); width: 100%; max-width: 280px; text-align: center; z-index: 10;">
      <button class="btn-mulai-baca" onclick="changePage(1)" style="
        background: linear-gradient(135deg, #FF9800, #F57F17);
        color: white; 
        border: 3px solid #FFFFFF; 
        padding: 14px 40px; 
        border-radius: 30px;
        font-family: 'Fredoka One', cursive; 
        font-size: 18px; 
        font-weight: bold; 
        cursor: pointer;
        letter-spacing: 1px;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        width: 85%;
        outline: none;
      ">MULAI BACA ➔</button>
    </div>
  </div>

  <div class="cover-footer" style="
    background: rgba(255,255,255,0.75); 
    backdrop-filter: blur(4px); 
    -webkit-backdrop-filter: blur(4px);
    color: #5D4037; 
    font-weight: bold; 
    text-align: center; 
    padding: 12px 10px; 
    font-size: 11px; 
    line-height: 1.4;
    z-index: 11;
  ">
    Mengenal Kearifan Lokal Semanding &nbsp;|&nbsp; Penulis: Siti Nurhalimah &nbsp;|&nbsp; Mata Pelajaran: IPAS &nbsp;|&nbsp; Kelas IV/SD &nbsp;|&nbsp; 2026
  </div>
</div>`;
}
