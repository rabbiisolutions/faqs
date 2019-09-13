import accordion from "./accordion";
import formatBody from "./faqBody";

const FAQsList = (list) => {

};

const GenerateFAQ = (faq) => {
  return (
    accordion.panel(
        formatBody()
    )
  );
};

export default FAQsList;
