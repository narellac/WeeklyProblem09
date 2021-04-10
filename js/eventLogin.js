const error = document.getElementsByClassName('error');
const email = document.getElementById('email');
const passw = document.getElementById('password');

email.onblur = function() {validateEmail(email.value)};
email.onfocus = function() {hideError(0)};

function validateEmail(emailInput){
    var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailInput.match(emailFormat)) {
        changeErrorStyle(0);
        return false;
    }
    return true;
};

passw.onblur = function() {validatePassword(passw.value)};
passw.onfocus = function() {hideError(1)};

function validatePassword(passwInput){
  var passwFormat = /[A-Za-z0-9]{8,}/;
  if (!passwInput.match(passwFormat)) {
    changeErrorStyle(1);
    return false;
  }
  return true;
}

function changeErrorStyle(index) {
    error[index].style.display = 'unset';
 };
function hideError(index) {
     error[index].style.display = 'none'
 };

