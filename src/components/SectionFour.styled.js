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
  font-family: "Pattaya", sans-serif;
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
`;

export const Name = styled.p`
  font-family: "Pattaya", sans-serif;
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
  
`;

export const ChildTwo = styled.div`
  display: block;
`;

export const FonTwo = styled.p``;
