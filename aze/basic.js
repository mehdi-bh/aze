var greeting = "hello, ";
var button = document.getElementById("mybutton");
button.person_name = "Bob";
button.addEventListener("click", () =>
        alert(greeting + button.person_name + ".")
    , false);