import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Ashley,</h1>
            <h5>an eager new Developer</h5>
            <p>
            "Prepped with a firm hold on the many career-relevant coding topics met during the Full-Stack Developer Immersive Bootcamp with General Assembly and primed by an innate curiosity and willingness to take on the difficult, Ashley is now poised to prove herself an asset in a job role that shapes her career focus via meaningful work"
            </p>
          </HeroLeft>
          <HeroRight>

          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
            <img
              src="https://i.imgur.com/aVRkOHk.png?1"
              alt="scroll-down"
            />
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
