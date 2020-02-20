import overlayAction from "./overlays";

const menuToggle = () => {
  const sideBar = document.getElementsByClassName('menu')[0];
  overlayAction(sideBar);
};

export default menuToggle;
