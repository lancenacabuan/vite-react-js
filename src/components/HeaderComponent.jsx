import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

const Header = ({ toggleSidebar }) => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        {/* Menu icon toggles the sidebar */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, cursor: "pointer" }}
          onClick={toggleSidebar}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap sx={{ cursor: "pointer" }}>
          Expenses Management System
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
