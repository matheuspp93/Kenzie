import { useLocation } from "react-router-dom";

// COMPONENTS
import MenuPrimary from "../MenuPrimary";
import MenuSecondary from "../MenuSecondary";

const Header = () => {
  const { pathname } = useLocation();

  return pathname === "/" || pathname === "/register" ? (
    <MenuPrimary />
  ) : (
    <MenuSecondary />
  );
};

export default Header;
