"use client";
import MovieCard from "@/core/components/MovieCard";
import { IconButton, Skeleton, Stack } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import React, { useRef, useState } from "react";
import RowSkeleton from "./RowSkeleton";
import RowContent from "./RowContent";
import MdChevrons from "@/core/components/MdChevrons";
interface Movie {
  title: string;
  overview: string;
  backdrop_path: string;
  release_date: string;
}
interface Props {
  moviesList: Movie[];
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
      <Stack
        sx={{
          overflowX: "hidden",
          width: "100%",
          py: 2,
          my: 2,
          scrollBehavior: "smooth",
        }}
        ref={containerRef}
        direction={"row"}
        spacing={2}
      >
        <MdChevrons
          position="left"
          icon={ChevronLeftIcon}
          handleScroll={handleScroll}
          isHovered={isHovered}
        />
        {isLoading ? (
          <RowSkeleton />
        ) : (
          // Render MovieCard components when not loading
          moviesList.map((movie: Movie, index) => (
            <RowContent movie={movie} key={index} />
          ))
        )}
        <MdChevrons
          position="right"
          icon={ChevronRightIcon}
          handleScroll={handleScroll}
          isHovered={isHovered}
        />
      </Stack>
    </Stack>
  );
}

export default RowComponent;
