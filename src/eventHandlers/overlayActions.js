const hidden = 'hidden';

const overlayActions = (target) => {
  const backDrop = document.getElementsByClassName('page-mask')[0];
  toggle(target);
  toggle(backDrop);
};

const toggle = (target) => {
  target.classList.toggle(hidden);
};

export default overlayActions;
