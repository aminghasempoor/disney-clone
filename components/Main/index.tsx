import CardMui from "@/core/components/CardMui";
import { Card, Paper, Stack, Typography } from "@mui/material";

const MainComponent = () => {
  return (
    <Stack>
      <Stack>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "70vh",
            background: "linear-gradient(to right, black, transparent)",
          }}
        />
        <Paper elevation={5}>
          <img
            src={"/Movies.jpg"}
            alt="picture"
            style={{
              width: "100vw",
              height: "70vh",
              objectFit: "fill",
              objectPosition: "center",
            }}
          />
        </Paper>
      </Stack>
      <Stack spacing={2} sx={{ position: "absolute", top: "30%", p: 5 }}>
        <Typography color={"white"} variant="h2">
          Movies
        </Typography>
        <Typography color={"white"} variant="h6">
          Stream box office hits, classic cinema, acclaimed indies, inspiring
          documentaries, and much more.
        </Typography>
        <Typography color={"white"} variant="body2">
          2023/07/09
        </Typography>
      </Stack>
    </Stack>
  );
};
export default MainComponent;
