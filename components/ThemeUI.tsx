"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/core/utils/theme";
import React from "react";

function ThemeUI({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default ThemeUI;
