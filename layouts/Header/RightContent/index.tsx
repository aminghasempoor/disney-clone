import {
  Drawer,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import useUser from "@/lib/app/hooks/useUser";
import AuthContent from "./AuthContent";
import WithoutAuthContent from "./WithoutAuthContent";
import Link from "next/link";

function RightContent() {
  const { token } = useUser();
  const theme = useTheme();
  const isUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
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
          </Stack>
          {token ? <AuthContent /> : <WithoutAuthContent />}
        </>
      ) : (
        <Stack justifyContent={"end"}>
          <IconButton
            onClick={() => {
              setDrawerOpen(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            sx={{ height: "70%" }}
            elevation={0}
            anchor="left"
            open={drawerOpen}
            onClose={() => {
              setDrawerOpen(false);
            }}
          >
            <Stack sx={{ height: "100%", width: 150, py: 8 }} spacing={3}>
              {token ? <AuthContent /> : <WithoutAuthContent />}
            </Stack>
          </Drawer>
        </Stack>
      )}
    </Stack>
  );
}

export default RightContent;
