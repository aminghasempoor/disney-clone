import CardMui from "@/core/components/CardMui";
import { Stack, Typography } from "@mui/material";

const FirstComponent = () => {
  return (
    <Stack>
      <Stack
        sx={{ padding: 5 }}
        spacing={2}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography align="center" variant="subtitle1" color={"red"}>
          INCLUDED IN ALL PLANS
        </Typography>
        <Typography align="center" variant="h1">
          All The TV You Love
        </Typography>
        <Typography align="center">
          Watch full seasons of exclusive streaming series, current-season
          episodes, hit movies, Hulu Originals, kids shows, and more.
        </Typography>
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
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
        <Typography align="center" variant="subtitle2" color={"red"}>
          HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+, ALL WITH ADS
        </Typography>
        <Typography variant="h2" align="center">
          Live TV Makes It Better
        </Typography>
      </Stack>
    </Stack>
  );
};
export default FirstComponent;
