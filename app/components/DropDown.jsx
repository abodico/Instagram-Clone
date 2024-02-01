import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

import { ListItemButton, ListItemIcon, Typography } from "@mui/material";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ListItemButton
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          mt: "30px",
          mx: "16px",
          maxHeight: "50px",
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <ListItemIcon>
          <MenuIcon sx={{ fontSize: "30px", color: "#000" }} />
        </ListItemIcon>
        <Typography
          component="p"
          color="black"
          sx={{ display: { lg: "block", xs: "none" } }}
        >
          More
        </Typography>
      </ListItemButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Your activity</MenuItem>
        <MenuItem onClick={handleClose}>Saved</MenuItem>
        <MenuItem onClick={handleClose}>Switch appearance</MenuItem>
        <MenuItem onClick={handleClose}>Report a problem</MenuItem>
      </Menu>
    </div>
  );
}
