import { Badge, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import LoginIcon from "@mui/icons-material/Login";
import EditNoteIcon from "@mui/icons-material/EditNote";
import React, { useEffect } from "react";
import useUser from "@/lib/app/hooks/useUser";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
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
      {!token ? (
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={3}
          justifyContent={"center"}
        >
          <Link href="/profile">
            <Badge color="primary">
              <NotificationsIcon fontSize="medium" />
            </Badge>
          </Link>
          <Link href="/profile">
            <Button
              sx={{ p: 0 }}
              color="error"
              variant="text"
              endIcon={<PersonIcon />}
            >
              <Typography
                fontWeight={"bold"}
                variant="subtitle1"
                color={"rgb(219, 32, 44)"}
              >
                Profile
              </Typography>
            </Button>
          </Link>
        </Stack>
      ) : (
        <Stack>
          <Link href="/register">
            <Button color="error" variant="text" endIcon={<EditNoteIcon />}>
              <Typography
                fontWeight={"bold"}
                variant="subtitle1"
                color={"rgb(219, 32, 44)"}
              >
                Sign Up
              </Typography>
            </Button>
          </Link>
          <Link href="/login">
            <Button color="error" variant="text" endIcon={<LoginIcon />}>
              <Typography
                fontWeight={"bold"}
                variant="subtitle1"
                color={"rgb(219, 32, 44)"}
              >
                LOG IN
              </Typography>
            </Button>
          </Link>
        </Stack>
      )}
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
