document.addEventListener('DOMContentLoaded', () => {
  // get theme from localStorage
  const theme = localStorage.getItem('theme') || 'light';
  // set theme to body
  document.body.setAttribute('data-theme', theme);
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
    const toggleTheme = document.getElementById('toggleTheme');
    if (toggleTheme) {
        toggleTheme.addEventListener('click', () => {
          const body = document.body;
          const current = body.getAttribute('data-theme');
          const next = current === 'dark' ? 'light' : 'dark';
          body.setAttribute('data-theme', next);
          localStorage.setItem('theme', next);
          const icon = toggleTheme.querySelector('i');
          if(icon.innerHTML === 'dark_mode') {
            icon.innerHTML = 'light_mode';
          }
          else {
            icon.innerHTML = 'dark_mode';
          }
          
      });
    }
});