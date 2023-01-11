import { useSelector } from "react-redux";

// IMAGES
import backgroundUser from "../../assets/images/users.svg";

//COMPONENTS
import FindUser from "../../components/FindUser";

// STYLES
import { ContainerPrimay, ContainerSecondary } from "./styles";

const Users = () => {
  const data = useSelector(({ data }) => data);
  const user = useSelector(({ user }) => user);

  const findUser = data.filter((item) =>
    item.name.toLowerCase().includes(user)
  );

  return user.length === 0 || findUser.length === 0 ? (
    <ContainerPrimay>
      <img src={backgroundUser} alt="Search your favorite Developer" />
    </ContainerPrimay>
  ) : (
    <ContainerSecondary>
      <FindUser />
    </ContainerSecondary>
  );
};

export default Users;
