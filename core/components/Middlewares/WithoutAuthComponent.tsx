import { Stack, Typography } from "@mui/material";
import Message from "../Message";
const WithoutAuthComponent = ({
  backUrlDecodedPath,
}: {
  backUrlDecodedPath: string | undefined | string[];
}) => {
  return (
    <Message
      text={
        <Stack alignItems="center" spacing={2}>
          <Typography align="center" fontWeight={"bold"} variant="h6">
            your login is valid and you do not need to login again
          </Typography>
          {backUrlDecodedPath ? (
            <Typography align="center" variant="body1">
              redirecting to previuos page
            </Typography>
          ) : (
            <Typography align="center" variant="body1">
              redirecting to dashbaord page
            </Typography>
          )}
        </Stack>
      }
    />
  );
};
export default WithoutAuthComponent;
