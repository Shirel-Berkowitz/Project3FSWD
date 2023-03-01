function CreateUser() {
    //add new user
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
    email = document.getElementById('email').value;
    favoriteRecipes = [];
    
    let user = {
        'username': username,
        'password': password,
        'email': email,
        'favoriteRecipes': favoriteRecipes
    };

    let userLoggedIn = {
        "loggedIn": true,
        "username": enteredUsername = document.getElementById("username").value
    }   
    
    localStorage.setItem(username, JSON.stringify(user));
    localStorage.setItem("userLoggedIn", JSON.stringify(userLoggedIn));
    //window.location.replace("index.html");
    return false;
}

function AddFavoriteRecipes(id)
{
    // Get the logged-in user from localStorage
    let user = JSON.parse(localStorage.getItem("userLoggedIn"));
  
    // Check if a user is logged in
    if (user) {
        // Get the user object from localStorage using the username as the key
        let userObj = JSON.parse(localStorage.getItem(user.username));
        // Add the recipe ID to the user's favorite recipes array
        userObj.favoriteRecipes.push(id);
        // Save the updated user object to localStorage
        localStorage.setItem(user.username, JSON.stringify(userObj));
    }
} 

// Get all the favorite recipes of the logged-in user
function GetFavoriteRecipes() {
    // Get the logged-in user from localStorage
    let user = JSON.parse(localStorage.getItem("userLoggedIn"));
    // Check if a user is logged in
    if (user) {
      // Get the user object from localStorage using the username as the key
      let userObj = JSON.parse(localStorage.getItem(user.username));
      // Return the user's favorite recipes array
      return userObj.favoriteRecipes;
    }
  
    // If no user is logged in, return an empty array
    return [];
  }
  