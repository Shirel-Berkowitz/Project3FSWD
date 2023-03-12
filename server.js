//change the parameters and 

class server{

    constructor(){
        this.dbAPI = new dbAPI();
    }

    //Request processing
    prossessRequest(data){
        var recivedData = JSON.parse(data);
        
        if(recivedData["d"]["method"] === 'GET'){
            if(recivedData["body"] == "usernames"){
                this.getUsersList();
            } 
            else if(recivedData["body"] == "tasks"){
                this.getFavoriteForUser();
            }
            else{
                this.getFavoriteForUser(recivedData["body"]);
                //
            }
        } 
        else if(recivedData["d"].method === 'POST' ){
            if (recivedData["body"].username) {
                this.AddUser(recivedData["body"].username, recivedData["body"].password);
            } 
            else {
                this.addRecipe(recivedData["body"].username, recivedData["body"].title, recivedData["body"].task);
            }
            
        } 
        else if(recivedData["d"].method === 'PUT'){
            this.updatePwd(recivedData["body"].username, recivedData["body"].title, recivedData["body"].new_content);
            
        }
        else if(recivedData["d"].method == 'DELETE'){
            this.deleteRecipe(recivedData["body"].username, recivedData["body"].title);
            
            //deleteUser
        }

        return true;
    }

    //create
    AddUser(username, pwd){
        //some logic on the data befor pass to DB.
        if(username.length <3)   
            return "Username must be 3 characters or more";
        else if(containsSpecialChars(username))
            return "Username can't be with special characters";
        //chack password
        else if (!isStrongPassword(pwd))
            return "Weak password!";
        else    
            this.dbAPI.add_username(username, pwd);
    }

    addRecipe(username, newRecipe) {
        //check if recipe is already in favorites
        //*************//



        this.dbAPI.addRecipe(username, newRecipe);
    }
     
    //read
    getFavoriteForUser(username) { 
        //check that array of favorite recepied isn't empty
        if(this.dbAPI.getFavoriteForUser(username).length == 0)
            return "No favorite recipes yet";
        return this.dbAPI.getFavoriteForUser(username);
    }

    getUsersList(){
        return this.dbAPI.getUsersList();
    }
   

    //update
    updatePwd(username, newPassword){
        //chack that new password is strong
        if (!isStrongPassword(pwd))
            return "Weak password!";
        return this.dbAPI.updatePwd(username, newPassword);
    }

    //delete
    deleteRecipe(username, recipe){
        //chack that recipe exists
        //**************//

        this.dbAPI.deleteRecipe(username, recipe);
    }

    deleteUser(username){
        //chack that user exists
        //**************//
        // Find the index of the user with the matching username
        let index = -1;
        let users = this.dbAPI.getUsersList();
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === username) {
                index = i;
                break;
            }
        }
          
        // If no matching user was found, return the original array
        if (index === -1) {
          return "User was not found";
        }  
        this.dbAPI.deleteUser(username);
    }
}


//check if the input includes special characters and if so - returns true, else return false
function containsSpecialChars(str) {
    const regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return regex.test(str);
}  

//check if function is strong enough (at least: 6 characters, 1 lowercase, 1 uppercase, 1 digit and a special characters)
function isStrongPassword(password) {
    // regular expressions for password requirements
    const minLengthRegex = /.{6,}/;
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[$-/:-?{-~!"^_`\[\]]/;
  
    // check password against requirements
    const hasMinLength = minLengthRegex.test(password);
    const hasLowercase = lowercaseRegex.test(password);
    const hasUppercase = uppercaseRegex.test(password);
    const hasNumber = numberRegex.test(password);
    const hasSpecialChar = specialCharRegex.test(password);
  
    // return true if all requirements are met
    return hasMinLength && hasLowercase && hasUppercase && hasNumber && hasSpecialChar;
}