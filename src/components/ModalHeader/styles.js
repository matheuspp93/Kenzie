import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #4469e0;
  color: #fff;
  padding: 20px;
  border-radius: 7px 7px 0 0;
  letter-spacing: 2px;

  h2 {
    margin: 0;
    font-weight: 100;
  }

  @media (max-width: 700px) {
    h2 {
      font-size: 25px;
    }
  }

  @media (max-width: 500px) {
    h2 {
      font-size: 22.5px;
    }
  }

  > svg {
    height: 27px;
    width: 27px;
    cursor: pointer;
    transition: all 0.35s;

    &:hover {
      transform: rotate(90deg);
    }
  }
`;
