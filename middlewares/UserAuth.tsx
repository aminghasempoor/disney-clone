"use client";
import UserAuthComponent from "@/core/components/Middlewares/UserAuthComponent";
import useUser from "@/lib/app/hooks/useUser";
import React from "react";

function UserAuth({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  return user.role === "user" ? <>{children}</> : <UserAuthComponent />;
}

export default UserAuth;
