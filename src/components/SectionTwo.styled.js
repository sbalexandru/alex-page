import styled from "styled-components";

export const Back = styled.div`
  width: 100%;
  min-height: 400px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);
  background-color: #ccffff;
`;

export const Container = styled.div`
  width: 1200px;
  margin: auto;
  height: 400px;
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  padding-top: 50px;
`;

export const Table = styled.table``;

export const Coloana = styled.div`
  width: 200px;
  height: 50px;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 2rem;
  text-align: center;
`;
