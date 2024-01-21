"use client";
import {
  Button,
  Grid,
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
          width: "100%",
          px: 2,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Stack spacing={2}>
          <Typography
            align="center"
            fontWeight={"bold"}
            variant={isSmallScreen ? "h4" : isMediumScreen ? "h3" : "h1"}
          >
            Unlimited Movies, TV shows
          </Typography>
          <Typography
            align="center"
            fontWeight={"bold"}
            variant={isSmallScreen ? "h6" : isMediumScreen ? "h5" : "h4"}
            color={"red"}
          >
            Watch Anywhere Cancel Anytime
          </Typography>
        </Stack>
        <Stack sx={{ px: 2 }} spacing={2}>
          <Typography
            align="center"
            variant={isMediumScreen ? "subtitle1" : "h6"}
          >
            Ready to watch ? Enter Your Email.
          </Typography>
          <Grid sx={{ px: 5 }} container spacing={2}>
            <Grid item xs={12} md={8}>
              <TextField
                size="small"
                fullWidth
                color="primary"
                label="Email Address"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Button
                size="large"
                variant="outlined"
                sx={{ bgcolor: "red", width: "100%" }}
                color="error"
              >
                Get Started!!!
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default FirstContent;
