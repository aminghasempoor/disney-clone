import { Backdrop, Box, Stack, styled, Typography } from "@mui/material";
import LaodingSvg from "./svgs/LoadingSvg";

const LoadingImage = styled(Box)({
  "@keyframes load": {
    "0%": {
      // opacity: 0,
      transform: "scale(1)",
    },
    "50%": {
      // opacity: 1,
      transform: "scale(.5)",
    },
    "100%": {
      // opacity: 0,
      transform: "scale(1)",
    },
  },
  animation: "load 2s infinite",
});

const LoadingHardPage = ({
  children,
  loading,
  sx,
  icon,
  width,
  height,
  label,
}: {
  children: React.ReactNode;
  loading: boolean;
  sx: {};
  icon: null;
  width: number;
  height: number;
  label: string;
}) => {
  return (
    <>
      <Backdrop
        sx={{
          bgcolor: "#121212",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          ...sx,
        }}
        open={loading}
      >
        <Stack alignItems={"center"} spacing={2}>
          <LoadingImage width={width} height={height}>
            {icon ? (
              <Box sx={{ color: "primary.main", width: width, height: height }}>
                {icon}
              </Box>
            ) : (
              <LaodingSvg width={width} height={height} />
            )}
          </LoadingImage>
          <Typography variant={"h5"} sx={{ color: "rgb(219, 32, 44)" }}>
            {label}
          </Typography>
        </Stack>
      </Backdrop>
      {children}
    </>
  );
};

export default LoadingHardPage;
