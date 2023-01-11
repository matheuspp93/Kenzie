import Routes from "./Routes";
import { useLocation } from "react-router-dom";

// STYLES
import GlobalStyle from "./global";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const App = () => {
  const matches = useMediaQuery("(max-width:1115px)");
  const { pathname } = useLocation();

  const setOverflow = () => {
    if (pathname === "/" || (pathname === "/register" && !matches)) {
      return "hidden";
    }
    return "auto";
  };
  return (
    <>
      <GlobalStyle overflow={setOverflow()} />
      <Routes />
    </>
  );
};

export default App;
