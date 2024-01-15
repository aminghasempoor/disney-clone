import { Stack } from "@mui/material";
import BannerSkeleton from "./BannerSkeleton";
import BannerContent from "./BannerContent";
interface Props {
  moviesList: Movie[];
  isLoading: boolean;
  errorEcured: boolean;
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
            background: "linear-gradient(to bottom right, black, transparent)",
          }}
        />
        <Stack>
          {isLoading ? <BannerSkeleton /> : <BannerContent movie={movie} />}
        </Stack>
      </Stack>
    </Stack>
  );
};
export default BannerComponent;
