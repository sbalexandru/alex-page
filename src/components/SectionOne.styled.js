import styled from "styled-components";
import BgImg from "../img/computer.jpg";

export const Back = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${BgImg});
  background-position: center;
  background-size: cover;
  padding-top: 124px;
`;

export const Container = styled.div`
  width: 1200px;
  margin: auto;
`;

export const Text = styled.p`
  font-family: "Squada One", cursive;
  font-size: 4rem;
`;

export const Title = styled.h1`
  font-family: "Squada One", cursive;
  font-size: 5rem;
  font-weight: 400;
`;
