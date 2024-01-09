"use client";
import { CircularProgress, Stack } from "@mui/material";
import useMovies from "@/lib/app/hooks/useMovies";
import getImagePath from "@/core/components/getImagePath";

const Banner = () => {
  const { moviesList, isLoading, errorEcured } = useMovies();

  return (
    <Stack>
      {isLoading ? (
        <Stack
          sx={{ my: 10 }}
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <CircularProgress />
        </Stack>
      ) : (
        <Stack style={{ position: "relative" }}>
          <img
            src={getImagePath(moviesList[3].backdrop_path, true)}
            alt={"picture"}
            width="1920"
            style={{ height: 800, boxShadow: "0px 0px 20px black" }}
          />
          <h3
            style={{
              position: "absolute",
              top: "50%",
              color: "white",
              textShadow: "2px 2px 4px black",
            }}
          >
            {moviesList[3].overview}
          </h3>
        </Stack>
      )}
    </Stack>
  );
};
export default Banner;
