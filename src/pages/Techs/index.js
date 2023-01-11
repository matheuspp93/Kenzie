import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cover from "../../components/Cover";
import Table from "../../components/Table";
import Modal from "../../components/Modal";

import { addTechsThunk } from "../../store/Modules/Techs/thunk";

import { Container } from "./styles";

const Techs = () => {
  const dispatch = useDispatch();

  const techs = useSelector((state) => state.techs);

  useEffect(() => {
    dispatch(addTechsThunk());
  });

  return (
    <>
      <Cover />
      <Container>
        <h1>Techs</h1>
        <Table data={techs} title="status" />
        <span className="Modal">
          <Modal type="add" page="techs">
            Add
          </Modal>
        </span>
      </Container>
    </>
  );
};
export default Techs;
