import styled from "styled-components";
import { Btn } from "../../components/Button/styles";

export const Form = styled.form`
  display: flex;
  height: 100%;
  width: 290px;
  margin-left: 40%;
  flex-direction: column;
  justify-content: space-around;
  @media (min-width: 1600px) {
    margin: 0 auto;

    margin-right: 22%;
  }

  @media (max-width: 1500px) {
    width: 350px;
    margin: 10px 10% 10px auto;
    height: 480px;
  }

  @media (max-width: 1115px) {
    width: 40%;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 400px) {
    width: 80%;
  }
`;

export const ButtonRegister = styled(Btn)`
  background-color: #4469e0 !important;
  color: white !important;
  height: 200% !important;
  letter-spacing: 2px !important;
  font-size: 13px !important;
  border: solid 2px #4469e0 !important;
  &:hover {
    background-color: #3a5dce !important;
  }
`;

export const Display = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3%;
`;
