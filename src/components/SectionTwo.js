import React from "react";
import { Container, Coloana, Text, Back } from "./SectionTwo.styled";
import { Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SectionTwo = () => {
  return (
    <Back>
      <Container>
        <Row xs="2">
          <Col>
            <Coloana>
              <Text>Column</Text>
            </Coloana>
          </Col>
          <Col>
            <Coloana>
              <Text>Column</Text>
            </Coloana>
          </Col>
          <Col>
            <Coloana>
              <Text>Column</Text>
            </Coloana>
          </Col>
          <Col>
            <Coloana>
              <Text>Column</Text>
            </Coloana>
          </Col>
        </Row>
      </Container>
    </Back>
  );
};

export default SectionTwo;
