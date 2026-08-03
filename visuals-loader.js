(() => {
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'visuals.css';
  document.head.append(css);

  const script = document.createElement('script');
  script.src = 'visuals.js';
  script.defer = true;
  document.head.append(script);
})();
