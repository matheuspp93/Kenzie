// STYLES
import { CgClose } from "react-icons/cg";
import { HeaderContainer } from "./styles";

const ModalHeader = ({ title, setOpen }) => {
  return (
    <HeaderContainer>
      <h2>{title}</h2>
      <CgClose onClick={() => setOpen(false)} />
    </HeaderContainer>
  );
};

export default ModalHeader;
