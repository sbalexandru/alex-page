import React from "react";
import {
  Container,
  Brend,
  Name,
  Stang,
  Drept,
  Button,
  H,
} from "./Header.styled";
import Logo from "../img/Logo.jpg";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <H>
      <Container>
        <Stang>
          <Brend>
            <img src={Logo} alt="Logo" />
          </Brend>
          <Name>Sabău Alexandru</Name>
        </Stang>
        <Drept className="navBar">
          <Link
            activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button>Home</Button>
          </Link>

          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button>About</Button>
          </Link>

          <Link
            activeClass="active"
            to="Project"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button>Project</Button>
          </Link>

          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button>Contact</Button>
          </Link>
        </Drept>
      </Container>
    </H>
  );
};

export default Header;
