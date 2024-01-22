import { Fade, Stack } from "@mui/material";
interface Props {
  children: React.ReactNode;
  spacing?: number;
  sx?: {};
}

const CenterLayout = (props: Props) => {
  return (
    <Fade in={true}>
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={props?.spacing}
        sx={{ flex: 1, ...props?.sx, py: 3 }}
      >
        {props.children}
      </Stack>
    </Fade>
  );
};

export default CenterLayout;
