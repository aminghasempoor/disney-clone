import LoginComponent from "@/components/Login";
import WithoutAuthMiddleware from "@/middlewares/WithoutAuth";
import React from "react";

function login() {
  return (
    <WithoutAuthMiddleware>
      <LoginComponent />
    </WithoutAuthMiddleware>
  );
}

export default login;
