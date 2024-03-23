"use client";
import useLoading from "@/lib/app/hooks/useLoading";
import useMovies from "@/lib/app/hooks/useMovies";
import useUser from "@/lib/app/hooks/useUser";
import { useEffect } from "react";

function AppLayout({ children }: { children: React.ReactNode }) {
  const { setLoadingPage } = useLoading();
  const { token, isAuth } = useUser();
  const { isLoading } = useMovies();

  useEffect(() => {
    if (token) {
      if (isAuth) {
        setLoadingPage(false);
        return;
      }
      setLoadingPage(true);
      return;
    }
    setLoadingPage(false);
    return;
  }, [token, isAuth, isLoading]);

  return <>{children}</>;
}

export default AppLayout;
