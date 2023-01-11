import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// COMPONENTS
import MenuToggle from "../MenuToggle";
import MenuSearchBar from "../MenuSearchBar";
import MenuList from "../MenuList";

// STYLES
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Navigation, Container } from "./styles";

const MenuSecondary = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const { pathname } = useLocation();

  const authenticated = useSelector(({ authenticated }) => authenticated);

  return (
    <Container>
      <Navigation>
        {matches ? (
          <MenuToggle isAuthenticated={authenticated} />
        ) : (
          <MenuList isAuthenticated={authenticated} />
        )}
        {pathname === "/users" && <MenuSearchBar />}
      </Navigation>
    </Container>
  );
};

export default MenuSecondary;
