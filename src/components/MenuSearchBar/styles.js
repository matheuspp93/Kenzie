import styled from "styled-components";

export const Search = styled.form`
  display: flex;
  align-items: center;
  position: absolute;
  height: 38px;
  width: auto;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);

  /* border: 1px solid #ced4da; */
  border-radius: 0.25rem;
  border-bottom: ${({ isActive }) => (isActive ? 0 : `1px`)};
  border-bottom-left-radius: ${({ isActive }) => (isActive ? 0 : `0.25rem`)};
  border-bottom-right-radius: ${({ isActive }) => (isActive ? 0 : `0.25rem`)};

  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  transition: all 0.3s;
  width: 300px;
  z-index: 1;

  @media (max-width: 500px) {
    transform: unset;
    position: relative;
    left: unset;
    width: 70%;
  }

  input {
    width: 90%;
    background-color: transparent;
    border: none;
    font-size: 1rem;

    @media (max-width: 500px) {
      font-size: 0.9rem;
    }

    &:focus {
      outline: none;
    }
  }

  svg {
    width: 10%;
  }
`;
