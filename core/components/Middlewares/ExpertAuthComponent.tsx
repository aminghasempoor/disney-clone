import React from "react";
import Message from "../Message";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

function ExpertAuthComponent() {
  return (
    <Message
      text={
        <Typography
          fontWeight={"bold"}
          variant="h6"
          textTransform={"capitalize"}
          sx={{ textAlign: "center" }}
        >
          you dont have access
        </Typography>
      }
      actions={
        <>
          <Button variant="outlined">
            <Link href={"/expert-dashboard"}>back to dashboard</Link>
          </Button>
        </>
      }
    />
  );
}

export default ExpertAuthComponent;
