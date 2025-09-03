/* Preferências de contraste e fonte com persistência */
(function(){
  const body = document.body;
  const btnContrast = document.getElementById('btn-contrast');
  const fontInc = document.getElementById('font-inc');
  const fontDec = document.getElementById('font-dec');
  const fontReset = document.getElementById('font-reset');
  const status = document.getElementById('status');
  const STORAGE_KEYS = {
    contrast: 'pref-contrast-high',
    font: 'pref-font-scale'
  };

  function setStatus(msg){
    if(!status) return;
    status.textContent = msg;
    // limpa mensagem após alguns segundos para não poluir leitores
    setTimeout(()=> status.textContent = '', 4000);
  }

  // Carregar preferências
  const savedContrast = localStorage.getItem(STORAGE_KEYS.contrast) === 'true';
  const savedFont = localStorage.getItem(STORAGE_KEYS.font);
  if(savedContrast){ body.classList.add('high-contrast'); btnContrast.setAttribute('aria-pressed','true'); }
  if(savedFont){ document.documentElement.style.setProperty('--font-scale', savedFont); }

  // Botão de contraste
  btnContrast?.addEventListener('click', ()=>{
    const active = body.classList.toggle('high-contrast');
    btnContrast.setAttribute('aria-pressed', String(active));
    localStorage.setItem(STORAGE_KEYS.contrast, String(active));
    setStatus(active ? 'Tema de alto contraste ativado' : 'Tema de alto contraste desativado');
  });

  // Ajuste de fonte
  function currentScale(){
    const v = getComputedStyle(document.documentElement).getPropertyValue('--font-scale').trim();
    return parseFloat(v.replace('%','')) || 100;
  }
  fontInc?.addEventListener('click', ()=>{
    const n = Math.min(currentScale()+10, 180);
    document.documentElement.style.setProperty('--font-scale', n + '%');
    localStorage.setItem(STORAGE_KEYS.font, n + '%');
    setStatus('Fonte aumentada para ' + n + '%');
  });
  fontDec?.addEventListener('click', ()=>{
    const n = Math.max(currentScale()-10, 80);
    document.documentElement.style.setProperty('--font-scale', n + '%');
    localStorage.setItem(STORAGE_KEYS.font, n + '%');
    setStatus('Fonte reduzida para ' + n + '%');
  });
  fontReset?.addEventListener('click', ()=>{
    document.documentElement.style.setProperty('--font-scale', '100%');
    localStorage.setItem(STORAGE_KEYS.font, '100%');
    setStatus('Fonte resetada');
  });

  // Respeitar usuários com redução de movimento
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  if(media.matches){
    document.documentElement.style.setProperty('scroll-behavior', 'auto');
  }

  // Foco no main ao usar o skip-link
  const main = document.getElementById('conteudo');
  document.querySelector('.skip-link')?.addEventListener('click', ()=>{
    main?.focus();
  });
})();