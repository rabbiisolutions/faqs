import React from "react";
import FAQsList from "./utils/FAQsList";
import tutorFAQs from "../constants/tutorFAQs";
import clientFAQs from "../constants/clientFAQs";

const FAQs = () => {
  return(
    <section className="faqs-view">
      <div className="faqs-title">FAQs</div>
      <div className="tabs-view">
        <div className="tabs">
          <div className="tab-link tutors">
            Tutors
          </div>
          <div className="tab-link clients">
            Clients
          </div>
        </div>

        <div className="tabs-content">
          <div id="tutors" className="tab-content">
            {FAQsList(tutorFAQs.faqs)}
          </div>

          <div id="clients" className="tab-content open">
            {FAQsList(clientFAQs.faqs)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
