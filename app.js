const menuButton = document.querySelector('#menuButton');
const chapterNav = document.querySelector('#chapterNav');
const searchInput = document.querySelector('#searchInput');
const searchStatus = document.querySelector('#searchStatus');
const searchableItems = [...document.querySelectorAll('.searchable, .content-card')];

menuButton?.addEventListener('click', () => {
  const isOpen = chapterNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

chapterNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    chapterNav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const normalize = (value) => value.toLocaleLowerCase('de-DE').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

function runSearch() {
  const query = normalize(searchInput.value.trim());
  let matches = 0;
  searchableItems.forEach((item) => item.classList.remove('search-hidden', 'search-match'));
  if (!query) { searchStatus.textContent = ''; return; }
  document.querySelectorAll('.content-card').forEach((card) => {
    const haystack = normalize(`${card.textContent} ${card.dataset.keywords ?? ''}`);
    const isMatch = haystack.includes(query);
    card.classList.toggle('search-hidden', !isMatch);
    card.classList.toggle('search-match', isMatch);
    if (isMatch) {
      matches += 1;
      const body = card.querySelector('.mobile-card-body');
      const button = card.querySelector('.mobile-expand-button');
      if (body && button) {
        body.hidden = false;
        button.setAttribute('aria-expanded', 'true');
        button.textContent = 'Weniger anzeigen';
      }
    }
  });
  document.querySelectorAll('.chapter').forEach((chapter) => {
    const visibleCards = chapter.querySelectorAll('.content-card:not(.search-hidden)');
    if (chapter.id !== 'checklisten') chapter.classList.toggle('search-hidden', visibleCards.length === 0);
  });
  searchStatus.textContent = matches === 1 ? '1 passender Abschnitt gefunden.' : `${matches} passende Abschnitte gefunden.`;
}
searchInput?.addEventListener('input', runSearch);

function checklistKey(checklist, index) { return `labradoodle-handbook-${checklist.dataset.checklist ?? index}`; }
function saveChecklist(checklist, index) {
  const state = [...checklist.querySelectorAll('input[type="checkbox"]')].map((checkbox) => checkbox.checked);
  try { window.localStorage.setItem(checklistKey(checklist, index), JSON.stringify(state)); } catch {}
}
function restoreChecklist(checklist, index) {
  try {
    const saved = JSON.parse(window.localStorage.getItem(checklistKey(checklist, index)) ?? '[]');
    checklist.querySelectorAll('input[type="checkbox"]').forEach((checkbox, checkboxIndex) => { checkbox.checked = Boolean(saved[checkboxIndex]); });
  } catch {}
}
document.querySelectorAll('.checklist').forEach((checklist, index) => {
  restoreChecklist(checklist, index);
  checklist.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => checkbox.addEventListener('change', () => saveChecklist(checklist, index)));
  checklist.querySelector('.reset-button')?.addEventListener('click', () => {
    checklist.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => { checkbox.checked = false; });
    saveChecklist(checklist, index);
  });
});

document.querySelectorAll('[data-detail-link]').forEach((card) => {
  card.classList.add('clickable-detail');
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'link');
  const target = card.dataset.detailLink;
  if (!card.querySelector('.detail-cta')) {
    const cta = document.createElement('span');
    cta.className = 'detail-cta';
    cta.textContent = 'Ausführlichen Abschnitt öffnen →';
    card.append(cta);
  }
  const open = () => { if (target) window.location.href = target; };
  card.addEventListener('click', (event) => { if (!event.target.closest('a,button,input,label')) open(); });
  card.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } });
});

const themeStyle = document.createElement('style');
themeStyle.textContent = `
#erste-vier-tage .content-card:nth-of-type(1){--card:#275d45;--soft:#d9eee3}
#erste-vier-tage .content-card:nth-of-type(2){--card:#367457;--soft:#e1f1e8}
#erste-vier-tage .content-card:nth-of-type(3){--card:#5d8e6f;--soft:#e8f3eb}
#erste-vier-tage .content-card:nth-of-type(4){--card:#81a98c;--soft:#edf5ef}
#wochenplan .content-card:nth-of-type(1){--card:#315f8c;--soft:#e1edf8}
#wochenplan .content-card:nth-of-type(2){--card:#b08324;--soft:#faf0ce}
#wochenplan .content-card:nth-of-type(3){--card:#bd642f;--soft:#f8e5da}
#wochenplan .content-card:nth-of-type(4){--card:#70538f;--soft:#eee6f6}
#erste-vier-tage .content-card,#wochenplan .content-card{border-top:7px solid var(--card);background:linear-gradient(145deg,var(--soft),#fff 58%);transition:transform .18s ease,box-shadow .18s ease}
#erste-vier-tage .content-card:hover,#wochenplan .content-card:hover{transform:translateY(-3px);box-shadow:0 18px 40px rgba(35,48,43,.12)}
#erste-vier-tage .content-card h3,#wochenplan .content-card h3,.detail-cta{color:var(--card)}
#problemloser .content-card{border-left:6px solid #a84343;background:linear-gradient(110deg,#f9e7e7,#fff 42%)}
.labradoodle-tip{border:1px solid #80cbc4!important;background:#e2f5f2!important}
.labradoodle-tip h3,.labradoodle-tip h2{color:#17665f}.labradoodle-tip h3::before,.labradoodle-tip h2::before{content:'🐶 '}
.chapter-heading{padding:1rem 1.25rem;border-radius:18px}
#erste-vier-tage .chapter-heading{background:#e8f3eb}
#wochenplan .chapter-heading{background:#e8eef7}
#problemloser .chapter-heading{background:#f8e8e8}
#lexikon .chapter-heading{background:#e2f5f2}
`;
document.head.append(themeStyle);

const path = window.location.pathname.split('/').pop();
const pageThemes = {
  'woche-1.html': ['#315f8c','#e1edf8'], 'woche-2.html': ['#b08324','#faf0ce'],
  'woche-3.html': ['#bd642f','#f8e5da'], 'woche-4.html': ['#70538f','#eee6f6']
};
if (pageThemes[path]) {
  document.documentElement.style.setProperty('--chapter', pageThemes[path][0]);
  document.documentElement.style.setProperty('--chapter-soft', pageThemes[path][1]);
}

if (path === 'index.html' || path === '') {
  const tipTargets = [
    ['#erste-vier-tage .content-card:nth-of-type(3)', 'Australian Labradoodles haben oft ein dichtes, schnell verfilzendes Fell. Zwei ruhige Bürstenstriche pro Tag sind am Anfang wertvoller als seltene lange Pflegesitzungen.'],
    ['#wochenplan .content-card:nth-of-type(2)', 'Viele Australian Labradoodles sind sehr menschenbezogen. Belohne deshalb nicht nur Nähe, sondern auch ruhiges Liegen, während du dich kurz im Raum bewegst.'],
    ['#problemloser #beissen', 'Labradoodles können in aufgeregten Phasen sehr körperlich spielen. Ein stark beißender Welpe ist häufig übermüdet und braucht weniger Reize, nicht mehr Action.']
  ];
  tipTargets.forEach(([selector, text]) => {
    const target = document.querySelector(selector);
    if (!target || target.querySelector('.labradoodle-tip')) return;
    const tip = document.createElement('aside');
    tip.className = 'callout labradoodle-tip';
    tip.innerHTML = `<strong>Australian-Labradoodle-Tipp:</strong> ${text}`;
    target.append(tip);
  });
}

function setupMobileCards() {
  const mobileQuery = window.matchMedia('(max-width: 640px)');
  if (!mobileQuery.matches) return;

  document.querySelectorAll('.content-card:not(.clickable-detail)').forEach((card, index) => {
    if (card.classList.contains('checklist') || card.querySelector('.mobile-card-body')) return;
    const heading = card.querySelector('h3');
    if (!heading) return;

    const movable = [...card.children].filter((child) => child !== heading);
    if (movable.length < 2) return;

    const body = document.createElement('div');
    body.className = 'mobile-card-body';
    body.id = `mobile-card-body-${index}`;
    movable.forEach((child) => body.append(child));
    body.hidden = true;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'mobile-expand-button';
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', body.id);
    button.textContent = 'Kurz ansehen';

    heading.insertAdjacentElement('afterend', button);
    button.insertAdjacentElement('afterend', body);

    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      body.hidden = expanded;
      button.textContent = expanded ? 'Kurz ansehen' : 'Weniger anzeigen';
    });
  });
}

setupMobileCards();
