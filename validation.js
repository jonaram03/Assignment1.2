function validateForm(){
    var firstName = document.theForm.firstName.value;
    var lastName = document.theForm.lastName.value;
    var zipCode =  document.theForm.zipCode.value;
    var errMessage = document.getElementById("errorMessage");    

    var fullName = firstName + " " + lastName;
    errMessage.innerHTML = " ";

//checks thats the length of the full name is 20 characters or less
    if (fullName.length > 20 || fullName.length == 1){
        errMessage.innerHTML = "The first and last name combined must be 20 characters or less."
        return false;
    }

    if (zipCode.length != 5){
        errMessage.innerHTML = "The zipcode must be exactly 5 digits";
        return false;
    }

    document.getElementById("secretMessage").innerHTML = "Yay it worked!!!"
    return false;
}
