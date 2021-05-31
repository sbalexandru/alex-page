import styled from "styled-components";
import BgImg from "../img/computer.jpg";

export const Back = styled.div`
  width: auto;
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
  font-weight: 900;
  @media (max-width: 768px) {
    font-weight: 900;
    
    text-shadow: -1px -1px 0 #ffffff,
     0px 0px 0 #ffffff,
     0px 0px 0 #ffffff,
      0px 0px 0 #ffffff;
    line-height: 2;
  }
`;

export const Title = styled.h1`
  font-family: "Caveat", cursive;
  font-size: 5rem;
  font-weight: 900;
  @media (max-width: 768px) {
    font-weight: 900;
    
    text-shadow: -1px -1px 0 #ffffff,
     0px 0px 0 #ffffff,
     0px 0px 0 #ffffff,
      0px 0px 0 #ffffff;
    line-height: 2;
  }
`;
