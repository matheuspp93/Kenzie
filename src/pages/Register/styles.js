import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: -50px;
    height: 300%;
    width: 70%;
    background-color: #4469e0;
    z-index: -1;

    transform: rotate(26deg);
    transform-origin: 100% 0;
    @media (max-width: 1115px) {
      display: none;
      width: 196px;
      margin-right: 10%;
    }
  }

  @media (max-width: 1115px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 120px auto 70px;
  }

  @media (max-width: 768px) {
    height: auto;
  }

  @media (max-width: 500px) {
    margin: 80px auto 70px;
  }
`;

export const BoxPrimary = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10%;
  margin-left: 5%;

  @media (max-width: 1500px) {
    margin: 0;
    width: 30%;
    img {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 55%;
  }
`;

export const BoxSecondary = styled(BoxPrimary)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 11%;
  @media (max-width: 1115px) {
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 1500px) {
    justify-content: center;
  }

  @media (max-width: 1115px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: normal;
  color: black;
  font-style: normal;
  margin-left: 40%;

  @media (min-width: 1601px) {
    margin-top: 12%;
    display: flex;
    margin-left: 60%;
  }

  @media (max-width: 1600px) {
    width: 300px;
    margin: 10px -2% 10px auto;
  }

  @media (max-width: 1115px) {
    width: 100%;
    margin: 40px 0;
    text-align: center;
  }
`;
