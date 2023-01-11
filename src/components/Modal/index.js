import { useSelector } from "react-redux";

import { useState } from "react";
// COMPONENTS
import { BsPlusCircleFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

import Delete from "../ModalDelete";
import Edit from "../ModalEdit";
import Add from "../ModalAdd";
import ModalChangePhoto from "../ModalChangePhoto";
import ProfileUpdate from "../ProfileUpdate";
import ChangePassword from "../ChangePassword";
import { Backdrop, Fade } from "@material-ui/core";

// STYLES
import { ModalContainer, PaperContainer, ButtonContainer } from "./styles";

//HELPERS
import { verifyUser } from "../../helpers";
import { useEffect } from "react";

const TransitionsModal = ({ children, type, setAnchorEl, page, id }) => {
  const [open, setOpen] = useState(false);
  const [verify, setVerify] = useState(false);
  const authenticated = useSelector(({ authenticated }) => authenticated);
  const data = useSelector(({ data }) => data);

  const getUserLogged = localStorage.getItem("userLogged");

  useEffect(() => {
    if (getUserLogged !== null) {
      const verifyUserLogged = data.map(
        (user) => JSON.parse(getUserLogged).id === user.id
      );
      const verified = verifyUser(authenticated, verifyUserLogged);
      verified && setVerify(true);
    }
  }, [authenticated, data, getUserLogged]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const elementCaller = (type) => {
    switch (type) {
      case "add":
        return (
          <ButtonContainer>
            <BsPlusCircleFill onClick={handleOpen} />
          </ButtonContainer>
        );
      case "edit":
        return (
          <ButtonContainer>
            <FiEdit className="editIcons" onClick={handleOpen} />
            <button className="edit" type="button" onClick={handleOpen}>
              {children}
            </button>
          </ButtonContainer>
        );
      case "delete":
        return (
          <ButtonContainer>
            <AiOutlineDelete className="deleteIcons" onClick={handleOpen} />
            <button className="delete" type="button" onClick={handleOpen}>
              {children}
            </button>
          </ButtonContainer>
        );
      case "update":
      case "changePassword":
        return (
          <label
            onClick={() => {
              handleOpen();
              setAnchorEl(null);
            }}
          >
            {children}
          </label>
        );
      case "changePhoto":
        return <div onClick={handleOpen}>{children}</div>;
      default:
        return (
          <button type="button" onClick={handleOpen}>
            {children}
          </button>
        );
    }
  };

  const componentRender = (type) => {
    switch (type) {
      case "delete":
        return <Delete id={id} page={page} setOpen={setOpen} />;
      case "edit":
        return <Edit id={id} page={page} setOpen={setOpen} />;
      case "add":
        return <Add page={page} setOpen={setOpen} />;
      case "changePhoto":
        return <ModalChangePhoto setOpen={setOpen} />;
      case "update":
        return <ProfileUpdate setOpen={setOpen} />;
      default:
        return <ChangePassword setOpen={setOpen} />;
    }
  };

  return (
    <div>
      {elementCaller(type)}
      {verify && (
        <ModalContainer
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <PaperContainer>{componentRender(type)}</PaperContainer>
          </Fade>
        </ModalContainer>
      )}
    </div>
  );
};
export default TransitionsModal;
