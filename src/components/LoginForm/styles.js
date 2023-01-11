import styled from "styled-components";
import { Btn } from "../../components/Button/styles";

export const Form = styled.form`
  display: flex;
  width: 150%;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonLogin = styled(Btn)`
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
  justify-content: space-between;
  margin-top: 7%;
`;
