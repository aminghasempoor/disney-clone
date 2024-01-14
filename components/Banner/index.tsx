import { CircularProgress, Paper, Stack, Typography } from "@mui/material";
interface Props {
  moviesList: [];
  isLoading: Boolean;
  errorEcured: Boolean;
}
interface Movie {
  backdrop_path: string;
  overview: string;
  title: string;
  release_date: string;
}

const BannerComponent = ({ moviesList, isLoading, errorEcured }: Props) => {
  const movie: Movie = moviesList[Math.floor(Math.random() * 10)];

  return (
    <Stack>
      <Stack>
        <Stack
          sx={{
            position: "absolute",
            width: "100%",
            height: "70vh",
            background: "linear-gradient(to right, black, transparent)",
          }}
        />
        <Stack>
          <Paper elevation={24}>
            {isLoading ? (
              <Stack
                sx={{ paddingTop: 15 }}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <CircularProgress />
              </Stack>
            ) : (
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
            )}
          </Paper>
        </Stack>
      </Stack>
      <Stack spacing={2} sx={{ position: "absolute", top: "30%", p: 5 }}>
        <Typography color={"white"} variant="h2">
          {movie?.title}
        </Typography>
        <Typography sx={{ width: "70%" }} color={"white"} variant="h6">
          {movie?.overview}
        </Typography>
        <Typography color={"white"} variant="body2">
          {movie?.release_date}
        </Typography>
      </Stack>
    </Stack>
  );
};
export default BannerComponent;
