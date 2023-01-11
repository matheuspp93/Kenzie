import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  height: 55px;
  width: 100%;
  background-color: #4469e0;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  z-index: 1001;
  top: 0;
`;

export const Navigation = styled.nav`
  position: relative;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    justify-content: space-between;
  }

  ul {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li a,
  li button {
    text-decoration: none;
    margin-right: 10px;
    color: #fff;
  }

  li button {
    background-color: transparent;
    border: none;
    font-size: 1rem;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
`;
