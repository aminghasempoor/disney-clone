import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

interface Movie {
  backdrop_path: string;
  overview: string;
  title: string;
  release_date: string;
}

interface BannerContentProps {
  movie: Movie; // Specify the type for the movie prop
}

function BannerContent({ movie }: BannerContentProps) {
  const theme = useTheme();
  const isMediumScreen: boolean = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="picture"
        style={{
          width: "100%",
          height: "70vh",
          objectFit: "fill",
          objectPosition: "center",
        }}
      />
      <Stack
        spacing={2}
        sx={{
          position: "absolute",
          top: "30%",
          p: 5,
        }}
      >
        <Typography
          color="white"
          variant={isSmallScreen ? "body1" : isMediumScreen ? "h4" : "h2"}
        >
          {movie?.title}
        </Typography>

        <Typography
          sx={{ width: "70%" }}
          color={"white"}
          variant={isSmallScreen ? "caption" : "body1"}
        >
          {movie?.overview}
        </Typography>
        <Typography color={"white"} variant="body2">
          {movie?.release_date}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default BannerContent;
