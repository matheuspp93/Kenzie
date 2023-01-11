import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/Modules/User/actions";
// ACTIONS

// STYLES
import { List, ListNotFound } from "./styles";

const SearchBarResults = ({ findUser }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const chosenUser = (user) => {
    dispatch(addUser(""));
    history.push(`/users/profile/${user.id}`);
  };

  return findUser.length !== 0 ? (
    <List>
      {findUser.map((user, index) => (
        <li key={index}>
          <button onClick={() => chosenUser(user)}>{user.name}</button>
        </li>
      ))}
    </List>
  ) : (
    <ListNotFound>
      <li>Nenhum resultado encontrado</li>
    </ListNotFound>
  );
};

export default SearchBarResults;
