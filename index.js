window.onscroll = function() {stickyFunction()};

var navbar = document.getElementById("navbarSticky");
var sticky = navbar.offsetTop;

function stickyFunction() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

var registerMD = document.getElementById("registerModal");

var btnRegister = document.getElementById("registerButton");

var span = document.getElementsByClassName("close")[0];

btnRegister.onclick = function() {
    registerMD.style.display = "inline";
}

span.onclick = function() {
    registerMD.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == registerMD) {
        registerMD.style.display = "none";
    }
}
