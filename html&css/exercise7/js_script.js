function myFunction() {
    var x = document.getElementById("nav-bar-menu");
    if (x.className === "main-menu") {
        x.className += " responsive";
    } else {
        x.className = "main-menu";
    }
}
