import styled from "styled-components";

export const Title = styled.h2`
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  text-align: center;
  width: 200px;
  height: 30px;
  border-radius: 30px;
  color: #4469e0;
  border: 1px solid #4469e0;
  font-size: 1.3rem;

  @media (max-width: 945px) {
    width: 130px;
    height: 30px;
    font-size: 1.1rem;
    padding: 20px;
    margin-bottom: 30px;
  }
  @media (max-width: 455px) {
    width: 100px;
    height: 25px;
    font-size: 1rem;
    padding: 15px;
    margin-bottom: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  h3 {
    margin: 0px 0px;
    font-weight: 500;
    font-size: 1.1rem;
  }
  ul {
    padding-left: 20px;
    margin: 0;
  }

  p {
    margin-top: 5px;
    font-size: 0.9rem;
  }

  @media (max-width: 945px) {
    padding: 10px;
  }

  @media (max-width: 455px) {
    padding: 5px;
    font-size: 15px;

    h3 {
      font-size: 1rem;
    }
  }
`;
