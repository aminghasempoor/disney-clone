import { Paper, Skeleton, Stack, Typography } from "@mui/material";
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
          {isLoading ? (
            <Stack>
              <Skeleton
                sx={{ bgcolor: "gray.700" }}
                variant="rectangular"
                width={"100%"}
                height={"70vh"}
              />
              <Skeleton
                variant="text"
                width={"20%"}
                height={"10%"}
                sx={{
                  position: "absolute",
                  top: "30%",
                  mx: 2,
                  bgcolor: "gray.700",
                }}
              />
              <Skeleton
                variant="text"
                width={"60%"}
                height={"27%"}
                sx={{
                  position: "absolute",
                  top: "33%",
                  mx: 2,
                  bgcolor: "gray.700",
                }}
              />
            </Stack>
          ) : (
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
                sx={{ position: "absolute", top: "30%", p: 5 }}
              >
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
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
export default BannerComponent;
