"use client";
import WithoutAuthComponent from "@/core/components/Middlewares/WithoutAuthComponent";
import useUser from "@/lib/app/hooks/useUser";

const WithoutAuthMiddleware = ({ children }: { children: React.ReactNode }) => {
  const { isAuth } = useUser();
  return isAuth ? (
    <WithoutAuthComponent backUrlDecodedPath={"/dashboard"} />
  ) : (
    <>{children}</>
  );
};

export default WithoutAuthMiddleware;
