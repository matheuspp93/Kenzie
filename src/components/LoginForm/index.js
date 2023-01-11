import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthenticate } from "../../store/Modules/Authenticated/actions";

//STYLES
import { TextField } from "@material-ui/core";
import { Form, ButtonLogin, Display } from "./styles";

//COMPONENTS
import ButtonSnackBar from "../SnackBar";

const LoginComponent = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    email: yup.string().min(6).required(),

    password: yup.string().min(6).required(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const handleForm = (result) => {
    axios
      .post("https://kenziehub.me/sessions", result)
      .then((res) => {
        window.localStorage.setItem("authToken", res.data.token);
        window.localStorage.setItem(
          "userLogged",
          JSON.stringify(res.data.user)
        );
        dispatch(setAuthenticate(true));
        history.push("/users");
        setOpen(false);
      })
      .catch(() => {
        dispatch(setAuthenticate(false));
        setOpen(true);
      });
  };

  return (
    <Form onSubmit={handleSubmit(handleForm)}>
      <Display>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          inputRef={register}
          size="small"
        />
      </Display>
      <Display>
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          inputRef={register}
          size="small"
          type="password"
        />
      </Display>
      <Display>
        <ButtonLogin type="submit">Login</ButtonLogin>
      </Display>
      {(Object.keys(errors).length !== 0 || open) && (
        <ButtonSnackBar
          open={true}
          message="Oops! Something isn't right. Try again"
          severityValue="error"
        />
      )}
    </Form>
  );
};

export default LoginComponent;
