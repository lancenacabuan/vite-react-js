import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBills } from "@fortawesome/free-solid-svg-icons";
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

const drawerWidth = 350;

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
          <ListItem onClick={handleToggleCollapse} sx={{ cursor: "pointer" }}>
            <ListItemIcon>
              <FontAwesomeIcon icon={faMoneyBills} />
            </ListItemIcon>
            <ListItemText primary="Petty Cash" />
            {collapsed ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          {/* Collapsible Children */}
          <Collapse in={!collapsed} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem sx={{ pl: 4, cursor: "pointer" }}>
                <ListItemIcon>
                  <ChevronRight />
                </ListItemIcon>
                <ListItemText primary="Cash Advance" />
              </ListItem>
              <ListItem sx={{ pl: 4, cursor: "pointer" }}>
                <ListItemIcon>
                  <ChevronRight />
                </ListItemIcon>
                <ListItemText primary="Liquidation / Reimbursement" />
              </ListItem>
              <ListItem sx={{ pl: 4, cursor: "pointer" }}>
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
