import ExpertDashboardComponent from "@/components/ExpertDashboard";
import ExpertAuth from "@/middlewares/ExpertAuth";
import WithAuthMiddleware from "@/middlewares/WithAuth";
import React from "react";

function ExpertDashboard() {
  return (
    <WithAuthMiddleware>
      <ExpertAuth>
        <ExpertDashboardComponent />
      </ExpertAuth>
    </WithAuthMiddleware>
  );
}

export default ExpertDashboard;
