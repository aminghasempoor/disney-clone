import { Button, Typography } from "@mui/material";
import Message from "../Message";
import Link from "next/link";

const WithAuthComponent = () => {
  return (
    <Message
      text={
        <Typography
          align="center"
          fontWeight={"bold"}
          variant="h6"
          sx={{ textAlign: "center" }}
        >
          your access to this page has expired Please login again
        </Typography>
      }
      actions={
        <Button variant="outlined">
          <Link href={"/login"}>login</Link>
        </Button>
      }
    />
  );
};

export default WithAuthComponent;
