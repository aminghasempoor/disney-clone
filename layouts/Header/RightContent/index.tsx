import {
  Drawer,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import useUser from "@/lib/app/hooks/useUser";
import AuthContent from "./AuthContent";
import WithoutAuthContent from "./WithoutAuthContent";
import NetflixPlusLogo from "@/core/components/svgs/NetflixPlusLogo";
import Link from "next/link";

function RightContent() {
  const { token } = useUser();
  const theme = useTheme();
  const isUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Stack
      sx={{ width: "100%" }}
      direction="row"
      justifyContent={isUpSm ? "space-between" : "end"}
      spacing={2}
    >
      {isUpSm ? (
        <>
          <Stack direction={"row"} alignItems={"center"} spacing={3}>
            <Link href={"/"}>
              <Typography fontWeight={"bold"}>Home</Typography>
            </Link>
            <Link href={"/main"}>
              <Typography fontWeight={"bold"}>Movies</Typography>
            </Link>
            <Tooltip title="Netflix+   Coming Soon">
              <IconButton sx={{ p: 0 }}>
                <NetflixPlusLogo width={25} height={25} />
              </IconButton>
            </Tooltip>
          </Stack>
          {!token ? <AuthContent /> : <WithoutAuthContent />}
        </>
      ) : (
        <Stack justifyContent={"end"}>
          {/* Render menu icon for small screens */}
          <IconButton onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>

          {/* Drawer for small screens */}
          <Drawer
            sx={{ height: "100%" }}
            anchor="right"
            open={drawerOpen}
            onClose={handleDrawerClose}
          >
            <Stack p={2} sx={{ height: "100%", width: 250 }} spacing={3}>
              <Link href={"/"}>
                <Typography
                  align="center"
                  fontWeight={"bold"}
                  onClick={handleDrawerClose}
                >
                  Home
                </Typography>
              </Link>
              <Link href={"/main"}>
                <Typography
                  align="center"
                  fontWeight={"bold"}
                  onClick={handleDrawerClose}
                >
                  Movies
                </Typography>
              </Link>
              <Tooltip title="Netflix+   Coming Soon">
                <IconButton sx={{ p: 0 }} onClick={handleDrawerClose}>
                  <NetflixPlusLogo width={25} height={25} />
                </IconButton>
              </Tooltip>
            </Stack>
          </Drawer>
        </Stack>
      )}
    </Stack>
  );
}

export default RightContent;
