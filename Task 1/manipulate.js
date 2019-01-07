/*
 * Parakram Basnet
 * This script is run when either buttons of the html page are clicke on and they manipulate text on index.html
 */

var text = document.getElementById("being-manipulated"); // getting id of the manipulated text

// called for the button on the right
document.getElementById("button-right").addEventListener("click", function () {

    // changing value of the text
    text.innerHTML = "I'm right!!";

    //setting the flexbox order to change its position
    document.getElementById("blank-space-placeholder").order = "1";
    text.style.order = "2";

    // padding to match the position of the buttons
    text.style.paddingRight = "0px";
    text.style.paddingLeft = "60px";
});

//called for the button on the left
document.getElementById("button-left").addEventListener("click", function () {

    // changing value of the text
    text.innerHTML = "No, I'm right!!";

    // changing the order of the flexbox elements
    document.getElementById("blank-space-placeholder").order = "2";
    text.style.order = "1";

    // Adding extra padding to match the position of the buttons.
    text.style.paddingRight = "60px";
    text.style.paddingLeft = "0px";
});