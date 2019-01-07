//calculateVolume() is called upon the submission of the form in index.html
function calculateVolume() {

    var radius = document.getElementById("radius").value;
    radius = parseFloat(radius);

    console.log(radius);
    console.log(typeof (radius));
    var volume = 0;

    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById("display-radius").innerHTML = "The radius is: " + volume;

}