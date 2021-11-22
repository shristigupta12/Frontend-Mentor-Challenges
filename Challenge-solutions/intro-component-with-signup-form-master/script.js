//doubt
function onClickInput(){
    document.querySelectorAll("input").style.border = "2px groove hsl(246, 25%, 77%); "
}

function validateForm(){
    let returnVal = true

    var fName = document.forms['7DayTrailForm']["fname"].value;
    if(fName.length == 0){
        error("firstNameWrapper", "First Name cannot be empty");
        returnVal = false;
    }
    var lName = document.forms['7DayTrailForm']['lname'].value
    if(lName.length == 0){
        error("lastNameWrapper", "Last Name cannot be empty")
        returnVal = false;
    }
    var password = document.forms["7DayTrailForm"]["password"].value;
    if(password.length == 0){
        error("passwordWrapper", "Password cannot be empty");
        returnVal = false;
    }
    var email = document.forms["7DayTrailForm"]["email"].value;
    var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.match(validEmail)){
        error("emailWrapper", "Looks like this is not an email");
        returnVal = false;
    }
    if(returnVal == false){
        formWrapper = document.getElementsByClassName("formWrapper");
        formWrapper[0].style.height = "600";
    }
    return returnVal
}
function error(id, errorText){
    input = document.getElementById(id)
   input.getElementsByClassName("error")[0].innerHTML = errorText
}

function formSize(){
    formWrapper = document.getElementsByClassName("form-wrapper");
    formWrapper.style.height = "450px";
}
