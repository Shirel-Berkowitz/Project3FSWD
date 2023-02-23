const pages = {
  Yummy: document.getElementById('Yummy-template').content.cloneNode(true),
  Desserts: document.getElementById('Desserts-template').content.cloneNode(true),
  Saleds: document.getElementById('Saleds-template').content.cloneNode(true),
  MainCourses: document.getElementById('MainCourses-template').content.cloneNode(true),
  MyRecipes: document.getElementById('MyRecipes-template').content.cloneNode(true),
  SignIn: document.getElementById('SignIn-template').content.cloneNode(true),
  SignUp: document.getElementById('SignUp-template').content.cloneNode(true)
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
  showPage(hash || 'Yummy');
}

window.addEventListener('hashchange', handleNavigation);

handleNavigation();