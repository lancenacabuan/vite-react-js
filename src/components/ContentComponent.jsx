import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";

const ContentComponent = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Typography variant="h4" gutterBottom>
        Welcome to My App
      </Typography>
      <Typography variant="body1">
        This is the main content area. Add your components here!
      </Typography>
    </Box>
  );
};

export default ContentComponent;
