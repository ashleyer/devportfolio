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
          <Image className="hello-world"
            src="https://i.imgur.com/yHQ4396.png"
            alt="pic"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Ashley</strong>. I am a curious learner with advanced interpersonal skills, a refined sense of self-awareness, and a drive to further my Software Development abilities as an effective + positive presence within a new workplace. 

            Strengths do <em>not</em> include: producing quantity over quality, thinking about myself instead of others, dependency, and not wondering "why?". As an ENTP personality type, I can see what something could be instead of blindly accepting what it is. Learning excites me, and I seek a teacher. I want to experience a brave professional environment that expects constant learning of its members in order to gain info, distill insight, and challenge the status quo. My current goal is to expand my Web Development skills thru a workplace that strives to be positively influential to its employees and the world. Further strengths include tenacity, calmness under stress, adapting quickly, being interpersonally effective, and brainstorming innovative ideas.


          </div>
          <div className="AboutBio tagline2 techLine">
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
