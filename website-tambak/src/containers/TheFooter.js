import React from "react";
import { CFooter } from "@coreui/react";
import CIcon from "@coreui/icons-react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span className="ml-1">Contact Us Via: </span>
        <CIcon name="cibLinkedin" alt="Settings" />
        <span className="ml-1"></span>
        <a
          href="https://www.linkedin.com/in/fredericksolaiman98/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <span className="ml-1"></span>
        <CIcon name="cib-whatsapp" alt="Settings" />
        <span className="ml-1"></span>
        <a
          href="https://wa.me/6282217236411"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        <span className="ml-1"></span>
        <CIcon name="cib-gmail" alt="Settings" />
        <span className="ml-1"></span>
        <a
          href="mailto:fritzfrederick51@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          E-Mail
        </a>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a
          href="https://coreui.io/react"
          target="_blank"
          rel="noopener noreferrer"
        >
          CoreUI for React
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
