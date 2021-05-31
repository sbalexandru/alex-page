import styled from "styled-components";
import BgImg from "../img/computer.jpg";

export const Back = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BgImg});
  background-position: center;
  background-size: cover;
  padding-top: 124px;
  @media (max-width: 768px) {
    width: auto;
  }
`;

export const ContainerOne = styled.div`
  width: 1200px;
  margin: auto;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    text-align: center;
  }
`;

export const Text = styled.p`
  font-family: "Nothing You Could Do", cursive;
  font-size: 4rem;
  padding: 10px;
  @media (max-width: 768px) {
    font-weight: 900;
    text-shadow: -1px 7px 8px rgba(150, 150, 150, 1);
    line-height: 2;
  }
`;

export const Title = styled.h1`
  font-family: "Caveat", cursive;
  font-size: 5rem;
  font-weight: 400;
  @media (max-width: 768px) {
    font-weight: 900;
    text-shadow: -1px 7px 8px rgba(150, 150, 150, 1);
    line-height: 2;
  }
`;
