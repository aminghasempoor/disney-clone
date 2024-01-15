import { Skeleton, Stack } from "@mui/material";
import React from "react";

function RowSkeleton() {
  return Array.from({ length: 5 }).map((_, index) => (
    <Stack key={index} spacing={1} sx={{ px: 5 }}>
      <Skeleton variant="rectangular" width={300} height={150} />
      <Skeleton variant="text" width={100} height={50} />
      <Skeleton variant="text" width={200} height={20} />
    </Stack>
  ));
}

export default RowSkeleton;
