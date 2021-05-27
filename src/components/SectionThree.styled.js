import styled from "styled-components";

export const Back = styled.div`
  width: 100%;
  min-height: 900px;
  border-top: 3px solid rgb(77, 77, 77);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);
  background-color: rgb(191, 191, 191);
`;

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: auto;
  display: block;
  text-align: center;
`;
export const Title = styled.h1`
  font-family: "Pattaya", sans-serif;
  font-size: 5rem;
  font-weight: 400;
  padding-top: 100px;
  margin-bottom: 40px;
`;

export const Grid = styled.table`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const Child = styled.div`
  /* align-items: center; */
  /* text-align: center; */
  margin: 30px;
`;

export const Img = styled.div`
  transition-duration: 0.4s;
  margin: 30px;
  :hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  & > a > img {
    width: 300px;
    height: 200px;
    border: 1px solid black;
    border-radius: 5px;
  }
`;

export const Text = styled.p`
  font-size: 2rem;
  font-family: "Sigmar One", cursive;
`;
