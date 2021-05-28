import React from "react";
import {
  Container,
  Title,
  Parent,
  Child,
  Font,
  Name,
  ChildTwo,
  Mail,
} from "./SectionFour.styled";
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

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
            <a href="https://github.com/sbalexandru" alt="Git">
              <FaGithub />
              GitHub
            </a>
          </Font>

          <Font>
            <a href="linkedin.com/in/sabău-alexandru-25503b5a" alt="LinkedIn">
              <FaLinkedin /> LinkedIn
            </a>
          </Font>

          <Font>
            <a href="https://www.facebook.com/sabau.alex.18" alt="facebok">
              <FaFacebookSquare /> Facebook
            </a>
          </Font>
        </Child>
        <ChildTwo>
          <Font>Contact Me </Font>
          <a href="mailto:sbalexandru@yahoo.com">
            <Mail>sbalexandru@yahoo.com</Mail>
          </a>
        </ChildTwo>
      </Parent>
    </Container>
  );
};

export default SectionFour;
