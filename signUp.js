//function for new user 
function register() {
    const fxhr = new FXMLHttpRequest()

    const name = document.getElementById("username").value
    const pass = document.getElementById("password").value

    fxhr.open("POST", "signUp");
    fxhr.onload= () => { console.log("registration succeed") };
    fxhr.send({ "username": name, "password": pass });
    showPage("SignIn");
}