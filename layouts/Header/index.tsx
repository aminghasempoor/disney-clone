"use client";
import {
  Button,
  CssBaseline,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { lightTheme, darkTheme } from "@/core/utils/theme";
import LoginIcon from "@mui/icons-material/Login";
import Link from "next/link";
import { LightMode } from "@mui/icons-material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

function HeaderLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          px: 5,
          zIndex: 5,
          position: "absolute",
          width: "100%",
        }}
      >
        <LeftContent />
        <RightContent theme={theme} setTheme={setTheme} />
      </Stack>
      {children}
    </ThemeProvider>
  );
}

export default HeaderLayout;
