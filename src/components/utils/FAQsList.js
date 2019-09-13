import accordion from "./accordion";
import formatBody from "./faqBody";
import React from "react";

const FAQsList = (list) => {
    return list.map(item => (
      GenerateFAQ(item)
    ));
};

const GenerateFAQ = (faq) => {
  return (
      <div key={faq.key}>
        {accordion.toggle(faq.quiz)}
        {accordion.panel(
            formatBody(faq.answer)
        )}
      </div>
  );
};

export default FAQsList;
