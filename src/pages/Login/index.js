//IMAGES
import imageDesktop from "../../assets/images/login.svg";
import imageMobile from "../../assets/images/login-mobile.svg";

//COMPONENTS
import LoginComponent from "../../components/LoginForm";

//STYLES

import { BoxPrimary, BoxSecondary, Title, Container } from "./styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Login = () => {
  const matches = useMediaQuery("(max-width:1115px)");
  return (
    <>
      <Container>
        <BoxPrimary>
          {matches ? (
            <img src={imageMobile} alt="Log yourself in!" />
          ) : (
            <img src={imageDesktop} alt="Log yourself in!" />
          )}
        </BoxPrimary>
        <BoxSecondary>
          <Title>Login</Title>
          <LoginComponent />
        </BoxSecondary>
      </Container>
    </>
  );
};

export default Login;
