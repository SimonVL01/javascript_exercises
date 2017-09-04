var first = document.getElementById("firstname");
var last = document.getElementById("lastname");
var age = document.getElementById("age");

var textblock = document.getElementById("textblock");
var txt = document.getElementById("userProfileButton");

txt.addEventListener("click", userFinder);

window.addEventListener("load", function() {
    if (localStorage.userprofile !== null) {
        var userProfile = JSON.parse(localStorage.userprofile);
        textblock.innerHTML = "<h1>Welcome back, " + buildname(userProfile) + "</h1>";
    } else {
        textblock.innerHTML = "<h1>Unknown user</h1>";
    }
});

function userFinder() {
    var userProfile = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        age: document.getElementById("age").value
    };

    localStorage.userprofile = JSON.stringify(userProfile);
    textblock.innerHTML = "<h3>Thank you for your information." + " " + userProfile.firstname + " " + userProfile.lastname + " " + userProfile.age + "</h3>";
    first.value = "";
    last.value = "";
    age.value = "";
}

function buildname(user) {
    return user.firstname + " " + user.lastname + " " + user.age;
}