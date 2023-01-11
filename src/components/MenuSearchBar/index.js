import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/Modules/User/actions";

//COMPONENTS
import FindUser from "../FindUser";

// STYLES
import { Search } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";

const MenuSearchBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user);
  return (
    <>
      <Search isActive={user.length !== 0 ? true : false}>
        <input
          type="text"
          placeholder="Search your favorite Dev"
          onChange={(e) => dispatch(addUser(e.target.value.toLowerCase()))}
          value={user}
        />
        <AiOutlineSearch />
      </Search>
      <FindUser title="header" />
    </>
  );
};

export default MenuSearchBar;
