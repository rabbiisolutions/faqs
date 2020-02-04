import React from "react";
import FAQsList from "./utils/FAQsList";
import tutorFAQs from "../constants/tutorFAQs";
import clientFAQs from "../constants/clientFAQs";
import handleTabs from "../eventHandlers/tabs";
import texts from "../constants/texts";


function readJSON(path) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', path, true);
  xhr.responseType = 'blob';
  xhr.onload = function(e) {
    if (this.status === 200) {
      let file = new File([this.response], 'temp');
      let fileReader = new FileReader();
      fileReader.addEventListener('load', function(){
        console.log(fileReader.result);
      });
      fileReader.readAsText(file);
    }
  };
  xhr.send();
}

readJSON('file:///E:/Rabbi-TS/sept-oct/ClientFAQs.json');

const FAQs = () => {
  return(
    <section className="faqs-view">
      <div className="our-services hidden">
        <a className="nav-sub-item" href="https://www.rabbii.co.ke/#teecha">
          {texts.ourServices[0]}
        </a>
      </div>
      <div className="faqs-title">FAQs</div>
      <div className="tabs-view">
        <div className="tabs">
          <div className="tab-link tutors active" onClick={e => handleTabs(e)}>
            Tutors
          </div>
          <div className="tab-link clients" onClick={e => handleTabs(e)}>
            Clients
          </div>
        </div>

        <div className="tabs-content">
          <div id="tutors" className="tab-content">
            {FAQsList(tutorFAQs.faqs)}
          </div>

          <div id="clients" className="tab-content hidden">
            {FAQsList(clientFAQs.faqs)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
