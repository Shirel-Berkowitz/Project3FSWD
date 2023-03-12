//change the parameters and 

class dbAPI{

    //default ctor
    constructor() {}
    
    //functions CRUD
    //create
    AddUser(username, pwd) {
        ////// USERS ITEM //////
        //casting to object that can be used
        let users = JSON.parse(localStorage.getItem("users"));
        if (users == null) {
            //if there is no users yet, create new "users" empty item.
            localStorage.setItem("users", JSON.stringify({}))
            users = JSON.parse(localStorage.getItem("users"));
        }

        // add the new user
        users[username] = pwd;

        // update the record in the local storage.
        localStorage.setItem("users", JSON.stringify(users))
    
    
        ////// SPECIFIC USER ITEM //////
        // create new item(record) for the new user and initialize the fileds.
        let user = {
            "username":username,
            "favoritesRec":[],
            //"Email":Email
        };

        // update the record in the local storage.
        LocalStorage.setItem(username, JSON.Stringify(user));
        return true;
    }

    //Add new recipe to the array
    addRecipe(username, newRecipe) {
        let user = JSON.parse(localStorage.getItem(username));
        user["favoritesRec"].push(newRecipe);

        localStorage.setItem(username, JSON.stringify(user));
        return true;
    }

    //read
    //Get the arrays of favorites recipes of user specific
    getFavoriteForUser(username) {
        let user = JSON.parse(localStorage.getItem(username));
        
        return user["favoritesRec"];
    }

    //Get list of users
    getUsersList() {
        let users = JSON.parse(localStorage.getItem("users"));
        return users;
    }

    //update
    updatePwd(username, newPassword){
        let users = this.getUsersList();
        users[username] = newPassword;
        localStorage.setItem("users", JSON.stringify(users));
        return true;
    }

    //delete
    //delete recipe
    deleteRecipe(username, recipe) {
        let user = JSON.parse(localStorage.getItem(JSON.stringify(username)));
        const index = user["favoritesRec"].indexOf(recipe);
        user["favoritesRec"].splice(index, 1);

        localStorage.setItem(username, JSON.stringify(user));
        return true;
    }

    //delete user
    deleteUser(username){
        let users= this.getUsersList();
        delete users[username];
        localStorage.setItem(users, JSON.stringify(users));
        localStorage.removeItem(username);

        return true;
    }

    
}