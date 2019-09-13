import React from "react";

const formatBody = (answers) => {
  return answers.map((answer) => (
          <p className="bold">{answer}</p>
      )
  );
};

export default formatBody;
