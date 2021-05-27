import styled from "styled-components";

export const Line = styled.div`
  border-top: 3px solid rgb(77, 77, 77);
`;

export const Container = styled.div`
  width: 1200px;
  margin: auto;
  height: 600px;
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
`;

export const Parent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Img = styled.div`
  & > img {
    width: 180px;
    height: 180px;
    border: 1px solid black;
    border-radius: 50%;
  }
`;

export const Text = styled.p`
  margin: 20px;
  font-size: 3rem;
  line-height: 1.2;
  font-family: "Stint Ultra Condensed", cursive;
`;
