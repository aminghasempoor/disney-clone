import { Stack } from "@mui/material";
interface Props {
  children: React.ReactNode;
  spacing?: number;
  sx?: {};
}

const FullPageLayout = (props: Props) => {
  return (
    <Stack
      spacing={props?.spacing}
      sx={{
        width: "100vw",
        height: "100vh",
        ...props?.sx,
      }}
    >
      {props.children}
    </Stack>
  );
};

export default FullPageLayout;
