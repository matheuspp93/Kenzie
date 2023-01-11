import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  font-size: 1rem;

  ul {
    padding: 0px;
  }
  svg {
    margin-right: 10px;
    width: 15px;
    min-width: 15px;
    height: 15px;
    min-height: 15px;
  }
  li {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
  }

  @media (max-width: 945px) {
    padding: 10px;
  }

  @media (max-width: 455px) {
    padding: 5px;
    font-size: 0.9rem;
  }
`;
