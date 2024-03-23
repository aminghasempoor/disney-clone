"use client";
import { Stack, Typography } from "@mui/material";
import RegisterContent from "./RegisterContent";

function RegisterComponent() {
  return (
    <Stack>
      <Typography
        textAlign={"center"}
        variant="h4"
        sx={{ p: 1 }}
        fontWeight={"bold"}
        color={"rgb(219, 32, 44)"}
      >
        Sign Up
      </Typography>
      <RegisterContent />
    </Stack>
  );
}

export default RegisterComponent;
