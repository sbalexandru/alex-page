import React from "react";
import { Container, Line, Abaut, Parent, Img, Text } from "./SectionTwo.styled";
import Cv from "../img/cv.jpg";

const SectionTwo = () => {
  return (
    <>
      <Line />
      <Container className="about-section" id="About">
        <Abaut>About me</Abaut>
        <Parent>
          <Img>
            <img src={Cv} />
          </Img>
          <Text>
            I like to take part in projects which challenge myself everyday,
            giving me the opportunity to learn new skills. I work well
            independent and as part of a team too, for me it's important to keep
            good relations with my colleagues. My experience in technical
            support and problem solving was helped me developing my skills about
            excellent communication and customer relationship. I'm at the
            beginning of the road in my web career, I need more experience and
            guidance to be a better web developer.
          </Text>
        </Parent>
      </Container>
    </>
  );
};

export default SectionTwo;
