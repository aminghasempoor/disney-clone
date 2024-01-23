import { Button, Typography } from "@mui/material";
import Message from "../Message";
import Link from "next/link";

const UserAuthComponent = () => {
  return (
    <Message
      text={
        <Typography
          variant="h6"
          textTransform={"capitalize"}
          fontWeight={"bold"}
          sx={{ textAlign: "center" }}
        >
          you dont have access to this page
        </Typography>
      }
      actions={
        <>
          <Button variant="outlined">
            <Link href={"/"}>back to first page</Link>
          </Button>
        </>
      }
    />
  );
};

export default UserAuthComponent;
