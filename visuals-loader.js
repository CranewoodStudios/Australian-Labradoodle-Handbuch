(() => {
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'visuals.css';
  document.head.append(css);

  const script = document.createElement('script');
  script.src = 'visuals.js';
  script.defer = true;
  document.head.append(script);

  const setupDetailLinks = () => {
    document.querySelectorAll('[data-href], [data-detail-link]').forEach((card) => {
      if (card.dataset.navigationReady === 'true') return;

      const target = card.dataset.href || card.dataset.detailLink;
      if (!target) return;

      card.dataset.navigationReady = 'true';
      card.classList.add('clickable-detail');
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'link');

      const openTarget = () => {
        window.location.href = target;
      };

      card.addEventListener('click', (event) => {
        if (!event.target.closest('a, button, input, label')) {
          openTarget();
        }
      });

      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openTarget();
        }
      });
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupDetailLinks);
  } else {
    setupDetailLinks();
  }
})();
