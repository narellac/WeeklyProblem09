var validation = document.getElementById('#blank');
var result = 'Result of validation: ';

var largeName = function() {
  var name = document.getElementById('#fieldName');
  if (name.lenght == 4) {
    return true;
  }
  else {
    error.push( 'Does not meet the minimum required');
  }
}
largeName()

var correctEmail = function() {
  var email = document.getElementById('#fieldEmail').value;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)) {
    return true;
  }
  else {
    error.push(' It does not support email address');
  }
}
correctEmail()

var largePass = function() {
  var password = document.getElementById('#fieldPass');
  if (password.lenght >= 8 && password.lenght <=15){
    return true;
  }
  else {
    error.push(' The password does not meet the required requirements');
  }
}
largePass()

var matchPass = function() {
  var pass = document.getElementById('#fieldConfirm');
  if (pass == password){
    return true;
  }
  else {
    error.push(' Passwords do not match');
  }
}
matchPass()

var validateAll = function() {
  if (largeName == true && correctEmail == true && largePass == true && matchPass == true){
    validation.style.color = 'green';
    validation.textContent = 'Passed';
  }
  else {
    validation.style.color = 'red';
    validation.textContent ? "Not pass":}
validateAll()
}