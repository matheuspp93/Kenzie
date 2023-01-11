import styled from "styled-components";

export const ContainerPrimay = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;

  img {
    height: auto;
    width: 270px;

    @media (max-width: 400px) {
      width: 200px;
    }
  }
`;

export const ContainerSecondary = styled.div`
  padding: 100px 0;
  width: 90%;
  margin: 0 auto;
  height: auto;
`;
