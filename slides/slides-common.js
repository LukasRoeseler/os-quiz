// Shared engine for the MüCOS Open Science slide deck: cross-tab sync,
// small helpers, and a handful of stylized inline SVG figures.
window.MUCOS_SLIDES_COMMON = (function () {
  'use strict';

  const STORAGE_KEY = 'mucosSlideIndex';
  const CHANNEL_NAME = 'mucos-slides-channel';
  let channel = null;
  try {
    if (typeof BroadcastChannel !== 'undefined') channel = new BroadcastChannel(CHANNEL_NAME);
  } catch (e) { channel = null; }

  function getIndex(max) {
    const raw = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
    const i = isNaN(raw) ? 0 : raw;
    return Math.max(0, Math.min(max - 1, i));
  }

  function setIndex(i, max) {
    const clamped = Math.max(0, Math.min(max - 1, i));
    localStorage.setItem(STORAGE_KEY, String(clamped));
    if (channel) {
      try { channel.postMessage({ type: 'slide', index: clamped }); } catch (e) {}
    }
    return clamped;
  }

  function onIndexChange(cb) {
    window.addEventListener('storage', e => {
      if (e.key === STORAGE_KEY) cb();
    });
    if (channel) {
      channel.addEventListener('message', e => {
        if (e.data && e.data.type === 'slide') cb();
      });
    }
  }

  function formatElapsed(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  const FIGURES = {
    forschungszyklus: `
<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="fz-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="#1583ad"/>
    </marker>
  </defs>
  <g font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="700" fill="#2b333c" text-anchor="middle">
    <rect x="8" y="18" width="86" height="48" rx="8" fill="#f4f7f9" stroke="#1583ad" stroke-width="1.5"/>
    <text x="51" y="38"><tspan x="51" dy="0">Fragen &amp;</tspan><tspan x="51" dy="16">Planung</tspan></text>
    <rect x="106" y="18" width="86" height="48" rx="8" fill="#f4f7f9" stroke="#1583ad" stroke-width="1.5"/>
    <text x="149" y="38"><tspan x="149" dy="0">Materialien</tspan><tspan x="149" dy="16">&amp; Daten</tspan></text>
    <rect x="204" y="18" width="86" height="48" rx="8" fill="#f4f7f9" stroke="#1583ad" stroke-width="1.5"/>
    <text x="247" y="38"><tspan x="247" dy="0">Veroef-</tspan><tspan x="247" dy="16">fentlichung</tspan></text>
    <rect x="302" y="18" width="90" height="48" rx="8" fill="#f4f7f9" stroke="#1583ad" stroke-width="1.5"/>
    <text x="347" y="38"><tspan x="347" dy="0">Kommuni-</tspan><tspan x="347" dy="16">kation</tspan></text>
  </g>
  <path d="M94,42 L104,42" stroke="#1583ad" stroke-width="2" marker-end="url(#fz-arrow)"/>
  <path d="M192,42 L202,42" stroke="#1583ad" stroke-width="2" marker-end="url(#fz-arrow)"/>
  <path d="M290,42 L300,42" stroke="#1583ad" stroke-width="2" marker-end="url(#fz-arrow)"/>
  <path d="M347,66 C347,150 130,175 90,150 L90,175" fill="none" stroke="#1BA3D1" stroke-width="2" marker-end="url(#fz-arrow)"/>
  <text x="200" y="205" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="700" fill="#1583ad" text-anchor="middle">OPEN SCIENCE</text>
</svg>`,

    fiveschools: `
<svg viewBox="0 0 380 320" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#d9e0e6" stroke-width="1.5">
    <line x1="190" y1="160" x2="190" y2="60"/>
    <line x1="190" y1="160" x2="304" y2="123"/>
    <line x1="190" y1="160" x2="260" y2="257"/>
    <line x1="190" y1="160" x2="120" y2="257"/>
    <line x1="190" y1="160" x2="76" y2="123"/>
  </g>
  <circle cx="190" cy="160" r="48" fill="#1583ad"/>
  <text x="190" y="165" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="13" font-weight="700" fill="#ffffff">Open<tspan x="190" dy="15">Science</tspan></text>
  <g font-family="Arial, Helvetica, sans-serif" font-size="11.5" font-weight="700" fill="#2b333c" text-anchor="middle">
    <circle cx="190" cy="42" r="38" fill="#f4f7f9" stroke="#1BA3D1" stroke-width="1.5"/>
    <text x="190" y="46">Infrastruktur</text>
    <circle cx="304" cy="123" r="38" fill="#f4f7f9" stroke="#1BA3D1" stroke-width="1.5"/>
    <text x="304" y="127">Oeffentlich-<tspan x="304" dy="14">keit</tspan></text>
    <circle cx="260" cy="257" r="38" fill="#f4f7f9" stroke="#1BA3D1" stroke-width="1.5"/>
    <text x="260" y="261">Messbar-<tspan x="260" dy="14">keit</tspan></text>
    <circle cx="120" cy="257" r="38" fill="#f4f7f9" stroke="#1BA3D1" stroke-width="1.5"/>
    <text x="120" y="261">Demokratie</text>
    <circle cx="76" cy="123" r="38" fill="#f4f7f9" stroke="#1BA3D1" stroke-width="1.5"/>
    <text x="76" y="127">Pragma-<tspan x="76" dy="14">tismus</tspan></text>
  </g>
</svg>`,

    kano: `
<svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif">
  <line x1="30" y1="230" x2="360" y2="230" stroke="#2b333c" stroke-width="1.5"/>
  <line x1="30" y1="230" x2="30" y2="20" stroke="#2b333c" stroke-width="1.5"/>
  <text x="195" y="252" text-anchor="middle" font-size="12" fill="#6c7884">Erfuellungsgrad</text>
  <text x="14" y="125" text-anchor="middle" font-size="12" fill="#6c7884" transform="rotate(-90 14 125)">Zufriedenheit</text>
  <path d="M35,190 C 120,200 250,190 355,60" fill="none" stroke="#1583ad" stroke-width="2.5"/>
  <path d="M35,140 C 150,138 260,132 355,120" fill="none" stroke="#1BA3D1" stroke-width="2.5" stroke-dasharray="6 4"/>
  <circle cx="10" cy="60" r="5" fill="#1583ad"/>
  <text x="22" y="64" font-size="12" font-weight="700" fill="#1583ad">Luxusfaktor (z. B. Citizen Science)</text>
  <circle cx="10" cy="120" r="5" fill="#1BA3D1"/>
  <text x="22" y="124" font-size="12" font-weight="700" fill="#0f6f96">Hygienefaktor (z. B. Open Data)</text>
</svg>`,

    registeredreport: `
<svg viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="rr-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="#1583ad"/>
    </marker>
  </defs>
  <g font-family="Arial, Helvetica, sans-serif" font-size="11.5" font-weight="700" fill="#2b333c" text-anchor="middle">
    <rect x="6" y="20" width="88" height="54" rx="8" fill="#f4f7f9" stroke="#1583ad" stroke-width="1.5"/>
    <text x="50" y="42"><tspan x="50" dy="0">Stage 1:</tspan><tspan x="50" dy="14">Einreichung</tspan></text>
    <rect x="106" y="20" width="94" height="54" rx="8" fill="#f4f7f9" stroke="#1583ad" stroke-width="1.5"/>
    <text x="153" y="36"><tspan x="153" dy="0">In-principle</tspan><tspan x="153" dy="14">acceptance</tspan></text>
    <rect x="212" y="20" width="94" height="54" rx="8" fill="#f4f7f9" stroke="#1583ad" stroke-width="1.5"/>
    <text x="259" y="36"><tspan x="259" dy="0">Datenerhebung</tspan><tspan x="259" dy="14">nach Plan</tspan></text>
    <rect x="318" y="20" width="76" height="54" rx="8" fill="#f4f7f9" stroke="#1583ad" stroke-width="1.5"/>
    <text x="356" y="36"><tspan x="356" dy="0">Stage 2:</tspan><tspan x="356" dy="14">Pruefung</tspan></text>
  </g>
  <path d="M94,47 L104,47" stroke="#1583ad" stroke-width="2" marker-end="url(#rr-arrow)"/>
  <path d="M200,47 L210,47" stroke="#1583ad" stroke-width="2" marker-end="url(#rr-arrow)"/>
  <path d="M306,47 L316,47" stroke="#1583ad" stroke-width="2" marker-end="url(#rr-arrow)"/>
  <text x="200" y="105" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="12.5" font-weight="700" fill="#1583ad">Publikation zugesagt, unabhaengig vom Ergebnis</text>
</svg>`,

    openaccess: `
<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif">
  <g font-size="11" font-weight="700" text-anchor="middle">
    <rect x="0" y="20" width="80" height="34" fill="#9aa5ae"/>
    <text x="40" y="42" fill="#ffffff">Closed</text>
    <rect x="80" y="20" width="80" height="34" fill="#6c7884"/>
    <text x="120" y="42" fill="#ffffff">Hybrid</text>
    <rect x="160" y="20" width="80" height="34" fill="#1BA3D1"/>
    <text x="200" y="42" fill="#ffffff">Green</text>
    <rect x="240" y="20" width="80" height="34" fill="#1583ad"/>
    <text x="280" y="42" fill="#ffffff">Gold</text>
    <rect x="320" y="20" width="80" height="34" fill="#0f6f96"/>
    <text x="360" y="42" fill="#ffffff">Diamond</text>
  </g>
  <path d="M8,80 L392,80" stroke="#2b333c" stroke-width="1.5" marker-end="url(#oa-arrow)"/>
  <defs>
    <marker id="oa-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="#2b333c"/>
    </marker>
  </defs>
  <text x="8" y="100" font-size="11" fill="#6c7884">geschlossen</text>
  <text x="392" y="100" text-anchor="end" font-size="11" fill="#6c7884">offen, kostenfrei</text>
</svg>`,
  };

  return { getIndex, setIndex, onIndexChange, formatElapsed, FIGURES };
})();
