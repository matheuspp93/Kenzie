//IMAGES
import imageDesktop from "../../assets/images/register.svg";
import imageMobile from "../../assets/images/register-mobile.svg";

//COMPONENTS
import RegisterForm from "../../components/RegisterForm";

//STYLES
import { Container, BoxPrimary, BoxSecondary, Title } from "./styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Register = () => {
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
          <Title>Register</Title>
          <RegisterForm />
        </BoxSecondary>
      </Container>
    </>
  );
};

export default Register;
