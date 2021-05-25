import styled from "styled-components";

export const H = styled.header`
  margin: 0 auto;
  width: 100%;
  background-color: grey;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const Container = styled.div`
  width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Brend = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: stretch;

  & > img {
    display: block;
    width: 50px;
    height: 50px;
    margin-right: 5px;
    border-radius: 50%;
  }
`;

export const Name = styled.h1`
  font-size: 20px;
  font-weight: 900;
  color: #fafafa;
`;

export const Stang = styled.div`
  display: block;
  padding: 10px;
`;

export const Drept = styled.div`
  display: flex;
  padding: 10px;
`;

export const Button = styled.div`
  width: 100px;
  height: 25px;
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
