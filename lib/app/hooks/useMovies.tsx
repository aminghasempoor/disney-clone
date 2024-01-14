"use client";
import { GET_MOVIES } from "@/core/data/apiRoutes";
import { useEffect, useState } from "react";
const useMovies = () => {
  const [moviesList, setMoviesList] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorEcured, setErrorEcured] = useState(false);

  useEffect(() => {
    const url = GET_MOVIES;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`,
      },
    };

    fetch(url, options)
      .then((res) => {
        res.json().then((data) => {
          setMoviesList(data.results);
          setIsLoading(false);
        });
      })
      .then((json) => {})
      .catch((err) => {
        setErrorEcured(true);
        setIsLoading(false);
      });
  }, []);

  return { moviesList, isLoading, errorEcured };
};
export default useMovies;
