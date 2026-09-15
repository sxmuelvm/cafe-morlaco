// Café Morlaco — Menú: menú móvil + pestañas activas
(function () {
  var toggle = document.getElementById('navToggle');
  var closeBtn = document.getElementById('navClose');
  var links = document.getElementById('navLinks');

  if (toggle && links) {
    function closeMenu() {
      toggle.classList.remove('is-open');
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
    function openMenu() {
      toggle.classList.add('is-open');
      links.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
    function toggleMenu() {
      if (links.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    }
    toggle.addEventListener('click', toggleMenu);
    if (closeBtn) {
      closeBtn.addEventListener('click', closeMenu);
    }
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  var tabs = document.querySelectorAll('.menu-tabs a');
  var categories = document.querySelectorAll('.menu-category');

  if (!tabs.length || !categories.length || !('IntersectionObserver' in window)) return;

  var tabById = {};
  tabs.forEach(function (tab) {
    var id = tab.getAttribute('href').replace('#', '');
    tabById[id] = tab;
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          tabs.forEach(function (t) { t.classList.remove('active'); });
          var activeTab = tabById[entry.target.id];
          if (activeTab) activeTab.classList.add('active');
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  categories.forEach(function (cat) { observer.observe(cat); });
})();
