import React from "react";
import { stackList } from "../../data/ProjectData";
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
          <Image
            src="https://i.imgur.com/TlFIDBsh.png"
            alt="pic"
          />
          <div className="AboutBio">
            <span className="RegularText">Hello! My name is </span>
            <span className="highlight0">Ashley</span>
            <span>. I am a curious learner with advanced interpersonal skills, a refined sense of self-awareness, and the drive to further my Software Development abilities as an </span>
            <span className="highlight1">effective </span>
            <span>+ </span>
            <span className="highlight2">positive </span>
            <span>presence within a new workplace.</span>


            Strengths do <strong>not</strong> include: producing quantity over quality, thinking about myself instead of others, dependency, and not wondering "why?". As an ENTP personality type, I can see what something could be instead of blindly accepting what it is. Learning excites me, and I seek a teacher. I want to experience a brave professional environment that expects constant learning of its members in order to gain info, distill insight, and challenge the status quo. My current goal is to expand my Web Development skills thru a workplace that strives to be positively influential to its employees and the world. Further strengths include tenacity, calmness under stress, adapting quickly, being interpersonally effective, and brainstorming innovative ideas.


          </div>
          <div className="AboutBio tagline2">
            My Technologies:
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
