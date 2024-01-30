import { Grid } from "@mui/material";
import React from "react";
import SidebarContent from "./SidebarContent";

function ExpertDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Grid container sx={{ pt: 15 }}>
      {/* Left Content with sticky position */}
      <Grid
        item
        sm={2}
        sx={{ position: { sm: "sticky" }, top: 0, height: "100%" }}
      >
        <SidebarContent />
      </Grid>

      {/* Right Content */}
      <Grid item sm={10}>
        {children}
      </Grid>
    </Grid>
  );
}

export default ExpertDashboardLayout;
