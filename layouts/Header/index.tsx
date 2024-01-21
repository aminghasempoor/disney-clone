"use client";
import { Stack } from "@mui/material";
import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

function HeaderLayout() {
  return (
    <Stack
      spacing={4}
      direction={"row"}
      alignItems="center"
      justifyContent={"space-between"}
      sx={{
        px: 5,
        zIndex: 5,
        position: "absolute",
        width: "100%",
      }}
    >
      <LeftContent />
      <RightContent />
    </Stack>
  );
}

export default HeaderLayout;
