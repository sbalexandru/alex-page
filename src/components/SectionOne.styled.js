import styled from "styled-components";
import BgImg from "../img/computer.jpg";

export const Back = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BgImg});
  background-position: center;
  background-size: cover;
  padding-top: 124px;
`;

export const ContainerOne = styled.div`
  width: 1200px;
  margin: auto;
`;

export const Text = styled.p`
  font-family: "Nothing You Could Do", cursive;
  font-size: 4rem;
  padding: 10px;
`;

export const Title = styled.h1`
  font-family: "Nothing You Could Do", cursive;
  /* display: none; */
  font-size: 5rem;
  font-weight: 400;
`;
