import { Skeleton, Stack } from "@mui/material";
import React from "react";

function BannerSkeleton() {
  return (
    <Stack>
      <Skeleton
        sx={{ bgcolor: "gray.700" }}
        variant="rectangular"
        width={"100%"}
        height={"70vh"}
      />
      <Skeleton
        variant="text"
        width={"20%"}
        height={"10%"}
        sx={{
          position: "absolute",
          top: "30%",
          mx: 2,
          bgcolor: "gray.700",
        }}
      />
      <Skeleton
        variant="text"
        width={"60%"}
        height={"27%"}
        sx={{
          position: "absolute",
          top: "33%",
          mx: 2,
          bgcolor: "gray.700",
        }}
      />
    </Stack>
  );
}

export default BannerSkeleton;
