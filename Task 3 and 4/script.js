/*
 * Parakram Basnet
 * this script is run upon the submission of the form in index.html and checks the password entered in the form
 */


//validateForm() is called upon the submission of the form in index.html
function validateForm() {

    // getting the password and h1 tag from the form
    var password = document.getElementById("password").value;
    var header = document.getElementById("header-validate");

    // checking if the password entered is valid
    if (password !== "12345678") {

        header.innerHTML = ""; // resetting the value if the header
        alert("The password is incorrect!"); // Sending an alert that the password entered is incorrect

    } else {
        header.innerHTML = "Your login information is valid." // called when the password entered is valid.
    }
}