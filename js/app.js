const navRightBtn = document.querySelector('.navbar-right__btn'),
  modal = document.querySelector('.modal'),
  closeBtn = document.querySelector('.close-btn');

navRightBtn.addEventListener('click', (event) => {
  event.preventDefault();

  modal.classList.remove('hide');
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hide');
});