import React from "react";
import { Back, ContainerOne, Text, Title } from "./SectionOne.styled";
import { Container, Row, Col } from "reactstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";

const SectionOne = () => {
  return (
    <Back>
      <AnchorLink offset="100" href="#Home" />
      <ContainerOne>
        <Container>
          <Row>
            <Col>
              <Text>Welcome to my page</Text>
            </Col>
            <Row>
              <Col>
                <Title>Sabău Alexandru</Title>
              </Col>
            </Row>
          </Row>
        </Container>
      </ContainerOne>
    </Back>
  );
};

export default SectionOne;
