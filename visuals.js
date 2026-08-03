(() => {
  const page = window.location.pathname.split('/').pop() || 'index.html';

  const dogSvg = (pose = 'sit', label = 'Minimalistische Illustration eines Australian Labradoodles') => {
    const props = {
      sit: '<path d="M145 106c16 2 28 13 32 28"/><path d="M75 121c-9 8-14 20-13 33"/>',
      sleep: '<path d="M52 120c28 16 73 18 111 4"/><path d="M154 91c16-6 27 0 33 12"/><text x="174" y="52">Z</text><text x="192" y="35">Z</text>',
      walk: '<path d="M68 122l-13 30M103 126l2 28M143 122l14 29M165 111l27 5"/>',
      brush: '<path d="M178 70l24-17M183 76l20 7"/><rect x="198" y="45" width="8" height="39" rx="3"/>',
      crate: '<path d="M33 37h169v118H33zM61 37v118M90 37v118M119 37v118M148 37v118M177 37v118"/>',
      food: '<path d="M160 134h48l-8 19h-32z"/><path d="M168 132c0-11 32-11 32 0"/>',
      toilet: '<path d="M174 124c9 2 16 9 16 18M184 120c10 2 18 10 18 20"/>',
      car: '<path d="M28 122h190l-14-35H72l-18 35zM77 87l14-25h64l22 25"/><circle cx="78" cy="130" r="13"/><circle cx="179" cy="130" r="13"/>'
    };

    return `
      <svg class="labradoodle-illustration" viewBox="0 0 240 170" role="img" aria-label="${label}">
        <g class="dog-lines" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
          <ellipse cx="118" cy="101" rx="53" ry="35" class="dog-body"/>
          <circle cx="83" cy="67" r="29" class="dog-head"/>
          <path d="M63 48c-13 1-21 13-20 29 14 1 24-6 29-18M97 47c12-1 22 10 23 25-13 3-24-3-30-15" class="dog-ears"/>
          <circle cx="74" cy="65" r="2.5" fill="currentColor" stroke="none"/>
          <circle cx="92" cy="65" r="2.5" fill="currentColor" stroke="none"/>
          <path d="M80 75c4 4 9 4 13 0M83 73l5-3 5 3"/>
          <path d="M143 87c19-13 35-5 40 10" class="dog-tail"/>
          <path d="M88 123l-5 31M126 128l5 27" class="dog-legs"/>
          <path d="M61 101c-10 1-18 8-22 17"/>
          ${props[pose] || props.sit}
        </g>
      </svg>`;
  };

  const addEmoji = (selector, emoji) => {
    document.querySelectorAll(selector).forEach((node) => {
      if (node.dataset.emojiApplied) return;
      node.dataset.emojiApplied = 'true';
      node.insertAdjacentHTML('afterbegin', `<span class="heading-emoji" aria-hidden="true">${emoji}</span>`);
    });
  };

  const poseByPage = {
    'tag-1.html': 'car',
    'tag-2.html': 'sleep',
    'tag-3.html': 'brush',
    'tag-4.html': 'walk',
    'woche-1.html': 'crate',
    'woche-2.html': 'sit',
    'woche-3.html': 'walk',
    'woche-4.html': 'food'
  };

  if (document.querySelector('.detail-hero')) {
    const hero = document.querySelector('.detail-hero');
    if (!hero.querySelector('.hero-illustration')) {
      const wrap = document.createElement('div');
      wrap.className = 'hero-illustration';
      wrap.innerHTML = dogSvg(poseByPage[page] || 'sit');
      hero.append(wrap);
    }

    addEmoji('.detail-main h2', '📍');
    document.querySelectorAll('.detail-main h2').forEach((heading) => {
      const text = heading.textContent.toLowerCase();
      const emoji = text.includes('warum') || text.includes('dahinter') ? '🤔' :
        text.includes('tun') || text.includes('schwerpunkt') || text.includes('plan') ? '✅' :
        text.includes('vermeiden') || text.includes('nicht') ? '❌' :
        text.includes('ziel') || text.includes('merke') ? '💡' :
        text.includes('labradoodle') ? '🐶' : '📍';
      const marker = heading.querySelector('.heading-emoji');
      if (marker) marker.textContent = emoji;
    });
  }

  if (page === 'index.html' || page === '') {
    addEmoji('#erste-vier-tage .chapter-heading h2', '🏠');
    addEmoji('#wochenplan .chapter-heading h2', '📅');
    addEmoji('#problemloser .chapter-heading h2', '🆘');
    addEmoji('#lexikon .chapter-heading h2', '📖');
    addEmoji('#checklisten .chapter-heading h2', '✅');

    const cardPoses = ['car', 'sleep', 'brush', 'walk'];
    document.querySelectorAll('#erste-vier-tage .content-card').forEach((card, index) => {
      if (card.querySelector('.card-illustration')) return;
      const art = document.createElement('div');
      art.className = 'card-illustration';
      art.innerHTML = dogSvg(cardPoses[index] || 'sit');
      card.prepend(art);
    });

    const weekPoses = ['crate', 'sit', 'walk', 'food'];
    document.querySelectorAll('#wochenplan .content-card').forEach((card, index) => {
      if (card.querySelector('.card-illustration')) return;
      const art = document.createElement('div');
      art.className = 'card-illustration';
      art.innerHTML = dogSvg(weekPoses[index] || 'sit');
      card.prepend(art);
    });

    const problemMap = [
      ['#crate', 'crate'], ['#beissen', 'sit'], ['#stubenreinheit', 'toilet']
    ];
    problemMap.forEach(([selector, pose]) => {
      const card = document.querySelector(selector);
      if (!card || card.querySelector('.problem-illustration')) return;
      const art = document.createElement('div');
      art.className = 'problem-illustration';
      art.innerHTML = dogSvg(pose);
      card.prepend(art);
    });
  }
})();
