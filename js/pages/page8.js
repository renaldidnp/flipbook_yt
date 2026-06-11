// ============================================================
// PAGE 8 - LATIHAN SOAL (QUIZ)
// ============================================================
function page8() {
  let questionsHTML = "";

  for (let qi = 0; qi < quizData.length; qi++) {
    const q = quizData[qi];
    const optsHTML = q.opts
      .map(
        (opt, oi) => `
      <div class="quiz-opt" id="qo_${qi}_${oi}" onclick="answerQuiz(${qi},${oi})"
        style="
          padding: 8px 12px; margin-bottom: 5px; border-radius: 10px;
          border: 2px solid #FFCC80; background: rgba(255,255,255,0.5);
          font-size: 13px; cursor: pointer; font-weight: 600; color: #4E342E;
          transition: all 0.2s;
        ">
        ${String.fromCharCode(65 + oi)}. ${opt}
      </div>
    `,
      )
      .join("");

    questionsHTML += `
      <div style="margin-bottom: 16px; padding: 12px; background: rgba(255,255,255,0.3); border-radius: 14px; backdrop-filter: blur(6px);">
        <div style="font-size: 9px; font-weight: 800; color: #E65100; background: #FFF3E0; border: 1px solid #FF9800; padding: 2px 8px; border-radius: 20px; display: inline-block; margin-bottom: 6px;">Soal ${qi + 1}</div>
        <div style="font-size: 13px; font-weight: 800; color: #BF360C; margin-bottom: 8px; line-height: 1.4;">${q.q}</div>
        ${optsHTML}
        <div class="fb-box" id="qf_${qi}" style="display:none; margin-top: 6px; padding: 7px 10px; border-radius: 8px; font-size: 12px; font-weight: bold;"></div>
      </div>
    `;
  }

  return `
<div class="inner-page" style="background:linear-gradient(160deg,#FFF3E0,#FFE0B2); min-height: 100vh; display: flex; flex-direction: column; justify-content: space-between;">

  <div class="inner-topbar" style="background:linear-gradient(135deg,#E65100,#BF360C); display: flex; justify-content: space-between; align-items: center; padding: 12px 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.15);">
    <button onclick="changePage(-1)" style="background: #FF9800; color: white; border: none; padding: 10px 16px; border-radius: 20px; font-weight: bold; font-size: 14px; cursor: pointer;">◀ Kembali</button>
    <div style="color: white; font-family: 'Fredoka One', cursive; font-size: 16px; text-align: center; flex: 1; margin: 0 10px;">✏️ Latihan Soal</div>
    <button onclick="changePage(1)" style="background: #FF9800; color: white; border: none; padding: 10px 16px; border-radius: 20px; font-weight: bold; font-size: 14px; cursor: pointer;">Lanjut ▶</button>
  </div>

  <div class="inner-body" style="padding: 15px; max-width: 500px; margin: 0 auto; width: 100%; box-sizing: border-box;">

    <div style="
      text-align: center; padding: 12px;
      background: rgba(255,255,255,0.3); backdrop-filter: blur(8px);
      border-radius: 14px; margin-bottom: 15px; border: 2px dashed #FFAB40;
    ">
      <div style="font-size: 28px; margin-bottom: 4px;">🎯</div>
      <div style="font-family: 'Fredoka One', cursive; font-size: 16px; color: #BF360C;">Ayo Uji Pemahamanmu!</div>
      <div style="font-size: 12px; color: #5D4037; margin-top: 4px;">Pilih jawaban yang menurutmu benar. Jangan menyerah ya! 💪</div>
    </div>

    ${questionsHTML}

  </div>

  <div class="pg-footer" style="background: rgba(255,255,255,0.25); backdrop-filter: blur(4px); color: #5D4037; font-weight: 700; text-align: center; padding: 10px; font-size: 12px;">
    📖 Halaman 8 dari 10
  </div>
</div>`;
}
