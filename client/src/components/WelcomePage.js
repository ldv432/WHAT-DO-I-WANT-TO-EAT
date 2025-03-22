import React, { useState } from "react";
import { Button, Container, Box, Typography, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import burgerLogo from "../assets/logo.png";
import "@fontsource/montserrat/900.css";

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
  const [activeForm, setActiveForm] = useState(null);

  const handleToggleForm = (formType) => {
    setActiveForm(formType);
  };

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
          gap: 4,
        }}
      >
        {/* Logo & Title */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "nowrap",
            width: "100%",
          }}
        >
          <img src={burgerLogo} alt="Burger Logo" width="160px" />
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "3rem", md: "5rem" },
              whiteSpace: "nowrap",
              textAlign: "left",
            }}
          >
            WHAT DO I WANT TO <span style={{ color: "#FF9800" }}>EAT?</span>
          </Typography>
        </Box>

        {/* Buttons */}
        <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
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
            onClick={() => handleToggleForm("login")}
          >
            Log In
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#B71C1C",
              "&:hover": { backgroundColor: "#8B0000" },
            }}
            onClick={() => handleToggleForm("signup")}
          >
            Sign Up
          </Button>
        </Box>

        {/* Dynamic Login or Signup Form */}
        {(activeForm === "login" || activeForm === "signup") && (
  <Box
    sx={{
      mt: 3,
      backgroundColor: "#2C2C2C",
      p: 4,
      borderRadius: 2,
      width: "100%",
      maxWidth: "400px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
    }}
  >
    <Typography variant="h5" gutterBottom>
      {activeForm === "login" ? "Log In" : "Sign Up"}
    </Typography>

    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        label={activeForm === "login" ? "Email" : "Enter your email"}
        variant="outlined"
        fullWidth
        sx={{
          input: { color: "#fff" },
          label: { color: "#fff" },
        }}
        slotProps={{
          input: { style: { color: "#fff" } },
          inputLabel: { style: { color: "#fff" } },
        }}
      />

      <TextField
        label={activeForm === "login" ? "Password" : "Enter a password"}
        type="password"
        variant="outlined"
        fullWidth
        sx={{
          input: { color: "#fff" },
          label: { color: "#fff" },
        }}
        slotProps={{
          input: { style: { color: "#fff" } },
          inputLabel: { style: { color: "#fff" } },
        }}
      />

      {activeForm === "signup" && (
        <TextField
          label="Enter your phone number"
          variant="outlined"
          fullWidth
          sx={{
            input: { color: "#fff" },
            label: { color: "#fff" },
          }}
          slotProps={{
            input: { style: { color: "#fff" } },
            inputLabel: { style: { color: "#fff" } },
          }}
        />
      )}

      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "#FF9800",
          "&:hover": { backgroundColor: "#F57C00" },
        }}
      >
        Submit
      </Button>
    </Box>
  </Box>
)}

      </Container>
    </ThemeProvider>
  );
};

export default WelcomePage;
