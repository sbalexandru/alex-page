import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  margin: auto;
  height: 400px;
  display: block;
  text-align: center;
`;

export const Title = styled.h1`
  display: block;
  font-family: "Nothing You Could Do", cursive;
  font-size: 5rem;
  font-weight: 400;
  padding-top: 100px;
  margin-bottom: 40px;
`;

export const Parent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    text-align: center;
  }
`;

export const Name = styled.p`
  font-family: "Nothing You Could Do", cursive;
  font-size: 4rem;
  padding: 10px;
  line-height: 1.5;
  & > span {
    font-size: 3rem;
    line-height: 1;
    display: block;
  }
`;

export const Child = styled.div`
  display: block;
`;

export const Font = styled.p`
  font-size: 2rem;
  font-weight: 700;
  font-family: "Allerta Stencil", sans-serif;
`;

export const ChildTwo = styled.div`
  display: block;
`;

export const Mail = styled.p`
  font-size: 2rem;
`;
