/*
 * Parakram Basnet
 * This script runs upon th submission of the form in index.html and calculate the volume of a sphere based on the radius entered by the user
 */

//calculateVolume() is called upon the submission of the form in index.html
function calculateVolume() {

    // getting radius from the html form
    var radius = document.getElementById("radius").value;

    // changing string into float for calculation  
    radius = parseFloat(radius);
    var volume = 0;

    // calculating the colume of the sphere
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Displaying the radius to the user
    document.getElementById("display-radius").innerHTML = "The radius is: " + volume;

}