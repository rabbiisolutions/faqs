import React from "react";
import areas from "../constants/areas";
import close from "../assets/icons/close.svg";
import modals from "../events/modals";
import Icon from "./basic/Icon";

const TutorForms = () => {
  return (
      <div id={'tutor-forms'} className={'forms-modal hidden'}>
        <section className={'header'}>
          <h4>Tutor Categories</h4>
          <Icon src={close} className="close-icon" height={5} width={5} units={'vh'} onClick={e => modals.tutorForms(e)}/>
        </section>
        <section className={'body'}>
          {areas.map((service) => (<a href={service.link} className={'area-link'} key={service.key}>{service.title}</a>))}
        </section>
        <section>
          <a href={'https://tutor.rabbii.co.ke'} className={'learn'}>Learn more about categories here</a>
        </section>
      </div>
  );
};

export default TutorForms;
