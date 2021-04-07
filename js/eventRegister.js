const user = document.querySelector('input[type="text"]');
const email = document.querySelector('input[type="email"]');
const password = document.querySelector('#fieldPass');
const confirmPass = document.querySelector('#fieldConfirm');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');



user.addEventListener('focus', (event) => {
  event.target.style.background = ' ';
});

user.addEventListener('blur', (event) => {
  if(event.target){
    one.textContent = "Complete the field",
    one.style.color = "red";
  };
});

email.addEventListener('focus', (event) => {
  event.target.style.background = ' ';
});

email.addEventListener('blur', (event) => {
  if(event.target){
    two.textContent = "Complete the field",
    two.style.color = "red";
  };
});

password.addEventListener('focus', (event) => {
  event.target.style.background = ' ';
});

password.addEventListener('blur', (event) => {
  if(event.target){
    three.textContent = "Complete the field",
    three.style.color = "red";
  };
});

confirmPass.addEventListener('focus', (event) => {
  event.target.style.background = ' ';
});

confirmPass.addEventListener('blur', (event) => {
  if(event.target){
    four.textContent = "Complete the field",
    four.style.color = "red";
  };
});
