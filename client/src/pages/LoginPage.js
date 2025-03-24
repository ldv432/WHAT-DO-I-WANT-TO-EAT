import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginForm from "../components/LoginForm";
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

const LoginPage = () => {
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
        {/* Logo & Branding */}
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

        {/* The actual form */}
        <LoginForm />
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
