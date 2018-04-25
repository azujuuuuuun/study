window.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenuBtn = document.getElementById('hamburger-menu-btn')
  hamburgerMenuBtn.addEventListener('click', function () {
    const globalNav = document.getElementById('global-nav')
    if (globalNav.className === 'global-nav') {
      globalNav.className = 'global-nav open'
    } else {
      globalNav.className = 'global-nav'
    }
  }, false)
}, false)
