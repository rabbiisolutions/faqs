import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import FAQs from "./components/faqsView";

function App() {
  return (
      <Router>
        <FAQs/>
      </Router>
  );
}

export default App;
