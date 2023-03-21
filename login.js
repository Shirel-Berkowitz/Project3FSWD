
// //check if the data from the SignUp is match
// function checkData() {
//     let flag = validateFildes();
//     if (flag == true) {
//         let userLoggedIn = {
//             "loggedIn": true,
//             "username": document.getElementById("username").value
//         }
//         localStorage.setItem("userLoggedIn", JSON.stringify(userLoggedIn));
//         return true;
//     } 
//     else {
//         alert("wrong username or password");
//         return false;
//     }
// }

// function validateFildes() {
//     enteredUsername = document.getElementById("username").value;
//     enteredPassword = document.getElementById("password").value;

//     let user = JSON.parse(localStorage.getItem(enteredUsername));

//     if (user != undefined) {
//         password = user['password'];
//         if (enteredPassword == password) {
//             return true;
//         }
//     }
//     return false;
// }


function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const fxhr = new FXMLHttpRequest()
    fxhr.open("GET", "usernames");
    fxhr.onload = (users) => {
        console.log(users[username]);
        if (users[username] == password) {
            alert("welcome");
            document.getElementById('helloUser').innerHTML = `שלום ${username}`;
            localStorage.setItem("loggedInUser", username);
            showPage("Yummy");
        } 
        else {
            alert("wrong");
        }
    };
    fxhr.send();
}