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
`;

export const Abaut = styled.h1`
  font-family: "Pattaya", sans-serif;
  font-size: 5rem;
  font-weight: 400;
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
    width: 100%;
    text-align: center;
  }
`;

export const Img = styled.div`
  & > img {
    width: 180px;
    height: 180px;
    border: 1px solid black;
    border-radius: 50%;
    @media (max-width: 768px) {
      width: 120px;
      height: 120px;
    }
  }
`;

export const Text = styled.div`
  margin: 20px;
  font-size: 3rem;
  line-height: 1.2;
  font-family: "Stint Ultra Condensed", cursive;
  @media (max-width: 768px) {
    width: 300px;
    text-align: center;
  }
`;
