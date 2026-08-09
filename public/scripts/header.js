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

const header = document.getElementById('site-header');
let updateFrame = 0;

function updateScrollState() {
  updateFrame = 0;

  const scrollTop = window.scrollY;

  header?.classList.toggle('scrolled', scrollTop > 48);
}

function scheduleScrollUpdate() {
  if (!updateFrame) {
    updateFrame = window.requestAnimationFrame(updateScrollState);
  }
}

function syncAfterNavigation() {
  updateScrollState();
  window.requestAnimationFrame(scheduleScrollUpdate);
  window.setTimeout(scheduleScrollUpdate, 100);
}

window.addEventListener('scroll', scheduleScrollUpdate, { passive: true });
window.addEventListener('resize', scheduleScrollUpdate, { passive: true });
window.addEventListener('hashchange', syncAfterNavigation);
window.addEventListener('pageshow', syncAfterNavigation);
window.addEventListener('load', syncAfterNavigation, { once: true });

updateScrollState();
