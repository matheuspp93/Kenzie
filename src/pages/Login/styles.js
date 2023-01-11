import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
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
    justify-content: center;
    width: 60%;
  }

  @media (max-width: 500px) {
    width: 70%;
  }
`;

export const BoxPrimary = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10%;
  margin-left: 5%;

  @media (max-width: 1115px) {
    width: 100%;
    margin: 0;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  > img {
    @media (min-width: 1919px) {
      width: 600px;
    }

    width: 400px;
    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;

export const BoxSecondary = styled(BoxPrimary)`
  width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 16%;
  @media (max-width: 1115px) {
    width: 70%;
    margin: 0 auto;
    margin-bottom: 20%;

    form {
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: normal;
  color: black;
  font-style: normal;
  margin-top: 70%;
  margin-bottom: 3%;
  margin-right: 10%;
  @media (max-width: 1115px) {
    margin: 70px 0 20px;
  }

  @media (max-width: 600px) {
    margin: 40px 0 20px;
  }
`;
