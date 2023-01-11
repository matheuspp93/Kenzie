import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// ACTIONS
import { setAuthenticate } from "../../store/Modules/Authenticated/actions";

// STYLES
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { MenuHamburguer } from "./styles";

const MenuToggle = ({ isAuthenticated }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = !!anchorEl;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleMenu = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    window.localStorage.clear();
    dispatch(setAuthenticate(false));
    history.push("/");
  };

  return (
    <>
      <IconButton
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <MenuHamburguer />
      </IconButton>

      {isAuthenticated ? (
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
          <MenuItem onClick={() => history.push("/users")}>
            Find your favorite Dev
          </MenuItem>
        </Menu>
      ) : (
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={() => history.push("/")}>Login</MenuItem>
          <MenuItem onClick={() => history.push("/register")}>
            Register
          </MenuItem>
          <MenuItem onClick={() => history.push("/users")}>
            Find your favorite Dev
          </MenuItem>
        </Menu>
      )}
    </>
  );
};

export default MenuToggle;
