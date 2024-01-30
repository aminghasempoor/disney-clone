"use client";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import SmContent from "./SmContent";
import MdContent from "./MdContent";

function UserDashboardComponent() {
  const theme = useTheme();
  const isUpSm = useMediaQuery(theme.breakpoints.up("md"));
  return <Stack>{isUpSm ? <MdContent /> : <SmContent />}</Stack>;
}

export default UserDashboardComponent;
