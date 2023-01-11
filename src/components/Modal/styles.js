import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
export const ModalContainer = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PaperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  width: 50vw;
  height: auto;
  max-width: 500px;
  /* padding: 15px; */
  border-radius: 8px;

  background-color: #fff;
  /* box-shadow: 5px 5px 5px #0009; */
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  border: "2px solid #000";
  outline: none;
  @media only screen and (max-width: 480px) {
    width: 95vw;
    border-radius: none;
  }
`;

export const ButtonContainer = styled.div`
  svg {
    color: #4469e0;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 50%;
    font-weight: 500;
    line-height: 1.75;
    width: 50px;
    height: 50px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    :hover {
      color: #1c82e8;
    }
    :active {
      color: #0b335c;
    }
  }
  button {
    border: none;
    outline: none;

    width: 110px;
    margin: 0 10px 10px 0;

    color: #fff;
    border-radius: 4px;
    padding: 8px;
    font-weight: 700;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2);
  }
  .edit {
    background-color: #feca57;
    :hover {
      background-color: #e8b84f;
    }
    :active {
      background-color: #5c491f;
      box-shadow: 0 0 0;
    }
  }

  .delete {
    background-color: #d63031;

    :hover {
      background-color: #e83333;
    }
    :active {
      background-color: #5c1414;
      box-shadow: 0 0 0;
    }
  }

  .edit,
  .delete {
    border: none;
    outline: none;
    font-weight: 500;
    line-height: 1.75;
    padding: 6px 16px;

    width: 110px;
    margin: 0 10px 10px 0;

    color: #fff;
    border-radius: 5px;
    padding: 8px;
    font-weight: 700;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
  .editIcons,
  .deleteIcons {
    display: none;
  }

  @media only screen and (max-width: 480px) {
    .edit,
    .delete {
      display: none;
    }
    .editIcons {
      display: inline;
      border-radius: 0;
      color: #feca57;
    }
    .deleteIcons {
      display: inline;
      border-radius: 0;
      color: #d63031;
    }
  }
`;
