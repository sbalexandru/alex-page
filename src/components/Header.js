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
        <Drept>
          <Button>Home</Button>
          <Button>About</Button>
          <Button>Project</Button>
          <Button>Contact</Button>
        </Drept>
      </Container>
    </H>
  );
};

export default Header;
