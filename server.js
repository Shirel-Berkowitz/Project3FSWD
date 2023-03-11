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
            return "wrong username";
        else    
            this.dbAPI.add_username(username, pwd);
    }

    addRecipe(username, newRecipe) {
        this.dbAPI.addRecipe(username, newRecipe);
    }
     
    //read
    getFavoriteForUser(username) { 
        return this.dbAPI.getFavoriteForUser(username);
    }

    getUsersList(){
        return this.dbAPI.getUsersList();
    }
   

    //update
    updatePwd(username, newPassword){
        return this.dbAPI.updatePwd(username, newPassword);
    }

    //delete
    deleteRecipe(username, recipe){
        this.dbAPI.deleteRecipe(username, recipe);
    }

    deleteUser(username){
        this.dbAPI.deleteUser(username);
    }
}





