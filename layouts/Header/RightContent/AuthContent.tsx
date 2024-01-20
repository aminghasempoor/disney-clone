import { Badge, Button, Stack, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Link from "next/link";
import React from "react";

function AuthContent() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={3}
      justifyContent={"center"}
    >
      <Link href="/profile">
        <Badge>
          <NotificationsIcon style={{ color: "white" }} fontSize="small" />
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
            sx={{ pt: 0.5 }}
            fontWeight={"bold"}
            color={"rgb(219, 32, 44)"}
          >
            Profile
          </Typography>
        </Button>
      </Link>
    </Stack>
  );
}

export default AuthContent;
