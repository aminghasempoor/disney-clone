import DashboardComponent from "@/components/Dashboard";
import WithAuthMiddleware from "@/middlewares/WithAuth";
import React from "react";

function page() {
  return (
    <WithAuthMiddleware>
      <DashboardComponent />
    </WithAuthMiddleware>
  );
}

export default page;
