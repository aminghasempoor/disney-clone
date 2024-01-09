import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
interface cardProps {
  title: string;
  description: string;
  src: string;
  width: number;
  height: number;
}

export default function CardMui({
  title,
  description,
  src,
  width,
  height,
}: cardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 5,
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          cursor: "pointer",
          transform: "translateY(-10px)",
        },
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Image src={src} alt="picture" width={width} height={height} />
        <Typography
          sx={{ padding: 2, fontWeight: "bold" }}
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography
          sx={{ fontWeight: "bold" }}
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
