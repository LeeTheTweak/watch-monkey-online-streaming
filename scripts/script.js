
/** Getting the X icon in the header ad */
var clickableX = document.querySelector("#trialNotification h1");
// Getting the trial ad element
var trialAdEl = document.getElementById("trialNotification");
/** When user clicks on clickable X, remove the complete element */
function removeTrialAdClick() {
    $(trialAdEl).fadeOut();
    console.log("The X was clicked"); //Works
}
clickableX.addEventListener("click", removeTrialAdClick);


/*************************************************** */

/************************* Getting the button */
var startTrialButton = document.querySelector("#info button");

function animateButtonOnOver() {

    $(startTrialButton).animate({
        paddingLeft: "-=30",
        paddingRight: "-=30"
    }, 200);

    console.log("I was hovered"); //Testing out he function (Works)
}
function animateButtonOnOut() {
    $(startTrialButton).animate({
        paddingLeft: "+=30",
        paddingRight: "+=30"
    },200);
}
startTrialButton.addEventListener("mouseover", animateButtonOnOver);
startTrialButton.addEventListener("mouseout", animateButtonOnOut);
/** End of add functionality and animation to the start trial button */

/************************************************************************** */

/** Get the watch anywhere icons */
var watchIcons = document.querySelectorAll("#watchAnywhere img");
/** When User mouse overs a icon, shrink icon 1 */
function shrinkIcon1() {
    $(watchIcons).eq(0).animate({
        width: "80"
    }, 100);
    console.log("The home icon was mouse overed.");
}
// Grow back icon 1
function growBackIcon1() {
    $(watchIcons).eq(0).animate({
        width: "110"
    }, 100);
    console.log("The home icon was moused out.");
}

// Shrink icon 2
function shrinkIcon2() {
    $(watchIcons).eq(1).animate({
        width: "80"
    }, 100);
    console.log("The work icon was mouse overed.");
}
// Grow back icon 2
function growBackIcon2() {
    $(watchIcons).eq(1).animate({
        width: "110"
    }, 100);
    console.log("The home icon was moused out.");
}

// Shrink icon 3
function shrinkIcon3() {
    $(watchIcons).eq(2).animate({
        width: "80"
    }, 100);
    console.log("The on the go icon was mouse overed.");
}
// Grow back icon 3
function growBackIcon3() {
    $(watchIcons).eq(2).animate({
        width: "110"
    }, 100);
    console.log("The on the go icon was mouse overed.");
}
// Mousover Listeners
watchIcons[0].addEventListener("mouseover", shrinkIcon1);
watchIcons[1].addEventListener("mouseover", shrinkIcon2);
watchIcons[2].addEventListener("mouseover", shrinkIcon3);

// Mouseout Listeners
watchIcons[0].addEventListener("mouseout", growBackIcon1);
watchIcons[1].addEventListener("mouseout", growBackIcon2);
watchIcons[2].addEventListener("mouseout", growBackIcon3);

/**************************************************************** */