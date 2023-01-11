//COMPONENTS
import Cover from "../../components/Cover";
import ProfileHeader from "../../components/ProfileHeader/index";
import ProfileInfo from "../../components/ProfileInfo/index";
import ProfileGoals from "../../components/ProfileGoals/index";

//STYLES
import { PrimaryContainer, SecondaryContainer } from "./styles";

//HOOKS
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState({ works: [], techs: [] });

  const { id } = useParams();

  const userLogged = () => {
    if (JSON.parse(localStorage.getItem("userLogged")) === null) {
      return true;
    }
    return JSON.parse(localStorage.getItem("userLogged")).id !== id;
  };

  const usersData = useSelector((state) => state.data);

  useEffect(() => {
    const findUser = usersData.find((element) => element.id === id);
    if (findUser !== undefined) {
      setUser(findUser);
    }
  }, [usersData, id]);

  return (
    <>
      <PrimaryContainer>
        <Cover />
        <SecondaryContainer elevation={3}>
          <ProfileHeader data={user} />
          <ProfileInfo data={user} />
          {userLogged() && <ProfileGoals data={user} />}
        </SecondaryContainer>
      </PrimaryContainer>
    </>
  );
};

export default Profile;
