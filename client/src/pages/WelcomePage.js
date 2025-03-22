import React from "react";
import { Button, Container, Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import burgerLogo from "../assets/logo.png";
import "@fontsource/montserrat/900.css"; // 900 for extra bold (closer to Gotham Black)

// Custom MUI Theme
const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          fontSize: "18px",
          padding: "12px 24px",
          borderRadius: "8px",
          textTransform: "uppercase",
          boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
        },
      },
    },
  },
});

const WelcomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
          color: "#FFFFFF",
          backgroundColor: "#1E1E1E",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Logo and Title */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center", // Align logo and text vertically
            justifyContent: "center", // Center everything
            gap: "20px", // Space between logo and text
            flexWrap: "nowrap", // Prevent stacking on larger screens
            width: "100%",
          }}
        >
          {/* Logo */}
          <img src={burgerLogo} alt="Burger Logo" width="160px" />

          {/* Text */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "3rem", md: "5rem" }, // Adjust size based on screen width
              whiteSpace: "nowrap", // Prevent text wrapping
              textAlign: "left",
            }}
          >
            WHAT DO I WANT TO <span style={{ color: "#FF9800" }}>EAT?</span>
          </Typography>
        </Box>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF9800",
              "&:hover": { backgroundColor: "#F57C00" },
            }}
          >
            Get Started
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#008000",
              "&:hover": { backgroundColor: "#006400" },
            }}
          >
            Log In
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#B71C1C",
              "&:hover": { backgroundColor: "#8B0000" },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default WelcomePage;
