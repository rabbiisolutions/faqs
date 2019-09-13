import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import Logo from "./utils/logo";
import socialIcons from "./social";
import Icon from "./utils/icon";
import facebook from "../icons/social/facebook-f-brands.svg";
import youtube from "../icons/social/youtube-brands.svg";
import twitter from "../icons/social/twitter-brands.svg";
import linkedin from "../icons/social/linkedin-in-brands.svg";
import phone from "../icons/social/phone-volume-solid.svg";
import texts from "../constants/texts";
import whatsapp from "../icons/social/whatsapp-brands.svg";
import mail from "../icons/social/gmail.svg";

const FooterPage = () => {
  return (
      <footer>
        <div className="">
          <div className="company-info">
            <Logo className="logo footer" height={123}/>
            <p>
              Rabbii TS is an education technology company that seeks to support people of all
              ages through use of technology to acquire and apply knowledge; either for career,
              academic progress, or their talents, hobbies and interests, anywhere they are and at
              a time of their convenience.
            </p>
          </div>
          <div id="find-us-title">{texts.findUs}</div>
          <div id="social">
            <a href="https://www.facebook.com/rabbiitech/" target="_blank" rel="noopener noreferrer">
              <Icon src={facebook} className="footer-icon" height={2.5} width={2.5}/>
            </a>
            <a href="https://www.youtube.com/channel/UC5dpUzgKA46Iuh8r9ni1Syg" target="_blank" rel="noopener noreferrer">
              <Icon src={youtube} className="footer-icon" height={2.5} width={2.5}/>
            </a>
            <a href="https://twitter.com/RabbiiTech" target="_blank" rel="noopener noreferrer">
              <Icon src={twitter} className="footer-icon" height={2.5} width={2.5}/>
            </a>
            <a href="https://www.linkedin.com/company/Rabbii-technology-innovations-ltd/" target="_blank" rel="noopener noreferrer">
              <Icon src={linkedin} className="footer-icon" height={2.5} width={2.5}/>
            </a>
          </div>
        </div>
        <div id="contacts">
          <div id="mobile">
              <span className="icon-text">
                <Icon src={phone} className="footer-icon" height={2.5} width={2.5}/>
                <span>{texts.safaricom}</span>
              </span>
            <span className="icon-text">
                <Icon src={whatsapp} className="footer-icon" height={2.5} width={2.5}/>
                <span>{texts.telkom}</span>
              </span>
          </div>
          <div id="mail">
              <span className="icon-text">
                <Icon src={mail} className="footer-icon" height={3} width={2.5}/>
                <span>{texts.sema}</span>
              </span>
            <span className="icon-text">
                <Icon src={mail} className="footer-icon" height={3} width={2.5}/>
                <span>{texts.hr}</span>
              </span>
          </div>
        </div>
        <div id="darken">
          <span className="copyright">&copy;&nbsp;{new Date().getFullYear()}&nbsp;Copyright:&nbsp;</span>
          <span className="company">&nbsp;Rabbii&nbsp;Technology&nbsp;Solutions&nbsp;®&nbsp;</span>
        </div>
      </footer>
  );
};

export default FooterPage;
