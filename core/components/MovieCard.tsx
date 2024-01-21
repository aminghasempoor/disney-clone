import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
interface MovieCardProps {
  title: string;
  description: string;
  imageURL: string;
}

export default function MovieCard({
  title,
  description,
  imageURL,
}: MovieCardProps) {
  const theme = useTheme();
  const isMediumScreen: boolean = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack
      spacing={2}
      sx={{
        width: 350,
        transition: "transform 0.3s ease-in-out",
        boxShadow: "none", // Forcefully remove any box-shadow
        "&:hover": {
          cursor: "pointer",
          transform: "translateY(-10px)",
        },
      }}
    >
      <Stack>
        <img
          src={imageURL}
          alt="picture"
          style={{
            borderRadius: 5,
          }}
        />
      </Stack>
      <Stack>
        <Typography
          gutterBottom
          variant={isSmallScreen ? "body1" : isMediumScreen ? "h6" : "h5"}
        >
          {title.length > 20 ? title.substring(0, 20) + " ..." : title}
        </Typography>
        <Typography
          variant={
            isSmallScreen ? "caption" : isMediumScreen ? "subtitle2" : "body2"
          }
          color="text.secondary"
        >
          {description.substring(0, 120) + " ..."}
        </Typography>
      </Stack>
      <Stack direction={"row"}>
        <Button color="error" size="small">
          Watch
        </Button>
        <Button size="small">Save to favorites</Button>
      </Stack>
    </Stack>
  );
}
