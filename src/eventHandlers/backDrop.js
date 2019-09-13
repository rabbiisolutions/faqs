const hidden = 'hidden';

const backDropHandler = e => {
  let modal = document.getElementsByClassName('sign-up-modal')[0];
  const sideBar = document.getElementsByClassName('menu')[0];
  modal.classList.add(hidden);
  sideBar.classList.add(hidden);
  e.target.classList.toggle(hidden);
};

export default backDropHandler;
