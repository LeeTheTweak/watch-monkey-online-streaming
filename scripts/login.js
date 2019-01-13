
// Getting the login box
var loginBox = document.getElementById("formContainer");
// Adding a glow function to the login box when mouse enters it
function glowBox() {
    loginBox.style.boxShadow = "1px 1px 20px #d19d58";
}
function stopBoxGlow() {
    loginBox.style.boxShadow = "none";
}
loginBox.addEventListener("mouseenter", glowBox, false);
loginBox.addEventListener("mouseleave", stopBoxGlow, false);

// Getting the log in with facebook button
var facebookBtn = document.querySelector("#facebookLogButton");
function fade() {
    $(facebookBtn).animate({
        opacity: "0.5"
    }, 200);
}
function fadeBack() {
    $(facebookBtn).animate({
        opacity: "1.0"
    }, 200);
}
facebookBtn.addEventListener("mouseenter", fade, false);
facebookBtn.addEventListener("mouseleave", fadeBack, false);

// Getting the login button
var loginBtn = document.querySelector("#logInButton");
function fadeLog() {
    $(loginBtn).animate({
        opacity: "0.5"
    }, 200);
}
function fadeBackLog() {
    $(loginBtn).animate({
        opacity: "1.0"
    }, 200);
}
loginBtn.addEventListener("mouseenter", fadeLog, false);
loginBtn.addEventListener("mouseleave", fadeBackLog, false);