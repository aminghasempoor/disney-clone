import LogoSvg from "@/core/components/svgs/LogoSvg";
import { IconButton, Stack, Tooltip, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

function LeftContent() {
  return (
    <Stack alignItems={"center"}>
      <Link href={"/"}>
        <LogoSvg width={110} height={80} />
      </Link>
    </Stack>
  );
}

export default LeftContent;
