const navToggle = document.querySelector('#navToggle');
const siteNav = document.querySelector('#siteNav');
const navOverlay = document.querySelector('#navOverlay');

function openNav() {
  siteNav.classList.add('open');
  navOverlay.classList.add('visible');
  navToggle.setAttribute('aria-expanded', 'true');
}
function closeNav() {
  siteNav.classList.remove('open');
  navOverlay.classList.remove('visible');
  navToggle.setAttribute('aria-expanded', 'false');
}
navToggle?.addEventListener('click', () => {
  siteNav.classList.contains('open') ? closeNav() : openNav();
});
navOverlay?.addEventListener('click', closeNav);
siteNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => { if (window.innerWidth <= 820) closeNav(); });
});

// Mark current page
const currentFile = location.pathname.split('/').pop() || 'index.html';
siteNav?.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  const linkFile = href.split('#')[0].split('/').pop();
  if (linkFile === currentFile && !href.includes('#')) {
    link.setAttribute('aria-current', 'page');
  }
});

// Global search across all pages
const searchInput = document.querySelector('#globalSearch');
const searchResults = document.querySelector('#globalSearchResults');

const INDEX = [
  { t: 'Tag 1 · Ankommen', u: 'tag-1.html', k: 'tag 1 ankunft heimfahrt erste nacht toilette losen sicher ruhig' },
  { t: 'Tag 2 · Rhythmus finden', u: 'tag-2.html', k: 'tag 2 routine schlaf futter losen pipi nachts mudigkeit' },
  { t: 'Tag 3 · Erste Mini-Übungen', u: 'tag-3.html', k: 'tag 3 bursten name anfassen pfoten ohren besucher ubungen' },
  { t: 'Tag 4 · Alltag erweitern', u: 'tag-4.html', k: 'tag 4 alltag leine auto geschirr erkunden' },
  { t: 'Woche 1 · Vertrauen aufbauen', u: 'woche-1.html', k: 'woche 1 sicherheit routine crate schlaf trennung vertrauen' },
  { t: 'Woche 2 · Die Welt entdecken', u: 'woche-2.html', k: 'woche 2 lernen ruckruf bursten trennung wohnung' },
  { t: 'Woche 3 · Gemeinsam lernen', u: 'woche-3.html', k: 'woche 3 mini abwesenheit drausen leine sozialisation' },
  { t: 'Woche 4 · Alltag festigen', u: 'woche-4.html', k: 'woche 4 alltag ruhe besucher impulskontrolle besuch' },
  { t: 'Crate', u: 'szenarien.html#crate-sofort', k: 'crate box jault jammert weint angst geschlossen gitter morgen' },
  { t: 'Stubenrein', u: 'szenarien.html#draussen-kein-pipi', k: 'stubenrein pipi drausen drinnen toilette unfall' },
  { t: 'Fütterung', u: 'szenarien.html#frisst-nicht', k: 'futterung frisst nicht mahlzeit appetit hunger' },
  { t: 'Gewicht und Wachstum', u: 'gewicht.html', k: 'gewicht wachstum miniature medium standard bcs rippen taille' },
  { t: 'Geschirr', u: 'szenarien.html#geschirr', k: 'geschirr harness anziehen kopf bauch brust gurt' },
  { t: 'Bürsten', u: 'szenarien.html#buersten', k: 'bursten kamm fell pflege achseln ohren filz' },
  { t: 'Autofahren', u: 'szenarien.html#auto', k: 'auto autofahren fahrt ubelkeit hecheln transportbox' },
  { t: 'Besucher', u: 'szenarien.html#besuch', k: 'besucher besuch springen hochspringen aufregung' },
  { t: 'Kinder', u: 'kinder.html', k: 'kinder kind sicher zusammen kontakt' },
  { t: 'Alleinbleiben', u: 'alleinbleiben.html', k: 'alleinbleiben allein trennung angst separation jammt' },
  { t: 'Beißen', u: 'beissen.html', k: 'beissen bellt zahn zahnen schnappen hande kleidung kauen' },
  { t: 'Spielen', u: 'spielen.html', k: 'spielen spiel spielzeug zeremonie toben wild' },
  { t: 'Schlafen', u: 'schlafen.html', k: 'schlafen schlaf mudigkeit ruhephase ubermudung nacht' },
  { t: 'Gesundheit', u: 'gesundheit.html', k: 'gesundheit krank symptome tierarzt' },
  { t: 'Tierarzt', u: 'gesundheit.html#tierarzt', k: 'tierarzt praxis impfung untersuchung' },
  { t: 'Erbrechen', u: 'gesundheit.html#erbrechen', k: 'erbrechen erbrochen spuckt ubelkeit kot' },
  { t: 'Durchfall', u: 'gesundheit.html#durchfall', k: 'durchfall dunnflussig kot blut darm' },
  { t: 'Leinenführigkeit', u: 'leinenfuehrigkeit.html', k: 'leine leinenfuhrigkeit zieht zerrt spaziergang' },
  { t: 'Rückruf', u: 'rueckruf.html', k: 'ruckruf komm hier kommt nicht zuruck' },
  { t: 'Alle Alltagssituationen', u: 'szenarien.html', k: 'problem hilfe sofort situation alltag szenario' },
  { t: 'Quellen und Methodik', u: 'quellen.html', k: 'quellen avsab wsava fear free methodik leitlinien' },
];

function norm(s) {
  return s.toLocaleLowerCase('de-DE').normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function attachSearch(input, results, resultClass) {
  if (!input || !results) return;
  input.addEventListener('input', () => {
    const q = norm(input.value.trim());
    results.innerHTML = '';
    if (!q) return;
    const hits = INDEX.filter(e => norm(`${e.t} ${e.k}`).includes(q)).slice(0, 7);
    if (!hits.length) {
      const p = document.createElement('p');
      p.className = resultClass === 'site-search-result' ? 'site-search-empty' : 'home-search-empty';
      p.textContent = 'Kein Ergebnis.';
      results.append(p);
      return;
    }
    hits.forEach(e => {
      const a = document.createElement('a');
      a.className = resultClass;
      a.href = e.u;
      a.textContent = e.t;
      results.append(a);
    });
  });
}

attachSearch(searchInput, searchResults, 'site-search-result');

const homeSearch = document.querySelector('#homeSearch');
const homeSearchResults = document.querySelector('#homeSearchResults');
attachSearch(homeSearch, homeSearchResults, 'home-search-result');

document.addEventListener('click', e => {
  if (homeSearch && homeSearchResults && !homeSearch.contains(e.target) && !homeSearchResults.contains(e.target)) {
    homeSearchResults.innerHTML = '';
  }
});
