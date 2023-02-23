const pages = {
  Yummy: document.getElementById('Yummy-template').content.cloneNode(true),
  Desserts: document.getElementById('Desserts-template').content.cloneNode(true),
  Saleds: document.getElementById('Saleds-template').content.cloneNode(true)
};

function showPage(id) {
  const content = document.getElementById('content');
  content.innerHTML = '';
  const page = pages[id];
  content.appendChild(page);
  const pageElement = content.querySelector('.page');
  pageElement.classList.add('active');
}

function handleNavigation() {
  const hash = window.location.hash.substring(1);
  showPage(hash || 'home');
}

window.addEventListener('hashchange', handleNavigation);

handleNavigation();