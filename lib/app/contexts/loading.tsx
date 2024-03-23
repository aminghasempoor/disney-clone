"use client";
import LoadingHardPage from "@/core/components/LoadingHardPage";
import { createContext, ReactNode, useContext, useState } from "react";

export const LoadingContext = createContext({
  loadingPage: false,
  setLoadingPage: (loading: boolean) => {},
});

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [loadingPage, setLoadingPage] = useState(false);

  return (
    <LoadingContext.Provider value={{ loadingPage, setLoadingPage }}>
      <LoaderWrapper>{children}</LoaderWrapper>
    </LoadingContext.Provider>
  );
};

const LoaderWrapper = ({ children }: { children: ReactNode }) => {
  const { loadingPage } = useContext(LoadingContext);

  return (
    <LoadingHardPage
      loading={loadingPage}
      sx={{}} // Add your styles here
      icon={null}
      width={200}
      height={200}
      label="Loading ..."
    >
      {children}
    </LoadingHardPage>
  );
};
