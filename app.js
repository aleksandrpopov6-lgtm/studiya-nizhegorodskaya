/* ---------- Tab switching ---------- */
(function () {
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.panel');

  function activate(id) {
    tabs.forEach(t => t.classList.toggle('is-active', t.dataset.tab === id));
    panels.forEach(p => p.classList.toggle('is-active', p.id === id));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  tabs.forEach(t => t.addEventListener('click', () => activate(t.dataset.tab)));
  document.querySelectorAll('[data-goto]').forEach(b =>
    b.addEventListener('click', () => activate(b.dataset.goto))
  );
})();

/* ---------- Скачать PDF (печать всех вкладок) ---------- */
(function () {
  const btn = document.querySelector('[data-print]');
  if (btn) btn.addEventListener('click', () => window.print());
})();

/* ---------- Только светлая тема ---------- */
document.documentElement.setAttribute('data-theme', 'light');
