import React from "react";
import {
  Container,
  Img,
  Text,
  Back,
  Grid,
  Child,
  Title,
} from "./SectionThree.styled";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectImg from "../img/project-school.jpg";
import ProjectBuffering from "../img/buffering.jpg";

const SectionThree = () => {
  return (
    <Back>
      <Container className="projectSection" id="Project">
        <Title>My Project</Title>

        <Grid>
          <Child>
            <Img>
              <a href="https://alex-sabau-proiect-final.netlify.app/">
                <img src={ProjectImg} alt="farst project" />
              </a>
            </Img>
            <Text>IT School - Final Project</Text>
          </Child>

          <Child>
            <Img>
              <a href="1" alt="second prohject">
                <img src={ProjectBuffering} alt="Project Loading" />
              </a>
            </Img>
            <Text>Project under construction</Text>
          </Child>

          <Child>
            <Img>
              <a href="2" alt="second prohject">
                <img src={ProjectBuffering} alt="Project Loading" />
              </a>
            </Img>
            <Text>Project Loading</Text>
          </Child>

          <Child>
            <Img>
              <a href="3" alt="second prohject">
                <img src={ProjectBuffering} alt="Project Loading" />
              </a>
            </Img>
            <Text>Project Loading</Text>
          </Child>
        </Grid>
      </Container>
    </Back>
  );
};

export default SectionThree;
