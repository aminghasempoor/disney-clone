import ExpertDashboardComponent from "@/components/ExpertDashboard";
import ExpertDashboardLayout from "@/layouts/ExpertDashboard";
import ExpertAuth from "@/middlewares/ExpertAuth";
import WithAuthMiddleware from "@/middlewares/WithAuth";
import React from "react";

function ExpertDashboard() {
  return (
    // <WithAuthMiddleware>
    //   <ExpertAuth>
    <ExpertDashboardLayout>
      <ExpertDashboardComponent />
    </ExpertDashboardLayout>

    //   </ExpertAuth>
    // </WithAuthMiddleware>
  );
}

export default ExpertDashboard;
