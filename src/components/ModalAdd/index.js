import { useState } from "react";
import { useDispatch } from "react-redux";

import ModalHeader from "../ModalHeader";
import Rating from "../Rating";
import TextField from "@material-ui/core/TextField";

import { addData } from "../../store/Modules/Data/actions";

import { addWorksThunk } from "../../store/Modules/Works/thunk";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import axios from "axios";

import { ButtonStyled, FormContainer } from "./styles";

const Add = ({ page, setOpen }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState(1);

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
      let statusType = "default";
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
      return page === "techs"
        ? { title: data.title, status: statusType }
        : data;
    };
    const addInfo = infoDecide(data);
    try {
      axios
        .post(`https://kenziehub.me/users/${page}`, addInfo, {
          headers: {
            Authorization: `Bearer: ${token}`,
            "Content-type": "application/json",
          },
        })
        .then((res) => dispatch(addWorksThunk()))
        .then((res) => updateData());
    } catch (error) {
      console.error(error);
    }
    setOpen(false);
  };

  return (
    <>
      <ModalHeader
        title={`Add ${page === "techs" ? "Tech" : "Work"}`}
        setOpen={setOpen}
      />

      <FormContainer onSubmit={handleSubmit(handleSend)}>
        {page === "techs" ? (
          <>
            <span>
              <TextField
                id="outlined-basic"
                label="Trabalho"
                variant="outlined"
                type="text"
                name="title"
                fullWidth
                inputRef={register}
                error={errors.title}
                helperText={errors.title?.message}
              />
            </span>

            <TextField
              name="status"
              id="status"
              inputRef={register}
              value={value}
              type="hidden"
              error={!!errors.status}
              helperText={errors.status?.message}
            />
            <span>
              <Rating value={value} setValue={setValue} />
            </span>
          </>
        ) : (
          <>
            <span>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                type="text"
                name="title"
                fullWidth
                inputRef={register}
                error={errors.title}
                helperText={errors.title?.message}
              />
            </span>

            <span>
              <TextField
                id="outlined-basic"
                label="The Project Url "
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
                id="outlined-basic"
                variant="outlined"
                name="description"
                label="Description"
                inputRef={register}
                fullWidth
                rows={4}
                multiline
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            </span>
          </>
        )}
        <ButtonStyled type="submit">Add</ButtonStyled>
      </FormContainer>
    </>
  );
};
export default Add;
