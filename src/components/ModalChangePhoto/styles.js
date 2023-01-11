import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  padding: 30px 0;
  width: 60%;
  justify-content: center;

  @media (max-width: 800px) {
    width: 90%;
  }

  label > input {
    display: none;
  }

  label > span {
    background-color: #fff;
    border: 2px solid #4469e0;
    color: #4469e0;
    padding: 6px 16px;
    height: 100%;

    &:hover {
      background-color: #fff;
    }
  }

  > button {
    background-color: #4469e0;
    border-radius: 50%;
    height: 45px;
    min-width: 45px;
    margin-left: 15px;

    &:hover {
      background-color: #3a5dce;
    }

    > span > svg {
      color: #fff;
      width: 20px;
      height: 20px;
    }
  }
`;
