const error = document.getElementsByClassName('error');
const email = document.getElementById('email');
const passw = document.getElementById('password');
const submit = document.getElementById('submit');

// email validation

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

// password validation

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

// span

function changeErrorStyle(index) {
    error[index].style.display = 'unset';
 };
function hideError(index) {
     error[index].style.display = 'none'
 };


//GET

async function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users?email=randomEmail@gmail.com")
  .then(Response => Response.json())
  .then(data => console.log(data))
  .catch()
};

submit.onclick = function(){
  getUsers();
};