
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
watchIcons[0].addEventListener("mouseenter", shrinkIcon1);
watchIcons[1].addEventListener("mouseenter", shrinkIcon2);
watchIcons[2].addEventListener("mouseenter", shrinkIcon3);

// Mouseout Listeners
watchIcons[0].addEventListener("mouseleave", growBackIcon1);
watchIcons[1].addEventListener("mouseleave", growBackIcon2);
watchIcons[2].addEventListener("mouseleave", growBackIcon3);

/**************************************************************** */

/** Getting box 1 and box 2 containers. When user mouseenters
 * each of these boxes, they move up slightly. When user mouseleaves,
 * they move back down.
*/
var box = document.querySelectorAll(".box");

function moveUp1() {
    $(box).eq(0).animate({
        marginTop: "-10px",
    }, 200);
    box[0].style.boxShadow = "2px 20px 50px black";
}
function moveDown1() {
    $(box).eq(0).animate({
        marginTop: "0px"
    }, 200);
    box[0].style.boxShadow = "none";
}
box[0].addEventListener("mouseenter", moveUp1);
box[0].addEventListener("mouseleave", moveDown1)

function moveUp2() {
    $(box).eq(1).animate({
        marginTop: "-10px"
    }, 200);
    box[1].style.boxShadow = "2px 20px 50px black";
}
function moveDown2() {
    $(box).eq(1).animate({
        marginTop: "0px"
    }, 200);
    box[1].style.boxShadow = "none";
}
box[1].addEventListener("mouseenter", moveUp2);
box[1].addEventListener("mouseleave", moveDown2);

/** Moves the select plan button inside of box1 and box2 up and down when
 * user mouseenters and leaves.
 */

 // Getting the select buttons
var selectButtons = document.querySelectorAll(".selectPlanButton");
function moveSelect1Left() {
    $(selectButtons).eq(0).animate({
        marginLeft: "-15px"
    }, 200);
}
function moveSelect1Right() {
    $(selectButtons).eq(0).animate({
        marginLeft: "12px"
    }, 200);
}
selectButtons[0].addEventListener("mouseenter", moveSelect1Left);
selectButtons[0].addEventListener("mouseleave", moveSelect1Right);

function moveSelect2Right() {
    $(selectButtons).eq(1).animate({
        marginRight: "-15px"
    }, 200);
}
function moveSelect2Left() {
    $(selectButtons).eq(1).animate({
        marginRight: "12px"
    }, 200);
}
selectButtons[1].addEventListener("mouseenter", moveSelect2Right);
selectButtons[1].addEventListener("mouseleave", moveSelect2Left);