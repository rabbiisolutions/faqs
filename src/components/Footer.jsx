import React from "react";


const Footer = () => {
  return (
      <footer>
          <a href={'https://privacy.rabbii.co.ke'}>Privacy Policy</a>
          <h1 className="copyright">&copy;&nbsp;Rabbii&nbsp;Technology&nbsp;Solutions&nbsp;{new Date().getFullYear()}</h1>
      </footer>
  );
};

export default Footer;
