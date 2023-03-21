//function for login- login for existing user.
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const fxhr = new FXMLHttpRequest()
    fxhr.open("GET", "usernames");
    fxhr.onload = (users) => {
        if (users[username] == password) {
            alert("welcome");
            localStorage.setItem("loggedInUser", username);
            showPage("Yummy");
            document.getElementById('helloUser').innerHTML = `שלום ${username}`;
            document.getElementById("logOut").style.visibility="visible";
        } 
        else {
            alert("wrong");
        }
    };
    fxhr.send();
}