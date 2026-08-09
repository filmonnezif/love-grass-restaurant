let cleanupHeader = null;

document.addEventListener('astro:page-load', () => {
  if (cleanupHeader) cleanupHeader();

  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  const backdrop = document.getElementById('nav-backdrop');
  const header = document.getElementById('site-header');

  function openMenu() {
    toggle?.setAttribute('aria-expanded', 'true');
    menu?.classList.add('open');
    backdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    toggle?.setAttribute('aria-expanded', 'false');
    menu?.classList.remove('open');
    backdrop?.classList.remove('open');
    document.body.style.overflow = '';
  }

  const handleToggle = () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  };

  const handleKeydown = (event) => {
    if (event.key === 'Escape') closeMenu();
  };

  if (toggle && menu) {
    toggle.addEventListener('click', handleToggle);
    backdrop?.addEventListener('click', closeMenu);
    document.addEventListener('keydown', handleKeydown);

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }

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

  // Initial setup
  syncAfterNavigation();

  cleanupHeader = () => {
    if (toggle && menu) {
      toggle.removeEventListener('click', handleToggle);
      backdrop?.removeEventListener('click', closeMenu);
      document.removeEventListener('keydown', handleKeydown);
      menu.querySelectorAll('a').forEach((link) => {
        link.removeEventListener('click', closeMenu);
      });
    }
    window.removeEventListener('scroll', scheduleScrollUpdate);
    window.removeEventListener('resize', scheduleScrollUpdate);
    window.removeEventListener('hashchange', syncAfterNavigation);
    window.removeEventListener('pageshow', syncAfterNavigation);
  };
});

document.addEventListener('astro:before-swap', () => {
  if (cleanupHeader) {
    cleanupHeader();
    cleanupHeader = null;
  }
});
