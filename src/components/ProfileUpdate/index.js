// ACTIONS
import { addData } from "../../store/Modules/Data/actions";

//COMPONENTS
import ModalHeader from "../ModalHeader";
import ButtonSnackbar from "../SnackBar";

//HOOKS
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useDispatch } from "react-redux";

//STYLE
import { Container, StyledTextField, Btn } from "./style";
import axios from "axios";

const schema = yup.object().shape({
  name: yup.string(),
  contact: yup.string(),
  email: yup.string().email(),
  course_module: yup.string(),
  bio: yup.string(),
});

export const ProfileUpdate = ({ setOpen }) => {
  const token = localStorage.getItem("authToken");

  const [snackResponse, setsnackResponse] = useState({
    open: false,
    severity: "",
    message: "",
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const checkData = (data) => {
    const { name, email, bio, contact, course_module } = data;
    if (
      name === "" &&
      email === "" &&
      bio === "" &&
      contact === "" &&
      course_module === ""
    ) {
      return true;
    }
    return false;
  };

  const updateData = () => {
    axios
      .get("https://kenziehub.me/users?perPage=9999999")
      .then((res) => dispatch(addData(res.data)));
    setsnackResponse({
      open: true,
      severity: "success",
      message: "Updated Successfully",
    });
  };

  const onSubmit = (data) => {
    axios
      .put("https://kenziehub.me/profile", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        checkData(data)
          ? setsnackResponse({
              open: true,
              severity: "warning",
              message: "No data has been updated",
            })
          : updateData();
      })
      .catch(() => {
        setsnackResponse({
          open: true,
          severity: "error",
          message: "Update Error!",
        });
      });
  };

  const { open, severity, message } = snackResponse;

  return (
    <>
      <ModalHeader title="Update Profile" setOpen={setOpen} />
      <Container onSubmit={handleSubmit(onSubmit)}>
        <StyledTextField
          label="Name"
          variant="outlined"
          name="name"
          inputRef={register}
        />
        <StyledTextField
          label="Email"
          variant="outlined"
          name="email"
          inputRef={register}
        />
        <StyledTextField
          label="Course Module"
          variant="outlined"
          name="course_module"
          inputRef={register}
        />
        <StyledTextField
          label="Bio"
          variant="outlined"
          name="bio"
          inputRef={register}
        />
        <StyledTextField
          label="Contact"
          variant="outlined"
          name="contact"
          inputRef={register}
        />
        <Btn variant="contained" type="submit">
          Update
        </Btn>
      </Container>
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

export default ProfileUpdate;
