const pages = {
  Yummy: document.getElementById('Yummy-template').content,
  Desserts: document.getElementById('Desserts-template').content,
  Saleds: document.getElementById('Saleds-template').content,
  MainCourses: document.getElementById('MainCourses-template').content,
  MyRecipes: document.getElementById('MyRecipes-template').content,
  SignIn: document.getElementById('SignIn-template').content,
  SignUp: document.getElementById('SignUp-template').content
};

function showPage(id) {
  const content = document.getElementById('content');
  content.innerHTML = '';
  const page = pages[id];
  content.appendChild(page.cloneNode(true));
  const pageElement = content.querySelector('.page');
  pageElement.classList.add('active');
}

function handleNavigation() {
  const hash = window.location.hash.substring(1);
  showPage(hash || 'Yummy');
}

window.addEventListener('hashchange', handleNavigation);

handleNavigation();