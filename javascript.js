function showNavBar() {
    let x = document.getElementById("topNav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}