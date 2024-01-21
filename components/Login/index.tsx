"use client";
import { Snackbar, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import LoginContent from "./LoginContent";

function LoginComponent() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Stack sx={{ width: "100%", height: "100%" }}>
      <Snackbar
        open={open}
        autoHideDuration={900}
        onClose={handleClose}
        message="Request has been sent!"
      />
      <img
        src={"/login.jpg"}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100vw",
          height: "100vh",
        }}
        alt="picture"
      />
      <Stack
        sx={{
          position: "fixed",
          backgroundColor: "#121212",
          opacity: 0.6,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
      />
      <Stack
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <Stack
          sx={{
            position: "relative",
            top: "50%",
            left: "48%",
            m: 2,
            transform: "translate(-50%, -50%)",
            maxWidth: "500px",
            backgroundColor: "#121212",
            borderRadius: 4,
            opacity: 0.9,
          }}
        >
          <Stack sx={{ p: 2, height: "100%", width: "100%" }}>
            <Typography
              textAlign={"center"}
              variant="h4"
              fontWeight={"bold"}
              color={"rgb(219, 32, 44)"}
            >
              LOG IN
            </Typography>
            <LoginContent setOpen={setOpen} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default LoginComponent;
