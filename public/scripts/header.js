const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('nav-menu');
const backdrop = document.getElementById('nav-backdrop');

function openMenu() {
  toggle?.setAttribute('aria-expanded', 'true');
  menu?.classList.add('open');
  backdrop?.classList.add('open');
}

function closeMenu() {
  toggle?.setAttribute('aria-expanded', 'false');
  menu?.classList.remove('open');
  backdrop?.classList.remove('open');
}

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  backdrop?.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

// Sticky header shadow on scroll
const header = document.getElementById('site-header');
if (header && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      header.classList.toggle('scrolled', !entry.isIntersecting);
    },
    { threshold: 1.0 }
  );

  const sentinel = document.createElement('div');
  sentinel.style.height = '1px';
  sentinel.style.position = 'absolute';
  sentinel.style.top = '0';
  document.body.prepend(sentinel);
  observer.observe(sentinel);
}
