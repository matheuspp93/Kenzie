import styled from "styled-components";

export const ButtonStyled = styled.button`
  margin-bottom: 30px;
  border: none;
  outline: none;
  font-weight: 500;
  line-height: 1.75;
  padding: 6px 16px;
  background-color: #4469e0;
  color: #fff;
  border-radius: 4px;
  width: 50%;
  font-size: 15px;
  letter-spacing: 2px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :hover {
    background-color: #1c82e8;
  }
  :active {
    background-color: #0b335c;
    box-shadow: 0 0 0;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  padding: 10px;
  margin: 0 auto;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  span {
    margin-bottom: 15px;
    width: 80%;
  }
  .Rating {
  }
`;
