
/*--------------JS for toggle menu------------ */

var Menuitems = document.getElementById("Menu-items");

Menuitems.style.maxHeight = "0px";

function menutoggle() {

    if (Menuitems.style.maxHeight == "0px") {
        Menuitems.style.maxHeight = "200px"
    } else {
        Menuitems.style.maxHeight = "0px"

    }
}

/*--------------JS for toggle Form------------ */
var LoginForm = document.getElementById("LoginForm");
var RegisterForm = document.getElementById("RegisterForm");
var indicator = document.getElementById("Indicator");
function register() {

    RegisterForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}

function login() {

    RegisterForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}