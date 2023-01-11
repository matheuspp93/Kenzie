import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// ACTIONS
import { setAuthenticate } from "../../store/Modules/Authenticated/actions";

const MenuList = ({ isAuthenticated }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    window.localStorage.clear();
    dispatch(setAuthenticate(false));
    history.push("/");
  };

  return isAuthenticated ? (
    <ul>
      <li>
        <button onClick={() => handleLogout()}>Logout</button>
      </li>
      <li>
        <Link to="/users">Find your favorite Dev</Link>
      </li>
    </ul>
  ) : (
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
  );
};
export default MenuList;
