"use client";
import BannerComponent from "@/components/Banner";
import RowComponent from "@/components/Rows";
import useMovies from "@/lib/app/hooks/useMovies";

export default function Main() {
  const { moviesList, isLoading, errorEcured } = useMovies();

  return (
    <>
      <BannerComponent
        moviesList={moviesList}
        isLoading={isLoading}
        errorEcured={errorEcured}
      />
      <RowComponent
        moviesList={moviesList}
        isLoading={isLoading}
        errorEcured={errorEcured}
      />
      <RowComponent
        moviesList={moviesList}
        isLoading={isLoading}
        errorEcured={errorEcured}
      />
      <RowComponent
        moviesList={moviesList}
        isLoading={isLoading}
        errorEcured={errorEcured}
      />
      <RowComponent
        moviesList={moviesList}
        isLoading={isLoading}
        errorEcured={errorEcured}
      />
    </>
  );
}
