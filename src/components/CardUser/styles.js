import styled from "styled-components";

import { Btn } from "../Button/styles";

export const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: row wrap;

  @media (max-width: 576px) {
    justify-content: center;
  }

  > li {
    max-width: 25%;
    padding-right: 15px;
    padding-left: 15px;
    width: 100%;

    @media (min-width: 1700px) {
      max-width: 20%;
    }

    @media (max-width: 1200px) {
      max-width: 33.3333%;
    }

    @media (max-width: 1200px) {
      max-width: 50%;
    }

    @media (max-width: 576px) {
      max-width: 80%;
    }

    @media (max-width: 450px) {
      max-width: 100%;
    }
  }
`;

export const Card = styled.div`
  height: auto;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  margin: 0 0 30px;
  border-radius: 0.25rem;
`;

export const CardHeader = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 auto;

  > img {
    margin-right: 20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }

  span {
    font-size: 1rem;
  }
`;

export const CardBody = styled.div`
  width: 100% !important;
  margin: 0 !important;
  height: 85%;
  flex-direction: column;
`;

export const CardImage = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
  object-position: center top;

  @media (max-width: 1500px) {
    height: 220px;
  }

  @media (max-width: 1200px) {
    height: 220px;
  }

  @media (max-width: 992px) {
    height: 180px;
  }
`;

export const CardDescription = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1500px) {
    height: 125px;
  }

  > p {
    opacity: 0.8;
    font-size: 0.9rem;
    margin: 0;
  }
`;

export const Button = styled(Btn)`
  width: 90%;
  margin: 0 auto;
  background-color: #4469e0 !important;
  color: #fff !important;
`;
