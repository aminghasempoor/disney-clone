import UserDashboardComponent from "@/components/UserDashboard";
import UserAuth from "@/middlewares/UserAuth";
import WithAuthMiddleware from "@/middlewares/WithAuth";
import React from "react";

function UserDashboard() {
  return (
    // <WithAuthMiddleware>
    //   <UserAuth>
    <UserDashboardComponent />
    //   </UserAuth>
    // </WithAuthMiddleware>
  );
}

export default UserDashboard;
