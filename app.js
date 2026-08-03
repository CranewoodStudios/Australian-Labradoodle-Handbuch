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
