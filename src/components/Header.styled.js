import styled from "styled-components";

export const H = styled.header`
  margin: 0 auto;
  width: 100%;
  background-color: #8c8c8c;
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
  font-size: 2rem;
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
  color: #262626;
`;

export const Stang = styled.div`
  display: block;
  padding: 10px;
`;

export const Drept = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
`;

export const Button = styled.div`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  transition-duration: 0.4s;
  :hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
