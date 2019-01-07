/*
 * Parakram Basnet
 * This script is run when the user hovers over the text
 */

// getting the ID of the text
let text = document.getElementById("hover-call");

// adding an event listener that check if the cursor is hovered over the text
text.addEventListener("mouseover", function () {

    alert("Hey, I told you not to hover over me!"); // sending an alert to the user 
});