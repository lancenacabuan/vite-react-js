// src/components/Sidebar.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBills } from "@fortawesome/free-solid-svg-icons"; // Import the icon you need
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  Toolbar,
  Box,
} from "@mui/material";
import { ExpandLess, ExpandMore, ChevronRight } from "@mui/icons-material";

const drawerWidth = 240;

const Sidebar = ({ open }) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Drawer
      variant="persistent"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {/* Main Collapsible Item with Font Awesome Icon */}
          <ListItem button onClick={handleToggleCollapse}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faMoneyBills} size="2x" />{" "}
              {/* Makes icon 2x larger */}
            </ListItemIcon>
            <ListItemText primary="Petty Cash" />
            {collapsed ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          {/* Collapsible Children */}
          <Collapse in={!collapsed} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ChevronRight />
                </ListItemIcon>
                <ListItemText primary="Cash Advance" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ChevronRight />
                </ListItemIcon>
                <ListItemText primary="Liquidation / Reimbursement" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ChevronRight />
                </ListItemIcon>
                <ListItemText primary="Cancelled CA" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
