import overlayAction from "./overlays";
import toggles from "../utils/toggles";

const signUpHandler = () => {
  const signUpModal = document.getElementsByClassName('sign-up modal')[0];
  overlayAction(signUpModal);
};

const tutorForms = () => {
  toggles.toggleHiddenByClassWithStatus(
      [{name: 'sign-up modal', hasHiddenClass: false}]
  );
  toggles.toggleHiddenByClass(['forms-modal'])
};

const modals = {
  signUpHandler: signUpHandler, tutorForms: tutorForms
};

export default modals;
