// src/App.jsx
import React, { useState } from "react";
import { CssBaseline, Box } from "@mui/material";
import HeaderComponent from "./components/HeaderComponent";
import SidebarComponent from "./components/SidebarComponent";
import ContentComponent from "./components/ContentComponent";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <HeaderComponent toggleSidebar={toggleSidebar} />
      <SidebarComponent open={sidebarOpen} />
      <ContentComponent />
    </Box>
  );
};

export default App;
