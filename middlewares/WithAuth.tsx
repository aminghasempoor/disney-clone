"use client";
import WithAuthComponent from "@/core/components/Middlewares/WithAuthComponent";
import useUser from "@/lib/app/hooks/useUser";

const WithAuthMiddleware = ({ children }: { children: React.ReactNode }) => {
  const { isAuth } = useUser();
  console.log(isAuth);
  return isAuth ? <>{children}</> : <WithAuthComponent />;
};

export default WithAuthMiddleware;
