import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import axios from "axios";

//COMPONENTS
import ModalHeader from "../ModalHeader";
import ButtonSnackbar from "../SnackBar";

// ACTIONS
import { addData } from "../../store/Modules/Data/actions";

// STYLES
import { FiSend } from "react-icons/fi";
import Button from "@material-ui/core/Button";
import { Form } from "./styles";

const ModalChangePhoto = ({ setOpen }) => {
  const [snackResponse, setsnackResponse] = useState({
    open: false,
    severity: "",
    message: "",
  });

  const schema = yup.object().shape({
    avatar: yup.mixed().required(),
  });

  const { handleSubmit, register } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const updateData = (severity) => {
    axios
      .get("https://kenziehub.me/users?perPage=9999999")
      .then((res) => dispatch(addData(res.data)));

    setsnackResponse({
      open: true,
      severity: severity,
      message:
        severity === "success"
          ? "Image updated successfully"
          : "Oops! Something isn't right. Try again",
    });
  };

  const handleForm = (data) => {
    const newData = new FormData();
    newData.append("avatar", data.avatar[0]);

    const token = localStorage.getItem("authToken");

    axios
      .patch("https://kenziehub.me/users/avatar", newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        updateData("success");
      })
      .catch(() => updateData("error"));
  };

  const { open, message, severity } = snackResponse;

  return (
    <>
      <ModalHeader title="Profile Image" setOpen={setOpen} />
      <Form onSubmit={handleSubmit(handleForm)}>
        <label htmlFor="upload-photo">
          <input id="upload-photo" name="avatar" type="file" ref={register} />

          <Button component="span">choose your image</Button>
        </label>
        <Button type="submit">
          <FiSend />
        </Button>
      </Form>
      {open && (
        <ButtonSnackbar
          open={open}
          message={message}
          severityValue={severity}
        />
      )}
    </>
  );
};

export default ModalChangePhoto;
