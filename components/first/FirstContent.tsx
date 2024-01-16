"use client";
import {
  Button,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

function FirstContent() {
  const theme = useTheme();
  const isMediumScreen: boolean = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack>
      <img
        src={"/images/header-image.png"}
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
          position: "absolute",
          backgroundColor: "#010101",
          opacity: 0.6,
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
        }}
      />
      <Stack
        spacing={3}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Stack>
          <Typography
            align="center"
            variant={isSmallScreen ? "h6" : isMediumScreen ? "h4" : "h1"}
          >
            Unlimited Movies, TV shows
          </Typography>
          <Typography
            align="center"
            variant={isSmallScreen ? "body1" : isMediumScreen ? "h6" : "h4"}
            color={"red"}
          >
            Watch Anywhere Cancel Anytime
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <Typography
            align="center"
            variant={
              isSmallScreen
                ? "body1"
                : isMediumScreen
                ? "subtitle2"
                : "subtitle1"
            }
          >
            Ready to watch ? Enter Your Email.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={3}
          >
            <TextField
              size="small"
              fullWidth
              color="primary"
              label="Email Address"
              variant="outlined"
            />
            <Button
              size="large"
              variant="outlined"
              sx={{ bgcolor: "red", width: "100%" }}
              color="error"
            >
              Get Started!!!
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default FirstContent;
