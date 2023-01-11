import { useDispatch } from "react-redux";
import { addWorksThunk } from "../../store/Modules/Works/thunk";
import { addData } from "../../store/Modules/Data/actions";

import ModalHeader from "../ModalHeader";
import axios from "axios";

import { ButtonStyled, Message } from "./styles";

const Delete = ({ page, id, setOpen }) => {
  const dispatch = useDispatch();

  const updateData = () => {
    axios
      .get("https://kenziehub.me/users?perPage=9999999")
      .then((res) => dispatch(addData(res.data)));
  };

  const handleDelete = () => {
    const token = localStorage.getItem("authToken");
    try {
      axios
        .delete(`https://kenziehub.me/users/${page}/${id}`, {
          headers: {
            Authorization: `Bearer: ${token}`,
            "Content-type": "application/json",
          },
        })
        .then((res) => dispatch(addWorksThunk()))
        .then(() => {
          updateData();
        });
    } catch (error) {
      console.error(error);
    }
    setOpen(false);
  };

  return (
    <>
      <ModalHeader
        title={`Remove ${page === "techs" ? "Tech" : "Work"}`}
        setOpen={setOpen}
      />

      <Message>
        Are you sure you want to delete{" "}
        {page === "techs" ? "the Tech" : " the Work"}?
      </Message>

      <ButtonStyled onClick={handleDelete}>Delete</ButtonStyled>
    </>
  );
};
export default Delete;
