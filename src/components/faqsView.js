import React from "react";
import FAQsList from "./utils/FAQsList";
import tutorFAQs from "../constants/tutorFAQs";
import clientFAQs from "../constants/clientFAQs";
import handleTabs from "../eventHandlers/tabs";

const FAQs = () => {
  return(
    <section className="faqs-view">
      <div className="faqs-title">FAQs</div>
      <div className="tabs-view">
        <div className="tabs">
          <div className="tab-link tutors" onClick={e => handleTabs(e)}>
            Tutors
          </div>
          <div className="tab-link clients active" onClick={e => handleTabs(e)}>
            Clients
          </div>
        </div>

        <div className="tabs-content">
          <div id="tutors" className="tab-content hidden">
            {FAQsList(tutorFAQs.faqs)}
          </div>

          <div id="clients" className="tab-content">
            {FAQsList(clientFAQs.faqs)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
