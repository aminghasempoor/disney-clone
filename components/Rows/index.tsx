"use client";
import MovieCard from "@/core/components/MovieCard";
import { CircularProgress, IconButton, Stack } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import React, { useRef, useState } from "react";
interface Movie {
  title: string;
  overview: string;
  backdrop_path: string;
}
interface Props {
  moviesList: [];
  isLoading: Boolean;
  errorEcured: Boolean;
}

function RowComponent({ moviesList, isLoading, errorEcured }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = (scrollOffset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <Stack
      sx={{
        position: "relative",
        "&:hover": {
          "& .chevron": {
            opacity: 1,
          },
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isLoading ? (
        <Stack
          sx={{ paddingTop: 15 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <CircularProgress />
        </Stack>
      ) : (
        <Stack
          sx={{
            overflowX: "hidden",
            width: "100%",
            py: 2,
            my: 2,
          }}
          ref={containerRef}
          direction={"row"}
          spacing={2}
        >
          <IconButton
            className="chevron"
            sx={{
              zIndex: 1,
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              height: 50,
              color: "red",
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.3s",
            }}
            onClick={() => handleScroll(-200)} // Adjust the scroll offset as needed
          >
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
          {moviesList.map((movie: Movie, index) => {
            return (
              <Stack key={index}>
                <MovieCard
                  title={movie.title}
                  description={movie.overview}
                  imageURL={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                />
              </Stack>
            );
          })}
          <IconButton
            className="chevron"
            sx={{
              zIndex: 1,
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
              height: 50,
              color: "red",
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.3s",
            }}
            onClick={() => handleScroll(200)} // Adjust the scroll offset as needed
          >
            <ChevronRightIcon fontSize="large" />
          </IconButton>
        </Stack>
      )}
    </Stack>
  );
}

export default RowComponent;
