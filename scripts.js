function validateForm() {
  let x = document.forms["myForm"]["account"].value;
  let y = document.forms["myForm"]["password"].value;

  if (x == "" || y =="") {
    alert("All feilds must be filled out");
    return false;
  }
} 

function validateSignupForm() {
  let fname = document.forms["sign"]["fname"].value;
  let lname = document.forms["sign"]["lname"].value;
  let account = document.forms["sign"]["account"].value;
  let pass = document.forms["sign"]["pass"].value;
  let confirmPass = document.forms["sign"]["confirmPass"].value;

  if (pass.length < 5 || confirmPass.length < 5 ) {
    alert("password should be more than 5 characters !");
    return false;
  }

else if (pass != confirmPass) {
    alert("password should be the same in both feilds");
    return false;
}
else if (account.length != 7) {
  alert("account number should be 7 numbers");
    return false;
} 
} 
