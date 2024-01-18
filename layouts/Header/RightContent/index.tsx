import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import useUser from "@/lib/app/hooks/useUser";
import AuthContent from "./AuthContent";
import WithoutAuthContent from "./WithoutAuthContent";
interface Props {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

function RightContent({ theme, setTheme }: Props) {
  const { token } = useUser();
  //toggle theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setTheme(storedTheme || "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  //toggle theme

  return (
    <Stack direction="row" spacing={2}>
      {!token ? <AuthContent /> : <WithoutAuthContent />}
      {/* <Button onClick={toggleTheme}>
            {theme === "dark" ? (
              <LightMode sx={{ color: "#CBB33B" }} />
            ) : (
              <DarkModeIcon sx={{ color: "#A09C96" }} />
            )}
          </Button> */}
    </Stack>
  );
}

export default RightContent;
