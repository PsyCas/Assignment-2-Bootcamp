//validateForm() is called upon the submission of the form in index.html
function validateForm() {

    var password = document.getElementById("password").value;
    var header = document.getElementById("header-validate");

    // checking if the password entered is valid
    if (password !== "12345678") {
        header.innerHTML = "";
        alert("The password is incorrect!");
    } else {
        header.innerHTML = "Your login information is valid."
    }
}