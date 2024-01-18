import LogoSvg from "@/core/components/svgs/LogoSvg";
import NetflixPlusLogo from "@/core/components/svgs/NetflixPlusLogo";
import { IconButton, Stack, Tooltip, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

function LeftContent() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      alignItems={"center"}
      spacing={4}
    >
      <Link href={"/"}>
        <LogoSvg width={120} height={80} />
      </Link>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={"center"}
        spacing={3}
      >
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
    </Stack>
  );
}

export default LeftContent;
