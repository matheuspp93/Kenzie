//COMPONENT
import Modal from "../../components/Modal";

//HOOKS
import { useHistory } from "react-router-dom";
import { useState } from "react";

//STYLES
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { BiDotsVerticalRounded } from "react-icons/bi";

const ITEM_HEIGHT = 48;

const LongMenu = ({ id }) => {
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <BiDotsVerticalRounded />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem onClick={() => history.push(`/users/works/${id}`)}>
          Update Works
        </MenuItem>
        <MenuItem onClick={() => history.push(`/users/techs/${id}`)}>
          Update Techs
        </MenuItem>
        <MenuItem>
          <Modal setAnchorEl={setAnchorEl} type="update">
            Update Profile
          </Modal>
        </MenuItem>
        <MenuItem>
          <Modal setAnchorEl={setAnchorEl} type="changePassword">
            Change Password
          </Modal>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LongMenu;
