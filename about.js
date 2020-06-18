//Map gallery
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryMaps = document.querySelectorAll('.gallery-map');
let currentlySelected = 0;

prevBtn.addEventListener('click', function (event) {
  galleryMaps[currentlySelected].classList.remove('activeMap');
  currentlySelected--; //currentlySelected = currentlySelected - 1;
  galleryMaps[currentlySelected].classList.add('activeMap');
  nextBtn.classList.remove('hide');

  if (currentlySelected === 0) {
    prevBtn.classList.add('hide');
  }
});

nextBtn.addEventListener('click', function (event) {
  galleryMaps[currentlySelected].classList.remove('activeMap');
  currentlySelected++; //currentlySelected = currentlySelected + 1;
  galleryMaps[currentlySelected].classList.add('activeMap');
  prevBtn.classList.remove('hide');

  if (galleryMaps.length === currentlySelected + 1) { //(galleryMaps.length - 1 === currentlySelected)
    nextBtn.classList.add('hide');
  }
});


//Footer array
const string = 'This page was built using:';
const array = ['HTML', 'CSS', 'JavaScript'];
 
document.getElementById('footer-string').innerHTML = string.concat(' ', array.slice(0, -1).join(', ')+' and '+array.slice(-1), '.');

