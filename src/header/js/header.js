document.addEventListener('DOMContentLoaded', () => {
  /*
  document.querySelectorAll('.headder__menu > li > a').forEach(link => {
    const submenu = link.nextElementSibling;   // could be null

    if (submenu) {
      // remove all open classes from all megamenus
      document.querySelectorAll('.megamenu')
        .forEach(openSubmenu => openSubmenu.classList.remove('open'));
      link.addEventListener('click', e => {
        e.preventDefault();
        submenu.classList.toggle('open');
        // lock / unlock scroll depending on state
        document.body.classList.toggle('lock-scroll',
          submenu.classList.contains('open'));
      });
    }
  });
  */
  // #menuToggle button 
    const menuOpen = document.getElementById('menuOpen');
    if (menuOpen) {
        menuOpen.addEventListener('click', () => {
            const header = document.querySelector('.header__mobile');
            header.classList.add('open');
        });
    }
    const menuClose = document.getElementById('menuClose');
    if (menuClose) {
        menuClose.addEventListener('click', () => {
            const header = document.querySelector('.header__mobile');
            header.classList.remove('open');
        });
    }
});