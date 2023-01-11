import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";

// ACTIONS
import { addData } from "../../store/Modules/Data/actions";

//STYLES
import { Form, ButtonRegister, Display } from "./styles";
import { TextField } from "@material-ui/core";

//COMPONENTS
import ButtonSnackbar from "../SnackBar/index";

const RegisterForm = () => {
  const [snackResponse, setSnackResponse] = useState({
    open: false,
    message: "",
    severityValue: "",
  });

  const dispatch = useDispatch();

  const { open, message, severityValue } = snackResponse;

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password")])
      .required(),
    name: yup.string().min(4).required(),
    bio: yup.string().min(8).required(),
    contact: yup.string().min(11).required(),
    course_module: yup.string().min(2).required(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const updateData = () => {
    axios
      .get("https://kenziehub.me/users?perPage=9999999")
      .then((res) => dispatch(addData(res.data)));
  };

  const handleForm = (data) => {
    axios
      .post("https://kenziehub.me/users", data)
      .then(() => {
        updateData();
        setSnackResponse({
          open: true,
          message: "User Created",
          severityValue: "success",
        });
      })
      .catch(() =>
        setSnackResponse({
          open: true,
          message: "This user already exists!",
          severityValue: "error",
        })
      );
  };

  const showMessage = () => {
    if (Object.keys(errors).length !== 0) {
      return (
        <ButtonSnackbar
          open={true}
          message="Oops! Something isn't right. Try again"
          severityValue="error"
        />
      );
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(handleForm)}>
        <Display>
          <TextField
            label="Name"
            name="name"
            inputRef={register}
            variant="outlined"
            size="small"
          />
        </Display>
        <Display>
          <TextField
            label="Course module"
            name="course_module"
            inputRef={register}
            variant="outlined"
            size="small"
          />
        </Display>
        <Display>
          <TextField
            label="Bio"
            name="bio"
            inputRef={register}
            variant="outlined"
            size="small"
          />
        </Display>
        <Display>
          <TextField
            label="Contact"
            name="contact"
            inputRef={register}
            variant="outlined"
            size="small"
          />
        </Display>
        <Display>
          <TextField
            label="Email"
            name="email"
            inputRef={register}
            variant="outlined"
            size="small"
          />
        </Display>
        <Display>
          <TextField
            label="Password"
            name="password"
            inputRef={register}
            variant="outlined"
            size="small"
            type="password"
          />
        </Display>
        <Display>
          <TextField
            label="Password confirmation"
            name="password_confirmation"
            inputRef={register}
            variant="outlined"
            size="small"
            type="password"
          />
        </Display>
        <Display>
          <ButtonRegister type="submit">submit</ButtonRegister>
        </Display>
        {showMessage()}
      </Form>
      <ButtonSnackbar
        open={open}
        message={message}
        severityValue={severityValue}
      />
    </>
  );
};

export default RegisterForm;
