 function  ValidateForm(){

    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var country = document.getElementById("country");
    var bday = document.getElementById("bday");
    var pnumber = document.getElementById("pnumber");
    var gender = document.getElementById("gender");
    var valid=true;
    if(fname.Value.length==0){
        fname.className="form-control";
        fname.nextElementSibling.innerHTML="fname can not be blank";
        valid = false;
    }
    return valid;


 }