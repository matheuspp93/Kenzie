import styled from "styled-components";

export const List = styled.ul`
  width: 300px !important;
  max-height: 230px;
  height: auto !important;
  position: absolute;
  top: 57px;
  left: 50%;
  transform: translate(-50%, -11px);
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  padding-top: 10px;
  z-index: 0;
  overflow-y: scroll;

  @media (max-width: 500px) {
    transform: none;
    left: 0;
    width: 100% !important;
    top: 55px;
    max-height: 200px;
  }

  li {
    width: 100%;
  }

  li button {
    width: 100%;
    text-align: left;
    border: none;
    background-color: #fff;
    padding: 10px 16px;
    transition: all 0.15s;
    margin: 0 !important;
    display: block;
    color: #343a40 !important;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: #ebebeb;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const ListNotFound = styled(List)`
  height: 45px !important;
  overflow-y: hidden;

  li {
    padding: 10px 16px;
  }
`;
