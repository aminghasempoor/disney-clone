"use client";
import {
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
interface Props {
  title: string;
  description: string;
  imageURL: string;
  reverseLayout?: boolean;
}

function SecondContent({ title, description, imageURL, reverseLayout }: Props) {
  const theme = useTheme();
  const isMediumScreen: boolean = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down("sm"));
  const flexDirection = reverseLayout ? "row-reverse" : "row";
  return (
    <Stack
      direction={{ xs: "column", sm: flexDirection }}
      justifyContent={"space-around"}
      alignItems={"center"}
      spacing={3}
    >
      <Stack sx={{ px: 3 }} spacing={3}>
        <Typography
          fontWeight={"bold"}
          align="center"
          variant={isSmallScreen ? "h5" : isMediumScreen ? "h4" : "h3"}
        >
          {title}
        </Typography>
        <Typography
          align="center"
          variant={isSmallScreen ? "subtitle1" : isMediumScreen ? "h5" : "h4"}
        >
          {description}
        </Typography>
      </Stack>
      <Stack>
        <img
          src={imageURL}
          alt="picture"
          style={{ width: 500, height: 500, borderRadius: 2 }}
        />
      </Stack>
    </Stack>
  );
}

export default SecondContent;
