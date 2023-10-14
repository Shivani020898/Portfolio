import React from "react";
import { stackList } from "../../data/ProjectData";
import Avtar from "../../Assets/Shivani_Passport.jpeg";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image src={Avtar} alt="man-svgepo" />
          <div className="AboutBio">
            Hello! My name is <strong>Shivani Tiwari,</strong> Full Stack
            Developer with a background in Computer Applications (BCA, MCA).I am
            Passionate Full Stack Web Developer with a strong foundation in
            front-end and back-end technologies. Dedicated to crafting
            efficient, user-centric web applications. Seeking challenging
            projects to apply my skills and contribute to innovative solutions.
          </div>
          <div className="AboutBio tagline2">
            <strong>
              "I have become confident using the following technologies."
            </strong>
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
