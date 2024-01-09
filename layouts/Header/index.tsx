"use client";
import { Button, CssBaseline, Stack } from "@mui/material";
import { lightTheme, darkTheme } from "@/core/utils/theme";
import LoginIcon from "@mui/icons-material/Login";
import Link from "next/link";
import { LightMode } from "@mui/icons-material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import LogoSvg from "@/core/components/svgs/LogoSvg";

function HeaderLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setTheme(storedTheme || "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

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
        <Stack>
          <Link href={"/"}>
            <LogoSvg width={120} height={80} />
          </Link>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Link href="/login">
            <Button color="error" variant="text" endIcon={<LoginIcon />}>
              LOG IN
            </Button>
          </Link>
          <Button onClick={toggleTheme}>
            {theme === "dark" ? <LightMode /> : <DarkModeIcon />}
          </Button>
        </Stack>
      </Stack>
      {children}
    </ThemeProvider>
  );
}

export default HeaderLayout;
