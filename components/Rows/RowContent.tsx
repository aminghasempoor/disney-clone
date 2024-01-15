import MovieCard from "@/core/components/MovieCard";
import { Stack } from "@mui/material";
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
function RowContent({ movie }: BannerContentProps) {
  return (
    <Stack sx={{ height: "100%", width: "100%" }}>
      <MovieCard
        title={movie.title}
        description={movie.overview}
        imageURL={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
      />
    </Stack>
  );
}

export default RowContent;
