const hidden = 'hidden';

const backDropHandler = e => {
  // hide any modal/overlay element that uses the page mask when it's clicked
  let signUp = document.getElementsByClassName('sign-up-modal')[0];
  const sideBar = document.getElementsByClassName('menu')[0];
  signUp.classList.add(hidden);
  sideBar.classList.add(hidden);
  e.target.classList.toggle(hidden);
};

export default backDropHandler;
