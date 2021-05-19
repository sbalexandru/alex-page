import React from "react";
import { Container, Brend, Name, Stang, Drept, Button } from "./Header.styled";

const Header = () => {
  return (
    <Container>
      <Stang>
        <Brend>logo</Brend>
        <Name>Sabău Alexandru</Name>
      </Stang>
      <Drept>
        <Button>1</Button>
        <Button>1</Button>
        <Button>1</Button>
        <Button>1</Button>
      </Drept>
    </Container>
  );
};

export default Header;
