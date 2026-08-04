(() => {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  const asset = (name) => `assets/illustrations/${name}.png`;

  const puppyImage = (name, label) =>
    `<img class="labradoodle-illustration" src="${asset(name)}" alt="${label}" loading="lazy" decoding="async">`;

  const addEmoji = (selector, emoji) => {
    document.querySelectorAll(selector).forEach((node) => {
      if (node.dataset.emojiApplied) return;
      node.dataset.emojiApplied = 'true';
      node.insertAdjacentHTML('afterbegin', `<span class="heading-emoji" aria-hidden="true">${emoji}</span>`);
    });
  };

  const pageImages = {
    'tag-1.html': ['ankommen', 'Australian-Labradoodle-Welpe beim Ankommen'],
    'tag-2.html': ['schlafen', 'Schlafender Australian-Labradoodle-Welpe'],
    'tag-3.html': ['buersten', 'Australian-Labradoodle-Welpe beim Bürsten'],
    'tag-4.html': ['spaziergang', 'Australian-Labradoodle-Welpe beim Spaziergang'],
    'woche-1.html': ['crate', 'Australian-Labradoodle-Welpe in seiner Crate'],
    'woche-2.html': ['training', 'Australian-Labradoodle-Welpe beim Training'],
    'woche-3.html': ['autofahrt', 'Australian-Labradoodle-Welpe bei einer Autofahrt'],
    'woche-4.html': ['spielen', 'Spielender Australian-Labradoodle-Welpe'],
    'szenarien.html': ['training', 'Australian-Labradoodle-Welpe bei einer kleinschrittigen Übung'],
    'gewicht.html': ['fressen', 'Australian-Labradoodle-Welpe beim Fressen'],
    'quellen.html': ['tierarzt', 'Australian-Labradoodle-Welpe bei einer ruhigen Untersuchung']
  };

  if (document.querySelector('.detail-hero')) {
    const hero = document.querySelector('.detail-hero');
    const [name, label] = pageImages[page] || ['ankommen', 'Australian-Labradoodle-Welpe'];
    if (!hero.querySelector('.hero-illustration')) {
      const wrap = document.createElement('div');
      wrap.className = 'hero-illustration';
      wrap.innerHTML = puppyImage(name, label);
      hero.append(wrap);
    }

    document.querySelectorAll('.detail-main h2').forEach((heading) => {
      if (heading.dataset.emojiApplied) return;
      const text = heading.textContent.toLowerCase();
      const emoji = text.includes('warum') || text.includes('dahinter') ? '🤔' :
        text.includes('tun') || text.includes('schwerpunkt') || text.includes('plan') || text.includes('üben') ? '✅' :
        text.includes('vermeiden') || text.includes('nicht') ? '❌' :
        text.includes('ziel') || text.includes('merke') || text.includes('orientierung') ? '💡' :
        text.includes('labradoodle') ? '🐶' : '📍';
      heading.dataset.emojiApplied = 'true';
      heading.insertAdjacentHTML('afterbegin', `<span class="heading-emoji" aria-hidden="true">${emoji}</span>`);
    });
  }

  if (page === 'index.html' || page === '') {
    addEmoji('#erste-vier-tage .chapter-heading h2', '🏠');
    addEmoji('#wochenplan .chapter-heading h2', '📅');
    addEmoji('#problemloser .chapter-heading h2', '🆘');
    addEmoji('#lexikon .chapter-heading h2', '📖');
    addEmoji('#checklisten .chapter-heading h2', '✅');

    const dayImages = [
      ['ankommen', 'Welpe beim Ankommen'],
      ['schlafen', 'Schlafender Welpe'],
      ['buersten', 'Welpe beim Bürsten'],
      ['spaziergang', 'Welpe beim Spaziergang']
    ];
    document.querySelectorAll('#erste-vier-tage .content-card').forEach((card, index) => {
      if (!card.querySelector('.card-illustration')) {
        const [name, label] = dayImages[index] || dayImages[0];
        const art = document.createElement('div');
        art.className = 'card-illustration';
        art.innerHTML = puppyImage(name, label);
        card.prepend(art);
      }
    });

    const weekImages = [
      ['crate', 'Welpe in seiner Crate'],
      ['training', 'Welpe beim Training'],
      ['autofahrt', 'Welpe bei einer Autofahrt'],
      ['spielen', 'Spielender Welpe']
    ];
    document.querySelectorAll('#wochenplan .content-card').forEach((card, index) => {
      if (!card.querySelector('.card-illustration')) {
        const [name, label] = weekImages[index] || weekImages[0];
        const art = document.createElement('div');
        art.className = 'card-illustration';
        art.innerHTML = puppyImage(name, label);
        card.prepend(art);
      }
    });

    const problemImages = [
      ['#crate', 'crate', 'Welpe in der Crate'],
      ['#beissen', 'beissen', 'Welpe mit Kauspielzeug'],
      ['#stubenreinheit', 'stubenreinheit', 'Welpe beim Stubenreinheitstraining']
    ];
    problemImages.forEach(([selector, name, label]) => {
      const card = document.querySelector(selector);
      if (!card || card.querySelector('.problem-illustration')) return;
      const art = document.createElement('div');
      art.className = 'problem-illustration';
      art.innerHTML = puppyImage(name, label);
      card.prepend(art);
    });

    // Robuste Navigation ohne Abhängigkeit von der älteren Klicklogik.
    document.querySelectorAll('#erste-vier-tage [data-href], #wochenplan [data-href]').forEach((card) => {
      const href = card.getAttribute('data-href');
      if (!href || card.querySelector('.full-card-link')) return;

      card.style.position = 'relative';
      const link = document.createElement('a');
      link.className = 'full-card-link';
      link.href = href;
      link.setAttribute('aria-label', `${card.querySelector('h3')?.textContent || 'Detailseite'} öffnen`);
      link.style.position = 'absolute';
      link.style.inset = '0';
      link.style.zIndex = '20';
      link.style.borderRadius = 'inherit';
      link.style.textDecoration = 'none';
      link.style.color = 'inherit';
      card.append(link);
    });
  }
})();
