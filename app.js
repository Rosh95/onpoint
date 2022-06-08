document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
const popupOpen = document.querySelector('.third-container__btn');
const popupClose = document.querySelector('.popup__btn');
const popupContainer = document.querySelector('.popup');
const containersLine = document.querySelector('.containers__line');
const logo = document.querySelectorAll('.logo');
const firstContainerButton = document.querySelector('.first-container__btn');
const popupLine = document.querySelector('.popup__bodies');
const pag1 = document.querySelector('.pagination__sircle-1');
const pag2 = document.querySelector('.pagination__sircle-2');

let offsetThird = 0;
let offset = 0;

document.querySelector('.pagination__btn-next').addEventListener('click', function () {
  offsetThird = offsetThird + 450;
  if (offsetThird > 450) {
    offsetThird = 0;
  }
  popupLine.style.left = -offsetThird + 'px';
  pag1.classList.toggle('pag-active');
  pag2.classList.toggle('pag-active');
});

document.querySelector('.pagination__btn-prev').addEventListener('click', function () {
  offsetThird = offsetThird - 450;
  if (offsetThird < 0) {
    offsetThird = 450;
  }
  popupLine.style.left = -offsetThird + 'px';
  pag1.classList.toggle('pag-active');
  pag2.classList.toggle('pag-active');
});

for (let i = 0; i < logo.length; i++) {
  logo[i].addEventListener('click', () => {
    offset = 0;
    containersLine.style.left = -offset + 'px';
  });
}

firstContainerButton.addEventListener('click', () => {
  offset = 1024;
  containersLine.style.left = -offset + 'px';
});

popupOpen.addEventListener('click', () => {
  popupContainer.classList.toggle('popup__open');
});
popupClose.addEventListener('click', () => {
  popupContainer.classList.toggle('popup__open');
});

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
  x1 = event.touches[0].clientX;
  y1 = event.touches[0].clientY;
}

function handleTouchMove(event) {
  if (!x1 || !y1) {
    return false;
  }
  let x2 = event.touches[0].clientX;
  let y2 = event.touches[0].clientY;

  let xDiff = x2 - x1;
  let yDiff = y2 - y1;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      console.log('right');
      offset = offset + 1024;
      if (offset > 2048) {
        offset = 0;
      }

      containersLine.style.left = -offset + 'px';
    }
    if (xDiff < 0) {
      console.log('left');
      offset = offset - 1024;
      if (offset < 0) {
        offset = 2048;
      }

      containersLine.style.left = -offset + 'px';
    }
    console.log(offset);
  }

  x1 = null;
  y1 = null;
}
