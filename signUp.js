// function addData() {
//     //add user here
//     username = document.getElementById('username').value;
//     password = document.getElementById('password').value;
//     email = document.getElementById('email').value;
   

//     let user = {
//         'username': username,
//         'password': password,
//         'email': email,
        
//     };

//     let userLoggedIn = {
//         "loggedIn": true,
//         "username": enteredUsername = document.getElementById("username").value
//     }   
    
//     localStorage.setItem(username, JSON.stringify(user));
//     localStorage.setItem("userLoggedIn", JSON.stringify(userLoggedIn));
//     window.location.replace("index.html");
//     return false;
// }

function register() {
    const fxhr = new FXMLHttpRequest()

    const name = document.getElementById("username").value
    const pass = document.getElementById("password").value

    fxhr.open("POST", "signUp");
    fxhr.onload= () => { console.log("registration succeed") };
    fxhr.send({ "username": name, "password": pass });
    showPage("Yummy");
}