import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cover from "../../components/Cover";
import Table from "../../components/Table";
import Modal from "../../components/Modal";

import { addWorksThunk } from "../../store/Modules/Works/thunk";

import { Container } from "./styles";

const Works = () => {
  const dispatch = useDispatch();

  const works = useSelector((state) => state.works);

  useEffect(() => {
    dispatch(addWorksThunk());
  });

  return (
    <>
      <Cover />

      <Container>
        <h1>Works</h1>
        <Table data={works} title="description" />
        <span>
          <Modal type="add" page="works">
            Add
          </Modal>
        </span>
      </Container>
    </>
  );
};

export default Works;
