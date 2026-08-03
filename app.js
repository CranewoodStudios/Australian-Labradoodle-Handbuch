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

const normalize = (value) => value
  .toLocaleLowerCase('de-DE')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');

function runSearch() {
  const query = normalize(searchInput.value.trim());
  let matches = 0;

  searchableItems.forEach((item) => {
    item.classList.remove('search-hidden', 'search-match');
  });

  if (!query) {
    searchStatus.textContent = '';
    return;
  }

  document.querySelectorAll('.content-card').forEach((card) => {
    const haystack = normalize(`${card.textContent} ${card.dataset.keywords ?? ''}`);
    const isMatch = haystack.includes(query);
    card.classList.toggle('search-hidden', !isMatch);
    card.classList.toggle('search-match', isMatch);
    if (isMatch) matches += 1;
  });

  document.querySelectorAll('.chapter').forEach((chapter) => {
    const visibleCards = chapter.querySelectorAll('.content-card:not(.search-hidden)');
    if (chapter.id !== 'checklisten') {
      chapter.classList.toggle('search-hidden', visibleCards.length === 0);
    }
  });

  searchStatus.textContent = matches === 1
    ? '1 passender Abschnitt gefunden.'
    : `${matches} passende Abschnitte gefunden.`;
}

searchInput?.addEventListener('input', runSearch);

function checklistKey(checklist, index) {
  return `labradoodle-handbook-${checklist.dataset.checklist ?? index}`;
}

function saveChecklist(checklist, index) {
  const state = [...checklist.querySelectorAll('input[type="checkbox"]')]
    .map((checkbox) => checkbox.checked);

  try {
    window.localStorage.setItem(checklistKey(checklist, index), JSON.stringify(state));
  } catch {
    // Die Checkliste funktioniert auch ohne dauerhafte Speicherung.
  }
}

function restoreChecklist(checklist, index) {
  try {
    const saved = JSON.parse(window.localStorage.getItem(checklistKey(checklist, index)) ?? '[]');
    checklist.querySelectorAll('input[type="checkbox"]').forEach((checkbox, checkboxIndex) => {
      checkbox.checked = Boolean(saved[checkboxIndex]);
    });
  } catch {
    // Ungültige oder nicht verfügbare Browser-Speicherung wird ignoriert.
  }
}

document.querySelectorAll('.checklist').forEach((checklist, index) => {
  restoreChecklist(checklist, index);

  checklist.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', () => saveChecklist(checklist, index));
  });

  checklist.querySelector('.reset-button')?.addEventListener('click', () => {
    checklist.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });
    saveChecklist(checklist, index);
  });
});

// Die Übersichten bleiben kompakt; jede Tages- und Wochenkarte führt zu einer ausführlichen Seite.
const detailStyles = document.createElement('link');
detailStyles.rel = 'stylesheet';
detailStyles.href = 'detail.css';
document.head.append(detailStyles);

const detailPages = new Map([
  ['Tag 1:', 'tag-1.html'],
  ['Tag 2:', 'tag-2.html'],
  ['Tag 3:', 'tag-3.html'],
  ['Tag 4:', 'tag-4.html'],
  ['Woche 1:', 'woche-1.html'],
  ['Woche 2:', 'woche-2.html'],
  ['Woche 3:', 'woche-3.html'],
  ['Woche 4:', 'woche-4.html']
]);

document.querySelectorAll('#erste-vier-tage .content-card, #wochenplan .content-card').forEach((card) => {
  const heading = card.querySelector('h3')?.textContent.trim() ?? '';
  const match = [...detailPages.entries()].find(([prefix]) => heading.startsWith(prefix));
  if (!match) return;

  const [, url] = match;
  card.classList.add('clickable-detail');
  card.setAttribute('role', 'link');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `${heading} ausführlich öffnen`);

  const cta = document.createElement('span');
  cta.className = 'detail-cta';
  cta.textContent = 'Ausführlichen Abschnitt öffnen →';
  card.append(cta);

  const openDetail = () => {
    window.location.href = url;
  };

  card.addEventListener('click', (event) => {
    if (event.target.closest('a, button, input, label')) return;
    openDetail();
  });

  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openDetail();
    }
  });
});
