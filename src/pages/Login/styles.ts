import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  color: #000;
`;

export const Form = styled.div`
  width: 50%;
  height: 100vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  background-color: red;
`;

export const FormMain = styled.div`
  background-color: blue;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  border: 0;
  border-radius: 3px;
  padding: 10px 115px 10px 3px;
  outline: 1px solid #ccc;
`;

export const AsideRightLogin = styled.div`
  width: 50%;
  height: 10vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  background-color: red;
`;

export const FormMains = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #fff;
  justify-content: center;
  flex-direction: column;

  p {
    color: #000;
  }
`;

export const P = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  background-color: black;

  img {
    width: 100px;
    height: 100px;
  }
`;
