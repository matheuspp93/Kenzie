//STYLE
import Paper from "@material-ui/core/Paper";

import styled from "styled-components";

export const PrimaryContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
`;

export const SecondaryContainer = styled(Paper)`
  word-break: break-word;
  margin: 0 auto;
  width: 50%;
  margin-top: 80px;
  padding: 60px;
  margin-bottom: 100px;
  text-align: justify;

  @media (max-width: 1023px) {
    width: 60%;
  }

  @media (max-width: 945px) {
    padding: 40px;
    width: 75%;
  }

  @media (max-width: 455px) {
    padding: 20px;
    margin-top: 40px;
    width: 90%;
  }
`;
