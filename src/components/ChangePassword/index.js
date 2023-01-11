//COMPONENTS
import ModalHeader from "../ModalHeader";
import ButtonSnackbar from "../SnackBar";

//HOOKS
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

//STYLE
import { Container, StyledTextField, Btn, ErrorMessage } from "./style";
import axios from "axios";

const schema = yup.object().shape({
  password: yup.string().min(6, "Min six characters!"),
  old_password: yup.string().required("Required!"),
});

export const ChangePassword = ({ setOpen }) => {
  const [snackResponse, setsnackResponse] = useState({
    open: false,
    severity: "",
    message: "",
  });

  const token = localStorage.getItem("authToken");

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    axios
      .put("https://kenziehub.me/profile", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setsnackResponse({
          open: true,
          severity: "success",
          message: "Updated Successfully",
        });
      })
      .catch(() =>
        setsnackResponse({
          open: true,
          severity: "error",
          message: "Wrong Password!",
        })
      );
  };

  const { open, severity, message } = snackResponse;

  return (
    <>
      <ModalHeader title="Change Password" setOpen={setOpen} />
      <Container onSubmit={handleSubmit(onSubmit)}>
        <StyledTextField
          label="Password"
          variant="outlined"
          name="password"
          inputRef={register}
        />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
        <StyledTextField
          label="Old Password"
          variant="outlined"
          name="old_password"
          inputRef={register}
        />
        <ErrorMessage>{errors.old_password?.message}</ErrorMessage>
        <Btn variant="contained" type="submit">
          Update
        </Btn>
      </Container>
      <ButtonSnackbar open={open} message={message} severityValue={severity} />
    </>
  );
};

export default ChangePassword;
