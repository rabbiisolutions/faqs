import overlayAction from "./overlays";

const signUpHandler = () => {
  const signUpModal = document.getElementsByClassName('sign-up modal')[0];
  overlayAction(signUpModal);
};

export default signUpHandler;
