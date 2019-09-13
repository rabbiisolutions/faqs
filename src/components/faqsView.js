import React from "react";

const FAQs = () => {
  return(
    <section className="faqs-view">
      <div className="faqs-title">FAQs</div>
      <div className="tabs-view">
        <div className="tabs">
          <div className="tab-link tutors" onClick="openPage('Home', this, 'red')">
            Tutors
          </div>
          <div className="tab-link clients" onClick="openPage('News', this, 'green')">
            Clients
          </div>
        </div>

        <div className="tabs-content">
          <div id="tutors" className="tab-content">

          </div>

          <div id="clients" className="tab-content open">

          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
