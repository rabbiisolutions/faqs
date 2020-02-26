import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import backDropHandler from "./events/backdrop";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import NavPane from "./components/NavPane";
import Footer from "./components/Footer";
import SignUpModal from "./components/SignUpModal";
import TutorForms from "./components/TutorForms";
import Main from "./components/Main";


const App = () => {
  return (
      <Router>
        <div>
          <NavBar/>
          <NavPane/>
          <main>
            <Main/>
          </main>
          <SideBar/>
          <SignUpModal/>
          <TutorForms/>
          <div className="page-mask hidden" onClick={e => backDropHandler(e)} />
          <Footer/>
        </div>
      </Router>
  );
};

export default App;
