//Console log form
function sConsole(event) {
  event.preventDefault();
  const form = document.querySelector('form');

  for (let i = 0; i < form.length; i++) {
      console.log(form.elements[i].name
        .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.substring(1))
            .join(''), 
        form.elements[i].value);
  }
}


//Validate form
const inputFName = document.getElementById('first-name');
const inputEmail = document.getElementById('email');
const inputComment = document.getElementById('comment');
const button = document.querySelector('.submitBtn');
const regEx = /\S+@\S+\.\S+/; // non-whitespace character between 1 and unlimited, @ , non-whitespace character, dot, non-whitespace character//
const form = document.querySelector('.form');

function validateForm(){
    if (inputFName.value !== '' && regEx.test(inputEmail.value) && inputComment.value !== ''){
       button.disabled = false;
    } else {
       button.disabled = true;
    }
}


const checkbox = document.getElementById('subscribe');

checkbox.addEventListener('change', (event) => {
  if (checkbox.checked) {
    checkbox.value = true;
  } else {
    checkbox.value = false;
  }
  
  // console.log(checkbox.value);
});


//Footer array
const string = 'This page was built using:';
const array = ['HTML', 'CSS', 'JavaScript'];
 
document.getElementById('footer-string').innerHTML = string.concat(' ', array.slice(0, -1).join(', ')+' and '+array.slice(-1), '.');

