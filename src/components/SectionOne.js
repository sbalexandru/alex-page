import React from "react";
import { Back, ContainerOne, Text, Title } from "./SectionOne.styled";
import { Container, Row, Col } from "reactstrap";

const SectionOne = () => {
  return (
    <Back className="main-section" id="Home">
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
