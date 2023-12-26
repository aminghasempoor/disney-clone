"use client"
import {Container} from "@mui/material";
import useMovies from "@/lib/app/hooks/useMovies";
import Image from "next/image";
import getImagePath from "@/core/components/getImagePath";

const Banner = () => {
    const {moviesList, isLoading, errorEcured} = useMovies()
    console.log(moviesList)

    return(
        <Container>
            {/*<Image src={getImagePath(moviesList[0])} alt={}/>*/}
        </Container>
    )
}
export default Banner