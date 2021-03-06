import styled from "styled-components";

export const Line = styled.div`
  border-top: 3px solid rgb(77, 77, 77);
`;

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 100px;
  display: block;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    text-align: center;
  }
`;

export const Abaut = styled.h1`
  font-family: "Nothing You Could Do", cursive;
  font-size: 5rem;
  font-weight: 900;
  padding-top: 100px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const Parent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

export const Img = styled.div`
  & > img {
    width: 180px;
    height: 180px;
    border: 3px solid black;
    border-radius: 20%;
    @media (max-width: 768px) {
      width: 120px;
      height: 120px;
    }
  }
`;

export const Text = styled.div`
  margin: 4rem;
  font-size: 3rem;
  line-height: 1.2;
  text-align: justify;
  text-indent: 50px;
  font-family: "Open Sans", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin: 3rem;
  }
`;
