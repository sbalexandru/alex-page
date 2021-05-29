import styled from "styled-components";

export const H = styled.header`
  margin: 0 auto;
  width: 100%;
  background-color: rgba(94, 94, 139, 0.301);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

export const Container = styled.div`
  width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    text-align: center;
  }
`;

export const Brend = styled.div`
  margin: 0 20px;

  & > img {
    display: block;
    width: 80px;
    height: 80px;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const Name = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: #262626;
  font-family: 'Over the Rainbow', cursive;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Stang = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
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
