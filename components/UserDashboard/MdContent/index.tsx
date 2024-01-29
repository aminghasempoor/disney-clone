import { Grid } from "@mui/material";
import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

function MdContent() {
  return (
    <Grid spacing={3} sx={{ pt: 15 }} container>
      <Grid item sm={2}>
        <LeftContent />
      </Grid>
      <Grid item sm={10}>
        <RightContent />
      </Grid>
    </Grid>
  );
}

export default MdContent;
