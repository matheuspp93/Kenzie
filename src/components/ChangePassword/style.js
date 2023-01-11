import styled from "styled-components";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export const Btn = styled(Button)`
  color: white !important;
  background-color: #4469e0 !important;
  margin-bottom: 20px !important;

  :hover {
    background-color: #3a5dce !important;
  }
`;

export const Container = styled.form`
  padding: 30px;
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 945px) {
    width: 60%;
  }

  @media (max-width: 705px) {
    width: 80%;
  }
`;

export const StyledTextField = styled(TextField)`
  margin-bottom: 15px !important;
  input {
    height: 10px;
  }
  @media (max-width: 945px) {
    margin-bottom: 10px !important;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 13px;
  font-style: italic;
  margin-bottom: 15px;
`;
