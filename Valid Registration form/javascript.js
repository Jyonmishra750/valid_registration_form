document.getElementById("t1").addEventListener("focusout", funt1);

function funt1() {
    var a = document.getElementById("t1").value;
    if (a == "") {
        document.getElementById("para1").innerHTML = "please enter your username here...!!";
        document.getElementById("para1").style.color = "red";
    } else {
        document.getElementById("para1").innerHTML = "valid username";
        document.getElementById("para1").style.color = "#00ff00";
    }

}

document.getElementById("t2").addEventListener("keydown", emailpart);

function emailpart() {
    var form = document.getElementById("form");
    var text = document.getElementById("para2");
    var email = document.getElementById("t2").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your email is correct";
        text.style.color = "#00ff00";
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Your email is incorrect";
        text.style.color = "#ff0000";
    }

    if (email == "") {
        text.innerHTML = "please enter your email";
        text.style.color = "#ff0000";
    }
}


document.getElementById("t3").addEventListener("keydown", password);

function password() {
    var pass = document.getElementById("t3").value;
    var text = document.getElementById("para3");

    if (pass.match(/[0-9]/)) {
        text.innerHTML = "valid password";
        text.style.color = "#00ff00";
        if (pass.match(/[A-Z]/)) {
            text.innerHTML = "valid password";
            text.style.color = "#00ff00";
            if (pass.match(/[a-z]/)) {
                text.innerHTML = "valid password";
                text.style.color = "#00ff00";
                if (pass.match(/[!\@\#\$\%\^\&\*\(\)\_\-\=\+\?\.\,]/)) {

                    if (pass.length < 8) {
                        text.style.color = "#ff0000";
                        text.innerHTML = "password must greater than 10 characters";
                    } else {
                        text.innerHTML = "valid password";
                        text.style.color = "#00ff00";
                    }
                } else {
                    text.innerHTML = "must have enter a symbol";
                    text.style.color = "#ff0000";
                }
            } else {
                text.innerHTML = "must have a lowercase,symbol";
                text.style.color = "#ff0000";
            }
        } else {
            text.innerHTML = "must have a uppercase,lowercase,symbol";
            text.style.color = "#ff0000";
        }

    } else {
        text.innerHTML = "must have number,Uppercase,lowercase,symbol";
        text.style.color = "#ff0000";
    }


}

document.getElementById("t4").addEventListener("keydown", passwordConfirm);

function passwordConfirm() {
    var pass1 = document.getElementById('t3');
    var pass2 = document.getElementById('t4');
    var text = document.getElementById("para4");

    if (pass1.value == pass2.value) {
        text.innerHTML = "confirm password";
        text.style.color = "#00ff00";
    } else {
        text.innerHTML = "password not match ";
        text.style.color = "#ff0000";
    }
}

document.getElementById("t5").addEventListener("keydown", number);

function number() {
    var text = document.getElementById("para5");
    var num = document.getElementById("t5").value;

    if (num > 1000000000) {
        if (num < 9999999999) {
            text.innerHTML = "valid number";
            text.style.color = "#00ff00";

        }
    } else {
        text.innerHTML = "Invalid";
        text.style.color = "#ff0000";
    }

}


document.getElementById("btn2").addEventListener("click", display);

function display() {
    var bl = "<br>";


    alert("Thank You For Registering");

}
