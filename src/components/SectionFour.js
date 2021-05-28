import React from "react";
import {
  Container,
  Title,
  Parent,
  Child,
  Font,
  Name,
  ChildTwo,
  FonTwo,
} from "./SectionFour.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const SectionFour = () => {
  return (
    <Container className="contactSection" id="Contact">
      <Title>Contact</Title>
      <Parent>
        <Name>
          Sabău Alexandru <span>Front-end Developer</span>
        </Name>

        <Child>
          <Font>
            <FontAwesomeIcon i class={faCoffee} />
            git hub
          </Font>
          <Font>font awsome</Font>
          <Font>font awsome</Font>
        </Child>
        <ChildTwo>
          <FonTwo>mail </FonTwo>
          <FonTwo>mail tel</FonTwo>
        </ChildTwo>
      </Parent>
    </Container>
  );
};

export default SectionFour;
