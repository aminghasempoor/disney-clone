"use client";
import ExpertAuthComponent from "@/core/components/Middlewares/ExpertAuthComponent";
import useUser from "@/lib/app/hooks/useUser";
import React from "react";
interface Props {
  children: React.ReactNode;
}

function ExpertAuth({ children }: Props) {
  const { user } = useUser();
  console.log(user.permissions);

  const hasPermission =
    user.permissions.length === 0
      ? true
      : user.permissions.some((permission) =>
          user?.permissions?.includes(permission)
        );

  return hasPermission ? <ExpertAuthComponent /> : <>{children}</>;
}

export default ExpertAuth;
