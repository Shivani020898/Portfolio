import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email, PhoneNumber } from "./ContactElements";
import hel from "../Dada"
function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
          
          <Email>
            <span>shivanitiwari0208@gmail.com</span>
            <a
              className="btn PrimaryBtn"
              href="mailto:your_email@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Mail
            </a>
          </Email>
          <br/>
          <PhoneNumber>
          <span>8085457279</span>
            <a
              className="btn PrimaryBtn"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Text me here
            </a>
          </PhoneNumber>
        </div>
      
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
