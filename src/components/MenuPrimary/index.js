import { Link } from "react-router-dom";

//STYLES
import { ContainerPrimary, Navigate } from "./styles";

const MenuPrimary = () => {
  return (
    <ContainerPrimary>
      <Navigate>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/users">Find your favorite Dev</Link>
          </li>
        </ul>
      </Navigate>
    </ContainerPrimary>
  );
};

export default MenuPrimary;
