import { Button, Stack, Typography } from "@mui/material";
import Message from "../Message";
import Link from "next/link";
import useUser from "@/lib/app/hooks/useUser";
const WithoutAuthComponent = ({
  backUrlDecodedPath,
}: {
  backUrlDecodedPath: string | undefined | string[];
}) => {
  const { user } = useUser();
  return (
    <Message
      text={
        <Stack alignItems="center" spacing={2}>
          <Typography align="center" fontWeight={"bold"} variant="h6">
            your login is valid and you do not need to login again
          </Typography>
          <Button variant="outlined">
            <Link
              href={
                user.role[0] == "user" ? "/user-dashboard" : "/expert-dashboard"
              }
            >
              <Typography align="center" variant="body1">
                redirecting to dashboard
              </Typography>
            </Link>
          </Button>
        </Stack>
      }
    />
  );
};
export default WithoutAuthComponent;
