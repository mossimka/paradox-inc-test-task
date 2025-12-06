import React from "react";

import { Box, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box sx={{ textAlign: "center", mb: 6 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Document Assistant
      </Typography>
      <Typography variant="h5" color="text.secondary" sx={{ mb: 6 }}>
        Test Task: Document Management & AI Chat Interface
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ maxWidth: 800, mx: "auto" }}
      >
        A mini-interface for managing documents and interacting with a chat
        assistant. Built with Next.js, TypeScript, Material-UI, and WebSocket
        integration.
      </Typography>
    </Box>
  );
};

export default HeroSection;
