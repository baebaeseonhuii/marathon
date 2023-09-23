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