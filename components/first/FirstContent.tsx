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
import backgroundImage from "@/public/images/header-image.png";
import Image from "next/image";

function FirstContent() {
  const theme = useTheme();
  const isMediumScreen: boolean = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack>
      <Image
        src={backgroundImage}
        fill
        priority
        style={{ objectFit: "cover" }}
        alt="BackgroundImage"
      />
      <Stack
        sx={{
          backgroundColor: "#000",
          opacity: 0.3,
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
            variant={isSmallScreen ? "h4" : isMediumScreen ? "h3" : "h2"}
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
        <Stack
          sx={{ px: 2 }}
          direction={"column"}
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography align="center" variant={isMediumScreen ? "h6" : "h5"}>
            Ready to watch ? Enter Your Email.
          </Typography>
          <Grid
            sx={{
              width: "70%",
            }}
            direction="row"
            justifyContent="center"
            alignItems="center"
            container
            spacing={2}
          >
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
              <Button size="large" variant="outlined" sx={{ width: "100%" }}>
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
