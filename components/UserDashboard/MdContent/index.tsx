import { Grid } from "@mui/material";
import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

function MdContent() {
  return (
    <Grid container sx={{ pt: 15 }}>
      {/* Left Content with sticky position */}
      <Grid
        item
        sm={2}
        sx={{ position: { sm: "sticky" }, top: 0, height: "100%" }}
      >
        <LeftContent />
      </Grid>

      {/* Right Content */}
      <Grid item sm={10}>
        <RightContent />
      </Grid>
    </Grid>
  );
}

export default MdContent;
