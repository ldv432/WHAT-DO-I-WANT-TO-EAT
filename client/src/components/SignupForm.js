import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const SignupForm = () => {
  return (
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
        Sign Up
      </Typography>

      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Enter your email"
          variant="outlined"
          fullWidth
          sx={{ input: { color: "#fff" }, label: { color: "#fff" } }}
          slotProps={{
            input: { style: { color: "#fff" } },
            inputLabel: { style: { color: "#fff" } },
          }}
        />
        <TextField
          label="Enter a password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ input: { color: "#fff" }, label: { color: "#fff" } }}
          slotProps={{
            input: { style: { color: "#fff" } },
            inputLabel: { style: { color: "#fff" } },
          }}
        />
        <TextField
          label="Enter your phone number"
          variant="outlined"
          fullWidth
          sx={{ input: { color: "#fff" }, label: { color: "#fff" } }}
          slotProps={{
            input: { style: { color: "#fff" } },
            inputLabel: { style: { color: "#fff" } },
          }}
        />
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
  );
};

export default SignupForm;
