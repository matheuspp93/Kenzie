import { useSelector } from "react-redux";

// COMPONENTS
import CardUser from "../CardUser";
import SearchBarResults from "../SearchBarResults";

const FindUser = ({ title }) => {
  const data = useSelector(({ data }) => data);
  const user = useSelector(({ user }) => user);

  const findUser = data.filter((item) =>
    item.name.toLowerCase().includes(user)
  );

  return (
    user.length !== 0 &&
    (title === "header" ? (
      <SearchBarResults findUser={findUser} />
    ) : (
      <CardUser findUser={findUser} />
    ))
  );
};

export default FindUser;
