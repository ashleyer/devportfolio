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
            Hello! My name is <span style= "green">Ashley</span>. I am a curious learner with advanced interpersonal skills, a refined sense of self-awareness, and a drive to further my Software Development abilities as an effective + positive presence within a new workplace. 

            Strengths do <span style= "italic, green, double underline">not</span> include: producing quantity over quality, thinking about myself instead of others, dependency, or failing to  wonder "why?".
            As an <span style= "green, double underline">ENTP</span> personality type, I see what something could be instead of blindly accepting what it is.
            <span style= "green, double underline">Learning excites me</span> , and I seek a teacher.
            I want to experience a <span style= "green, double underline">brave professional environment</span> that expects constant learning of its members in order to gain info, distill insight, and <span style= "green, double underline">challenge the status quo</span>.
            My current goal is to expand my Web Development skills thru a workplace that strives to be <span style= "green, double underline">positively influential</span> on its employees and the world.
            Further strengths include tenacity, composure under stress, <span style= "green, double underline">adapting quickly</span>, and brainstorming innovative ideas.


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
