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

function GetRecipeByID(id) {
  // Check if localStorage is available
  if (typeof(Storage) !== "undefined") {
    // Get existing recipes from localStorage
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    // Find the recipe with the matching ID
    let recipe = recipes.find(recipe => recipe.id === id);

    // Return the found recipe, or null if not found
    return recipe || null;
  } else {
    console.log("Sorry, your browser does not support web storage...");
  }
}
//example to use the GetRecipeByID function
/*
let recipeId = 1; // Replace with the ID of the recipe you want to find
let foundRecipe = findRecipeById(recipeId);
if (foundRecipe) {
  console.log("Found recipe:", foundRecipe);
} else {
  console.log("Recipe not found.");
}
*/

function GetRecipeByName(name) {
  // Check if localStorage is available
  if (typeof(Storage) !== "undefined") {
    // Get existing recipes from localStorage
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    // Find the recipe with the matching name
    let recipe = recipes.find(recipe => recipe.name === name);

    // Return the found recipe, or null if not found
    return recipe || null;
  } else {
    console.log("Sorry, your browser does not support web storage...");
  }
}

function CreateRecipe(name, ingredients) {
  // Check if localStorage is available
  if (typeof(Storage) !== "undefined") {
    // Get existing recipes from localStorage
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    // Generate a new ID for the recipe
    let newId = 1;
    if (recipes.length > 0) {
      // If there are existing recipes, find the highest ID and add 1
      let maxId = Math.max(...recipes.map(recipe => recipe.id));
      newId = maxId + 1;
    }
    // Create the new recipe object
    let newRecipe = { id: newId, name, ingredients };

    // Add the new recipe to the recipes array
    recipes.push(newRecipe);

    // Save the updated recipes array back to localStorage
    localStorage.setItem("recipes", JSON.stringify(recipes));
  } else {
    console.log("Sorry, your browser does not support web storage...");
  }
}
/*
example to create a new recipe:
let name = "Pasta with Tomato Sauce";
let ingredients = [
  { name: "pasta", amount: "250g" },
  { name: "tomatoes", amount: "4" },
  { name: "garlic", amount: "2 cloves" },
  { name: "olive oil", amount: "2 tbsp" },
  { name: "salt", amount: "to taste" },
  { name: "pepper", amount: "to taste" }
];
addRecipe(name, ingredients);
*/

function UpdateRecipe(id, name, ingredients) {
  // Check if localStorage is available
  if (typeof(Storage) !== "undefined") {
    // Get existing recipes from localStorage
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    // Find the index of the recipe with the matching ID
    let index = recipes.findIndex(recipe => recipe.id === id);

    if (index !== -1) {
      // Update the recipe with the new name and ingredients
      recipes[index].name = name;
      recipes[index].ingredients = ingredients;

      // Save the updated recipes array back to localStorage
      localStorage.setItem("recipes", JSON.stringify(recipes));
    } else {
      console.log("Recipe not found.");
    }
  } else {
    console.log("Sorry, your browser does not support web storage...");
  }
}

function DeleteRecipe(id) {
  // Check if localStorage is available
  if (typeof(Storage) !== "undefined") {
    // Get existing recipes from localStorage
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    // Find the index of the recipe with the matching ID
    let index = recipes.findIndex(recipe => recipe.id === id);

    if (index !== -1) {
      // Remove the recipe from the recipes array
      recipes.splice(index, 1);

      // Save the updated recipes array back to localStorage
      localStorage.setItem("recipes", JSON.stringify(recipes));
    } else {
      console.log("Recipe not found.");
    }
  } else {
    console.log("Sorry, your browser does not support web storage...");
  }
}




window.addEventListener('hashchange', handleNavigation);

handleNavigation();