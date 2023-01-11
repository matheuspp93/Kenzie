import { useState } from "react";
import { useDispatch } from "react-redux";

import ModalHeader from "../ModalHeader";
import Rating from "../Rating";
import TextField from "@material-ui/core/TextField";
import Snackbar from "../SnackBar";

import { addData } from "../../store/Modules/Data/actions";
import { addWorksThunk } from "../../store/Modules/Works/thunk";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import axios from "axios";
// STYLES
import { ButtonStyled, FormContainer } from "./styles";

const Edit = ({ page, id, setOpen }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState(1);
  const [snackResponse, setsnackResponse] = useState({
    open: false,
    severity: "",
    message: "",
  });

  const schema = yup.object().shape({
    title: yup.string(),
    status: yup.string(),
    rating: yup.string(),
    description: yup.string(),
    deploy_url: yup.string(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const updateData = () => {
    axios
      .get("https://kenziehub.me/users?perPage=9999999")
      .then((res) => dispatch(addData(res.data)));
  };

  const handleSend = (data) => {
    const token = localStorage.getItem("authToken");

    const infoDecide = (data) => {
      let statusType = " default";

      switch (data.status) {
        case "1":
          statusType = "Iniciante";
          break;
        case "2":
          statusType = "Intermediário";
          break;
        case "3":
          statusType = "Avançado";
          break;
        default:
          statusType = "final";
          break;
      }
      return page === "techs" ? { status: statusType } : data;
    };

    const addInfo = infoDecide(data);

    try {
      axios
        .put(`https://kenziehub.me/users/${page}/${id}`, addInfo, {
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
      setsnackResponse({
        open: true,
        severity: "error",
        message: "Update Error!",
      });
    }
    setOpen(false);
  };
  const { open, severity, message } = snackResponse;
  console.log(snackResponse);
  return (
    <>
      <ModalHeader
        title={` Edit ${page === "techs" ? "Tech" : "work"}`}
        setOpen={setOpen}
      />

      <FormContainer onSubmit={handleSubmit(handleSend)}>
        {page === "techs" ? (
          <>
            <TextField
              id="outlined-basic"
              name="status"
              inputRef={register}
              value={value}
              type="hidden"
              error={!!errors.status}
              helperText={errors.status?.message}
            />
            <span className="Rating">
              <Rating value={value} width={100} setValue={setValue} />
            </span>
          </>
        ) : (
          <>
            <span>
              <TextField
                id="outlined-basic"
                type="text"
                variant="outlined"
                name="title"
                fullWidth
                label="Work"
                inputRef={register}
                error={errors.title}
                helperText={errors.title?.message}
              />
            </span>

            <span>
              <TextField
                id="outlined-basic"
                label=" The Project Url "
                variant="outlined"
                name="deploy_url"
                fullWidth
                inputRef={register}
                error={!!errors.url}
                helperText={errors.url?.message}
              />
            </span>
            <span>
              <TextField
                name="description"
                id="outlined-basic"
                label="Description"
                variant="outlined"
                fullWidth
                inputRef={register}
                multiline
                rows={4}
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            </span>
          </>
        )}
        <ButtonStyled type="submit">Update</ButtonStyled>
      </FormContainer>
      {open && (
        <Snackbar open={open} message={message} severityValue={severity} />
      )}
    </>
  );
};
export default Edit;
