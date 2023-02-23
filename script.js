const pages = document.querySelectorAll('.page');

function showPage(id) {
  pages.forEach(page => {
    if (page.id === id) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });
}

function handleNavigation() {
  const hash = window.location.hash.substring(1);
  showPage(hash || 'home');
}

window.addEventListener('hashchange', handleNavigation);

handleNavigation();