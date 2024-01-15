import { useContext } from "react";
import { LoadingContext } from "../contexts/loading";

const useLoading = () => {
  const { setLoadingPage } = useContext(LoadingContext);

  return { setLoadingPage };
};

export default useLoading;
