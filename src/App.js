import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import backDropHandler from "./events/backdrop";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import SignUpModal from "./components/SignUpModal";

function App() {
  return (
      <Router>
        <NavBar/>
        <SideBar/>
        <SignUpModal/>
        <div className="page-mask hidden" onClick={e => backDropHandler(e)} />
        <Footer/>
      </Router>
  );
}

export default App;
