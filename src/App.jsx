// src/App.jsx
import React, { useState } from "react";
import { CssBaseline, Box } from "@mui/material";
import Header from "./components/HeaderComponent";
import Sidebar from "./components/SidebarComponent";
import ContentComponent from "./components/ContentComponent";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // State to manage sidebar open/close

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar open={sidebarOpen} />
      <ContentComponent />
    </Box>
  );
};

export default App;
