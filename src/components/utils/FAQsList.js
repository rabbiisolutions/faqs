import accordion from "./accordion";
import formatBody from "./faqBody";
import React from "react";

const FAQsList = (list) => {

};

const GenerateFAQ = (faq) => {
  return (
      <div>
        {accordion.toggle(faq.quiz)}
        {accordion.panel(
            formatBody(faq.answer)
        )}
      </div>
  );
};

export default FAQsList;
