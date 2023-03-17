let slider = document.querySelector('.slider');
let images = document.querySelectorAll('.slider img');
let counter = 1;
let size = images[0].clientWidth;

setInterval(function() {
  slider.style.transition = "transform 0.6s ease-in-out";
  slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  counter++;

  if (counter >= images.length) {
    counter = 0;
    setTimeout(function() {
      slider.style.transition = "none";
      slider.style.transform = 'translateX(0)';
    }, 2000);
  }
}, 4000);
