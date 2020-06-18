
const GITHUB_URL = 'https://api.github.com/users/leighsteele';

const img = document.querySelector('.profile-image');
const spinner = document.querySelector('.spin');

spinner.classList.add('show'); //show spinner
img.classList.remove('show'); //hide profile image

fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById('profile-image');
    profileImage.src = data.avatar_url;

    const myName = document.getElementById('my-name');
    myName.innerText = data.name;
  });

img.addEventListener('load', function() {
  setTimeout(function () {
    spinner.classList.remove('show');
    img.classList.add('show');
  }, 1200);
});


//Click me button event listener
const clickMe = document.querySelector('.click-me');

clickMe.addEventListener('click', function (event) {
  clickMe.classList.add('element-animation');
});

function removeClass() {
  clickMe.classList.remove('element-animation');
}


//Accordion
const acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}


//Footer array
const string = 'This page was built using:';
const array = ['HTML', 'CSS', 'JavaScript'];

document.getElementById('footer-string').innerHTML = string.concat(' ', array.slice(0, -1).join(', ') + ' and ' + array.slice(-1), '.');







