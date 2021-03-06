import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
//import './Assets/logo2.png'

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
      <div className="logo">
          <img class='logoimg' src='https://i.imgur.com/W8AweWH.jpg' alt='logo'/>
        </div>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            About
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://docs.google.com/document/d/1hnp_y3SWttqaIQ6T4x5d34A8AId_QLMgzx4Zt5HWhys/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
