import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import FAQs from "./components/faqsView";
import backDropHandler from "./eventHandlers/backDrop";
import SideBar from "./components/mobile/sideBar";
import NavBar from "./components/mobile/navBar";
import MobileFooter from "./components/mobile/footer";
import SignUpModal from "./components/signUpModal";

function App() {
  return (
      <Router>
        <NavBar/>
        <FAQs/>
        <SideBar/>
        <SignUpModal/>
        <div className="page-mask hidden" onClick={e => backDropHandler(e)} />
        <MobileFooter/>
      </Router>
  );
}

export default App;
