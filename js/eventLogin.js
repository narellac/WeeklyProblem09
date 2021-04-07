const email = document.querySelector('input[type="email"]');
const password = document.querySelector('#pass');
const two = document.querySelector('#two');
const three = document.querySelector('#three');

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