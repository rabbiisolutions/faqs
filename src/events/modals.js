import overlayAction from "./overlays";
import toggles from "../utils/toggles";

const signUpHandler = () => {
  const signUpModal = document.getElementsByClassName('sign-up-modal')[0];
  overlayAction(signUpModal);
};

const tutorForms = (maskStatus) => {
  toggles.toggleHiddenByClassWithStatus(
      [{name: 'sign-up-modal', hasHiddenClass: false}]
  ); // only add hidden if not added to modal
  toggles.toggleHiddenByClassWithStatus(
      [{name: 'page-mask', hasHiddenClass: maskStatus}]
  ); // add hidden depending on event source: close or sign up button
  toggles.toggleHiddenByClass(['forms-modal']);
  // hide or show, depends on the visibility status of the forms modal
};

const modals = {
  signUpHandler: signUpHandler, tutorForms: tutorForms
};

export default modals;
