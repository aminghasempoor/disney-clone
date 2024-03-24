import { Button, Stack, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Link from "next/link";
import React from "react";

function WithoutAuthContent() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Link href="/register">
        <Button color="error" variant="text" endIcon={<EditNoteIcon />}>
          <Typography fontWeight={"bold"} color={"rgb(219, 32, 44)"}>
            Sign Up
          </Typography>
        </Button>
      </Link>
      <Link href="/login">
        <Button color="error" variant="text" endIcon={<LoginIcon />}>
          <Typography fontWeight={"bold"} color={"rgb(219, 32, 44)"}>
            LOG IN
          </Typography>
        </Button>
      </Link>
    </Stack>
  );
}

export default WithoutAuthContent;
