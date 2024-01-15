"use client";
import CardMui from "@/core/components/CardMui";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";

const FirstComponent = () => {
  const theme = useTheme();
  const isMediumScreen: boolean = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack>
      <Stack
        sx={{ padding: 5, marginTop: 10 }}
        spacing={2}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          align="center"
          variant={isSmallScreen ? "subtitle2" : "body1"}
          color={"red"}
        >
          INCLUDED IN ALL PLANS
        </Typography>
        <Typography
          align="center"
          variant={isSmallScreen ? "h6" : isMediumScreen ? "h4" : "h1"}
        >
          All The TV You Love
        </Typography>
        <Typography align="center">
          Watch full seasons of exclusive streaming series, current-season
          episodes, hit movies, Hulu Originals, kids shows, and more.
        </Typography>
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ padding: 2, height: "100%" }}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={5}
      >
        <CardMui
          width={500}
          height={500}
          src="/TVshow.jpg"
          title="TV Shows"
          description="Television shows can be viewed live"
        />
        <CardMui
          width={500}
          height={500}
          src="/Movies.jpg"
          title="Movies"
          description="a series of still images were recorded"
        />
        <CardMui
          width={500}
          height={500}
          src="/premium.jpg"
          title="Premiums"
          description="Premium access to all movies"
        />
      </Stack>
      <Stack
        sx={{ padding: 2 }}
        spacing={2}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          align="center"
          variant={isSmallScreen ? "subtitle2" : "body1"}
          color={"red"}
        >
          HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+, ALL WITH ADS
        </Typography>
        <Typography
          variant={isSmallScreen ? "h6" : isMediumScreen ? "h4" : "h2"}
          align="center"
        >
          Live TV Makes It Better
        </Typography>
      </Stack>
    </Stack>
  );
};
export default FirstComponent;
