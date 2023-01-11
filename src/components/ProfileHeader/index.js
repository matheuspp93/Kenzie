//COMPONENTS
import ProfileImage from "../../components/ProfileImage/index";
import ProfileMenu from "../../components/ProfileMenu/index";

//STYLE
import { Container, Box } from "./style";

const ProfileHeader = ({ data }) => {
  const getUserLogged = localStorage.getItem("userLogged");

  const { name, avatar_url } = data;

  const verifyUserLogged = () => {
    if (JSON.parse(getUserLogged) !== null) {
      return JSON.parse(getUserLogged).id === data.id;
    }
    return false;
  };

  const userLogged = () => {
    if (JSON.parse(localStorage.getItem("userLogged")) !== null) {
      return JSON.parse(localStorage.getItem("userLogged")).id === data.id;
    }
  };

  return (
    <Container>
      <Box>
        <ProfileImage
          avatar={avatar_url}
          verifyUserLogged={verifyUserLogged()}
        />
        <h1>{name}</h1>
      </Box>
      {userLogged() && <ProfileMenu id={data.id} />}
    </Container>
  );
};

export default ProfileHeader;
