function showNav() {
    var x = document.getElementById("nav-container");
    if (x.className === "container") {
        x.className += " responsive";
    } else {
        x.className = "container";
    }
}

function hideNav() {
    var element = document.getElementById("nav-container");
    element.classList.remove("responsive");
}
