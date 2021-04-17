const error = document.getElementsByClassName('error');
const nameInp = document.getElementById('name');
const email = document.getElementById('email');
const passw = document.getElementById('password');
const confirmPass = document.getElementById('confirm');
const submit = document.getElementById('submit');

let errorArray = [];

// name validation

nameInp.onblur = function() {validateName(nameInp.value)};
nameInp.onfocus = function() {hideError(0)};

function validateName(nameInput){
  var nameInpFormat = /[A-Za-z ].{6,}/;
  if (!nameInput.match(nameInpFormat)) {
    changeErrorStyle(0);
    errorArray.push("The n format is invalid");
    return false;
  }
  return true;
};


// email validation

email.onblur = function() {validateEmail(email.value)};
email.onfocus = function() {hideError(1)};

function validateEmail(emailInput){
    var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailInput.match(emailFormat)) {
        changeErrorStyle(1);
        errorArray.push("The e format is invalid");
        return false;
    }
    return true;
};

// password validation

passw.onblur = function() {validatePassword(passw.value)};
passw.onfocus = function() {hideError(2)};

function validatePassword(passwInput){
  var passwFormat = /[A-Za-z0-9]{8,}/;
  if (!passwInput.match(passwFormat)) {
    changeErrorStyle(2);
    errorArray.push("The p format is invalid");
    return false;
  }
  return true;
}

// confirm password validation

confirmPass.onblur = function() {validateConfirm(confirmPass.value)};
confirmPass.onfocus = function() {hideError(3)};

function validateConfirm(confirmPass){
  if (confirmPass !== passw.value) {
    changeErrorStyle(3);
    errorArray.push("The cp format is invalid");
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

// field validations

function showValues() {
  const valuesToShow = document.getElementById('hidden');
  valuesToShow.innerHTML = null;
  valuesToShow.innerHTML =
      `<ul>
          <li>Fullname: ${nameInp.value}</li>
          <li>Email: ${email.value}</li>
          <li>Password: ${password.value}</li>
          <li>Confirm: ${confirmPass.value}</li>
      </ul>`;
}

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  showValues();
  sendRequest();
});

function sendRequest() {
  const emailvalue = document.getElementById('email').value;
  if(errorArray.length === 0) {
      fetch(`https://jsonplaceholder.typicode.com/users?email=${emailvalue}`, {
          method: 'GET'
      })
      .then((e) => console.log(e));
  } else {
      console.log(errorArray);
  }
};