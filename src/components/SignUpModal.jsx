import React from "react";
import ButtonLink from "./basic/ButtonLink.jsx";
import signUpHandler from "../events/sign-up-modal";
import texts from "../constants/texts";
import close from "../assets/icons/close.svg";
import Icon from "./basic/Icon";

const SignUpModal = () => {
  return (
      <div className={'sign-up modal hidden'}>
        <section className={'header'}>
          <Icon src={close} className="close-icon" height={2.25} width={5} onClick={e => signUpHandler(e)}/>
          <div id="sign-up-text">{texts.signUp}</div>
        </section>
        <section className={'body'}>
          <div className={'content'}>
            <div className="user-title">
              clients/parents only
            </div>
            <div id="client-btns">
              <ButtonLink link="https://forms.gle/y7KTkMDtYCtAywDu6" className="client-btn" value="Get a Tutor"/>
            </div>
          </div>
          <div className={'content'}>
            <div className="user-title">
              teachers/tutors only
            </div>
            <div id="tutor-btns">
              <ButtonLink link="https://forms.gle/ZU8GZrYVPWenL4r19" className="tutor-btn" value="TSC Tutor"/>
            </div>
          </div>
        </section>
        <section className={'footer'}>
          <div className="info">If you face difficulty in registering call, text or WhatsApp on 0772 915 361</div>
        </section>
      </div>
  );
};

// Exporting the component
export default SignUpModal;
