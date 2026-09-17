const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');
const navlinks = document.querySelector('.navlinks');

if (nav && burger && navlinks) {
  const closeMenu = () => {
    nav.classList.remove('menu-open');
    burger.setAttribute('aria-expanded', 'false');
  };

  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  navlinks.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}
