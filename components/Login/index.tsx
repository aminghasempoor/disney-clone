"use client";
import { Stack, Typography } from "@mui/material";
import LoginContent from "./LoginContent";

function LoginComponent() {
  return (
    <Stack>
      <Typography
        sx={{ p: 1 }}
        textAlign={"center"}
        variant="h4"
        fontWeight={"bold"}
        color={"rgb(219, 32, 44)"}
      >
        LOG IN
      </Typography>
      <LoginContent />
    </Stack>
  );
}

export default LoginComponent;
