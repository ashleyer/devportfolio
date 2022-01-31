import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  background-image: url(https://i.imgur.com/FP1AYtQ.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 350px;
  position: relative;
 

  span {
    position: absolute;
    bottom: 1rem;
    color: black;
    font-size: 34px;
    background-color: white;
  



    a {
      color: black;
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <span>
          Coded with 💙  by {"A. Romano"}
          <a
            href="https://github.com/ashleyer"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ashleyer
          </a>{" "}
        </span>
      </div>
    </FooterSection>
  );
}

export default Footer;
