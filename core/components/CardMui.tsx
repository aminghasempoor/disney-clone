import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
interface cardProps {
  title: string;
  description: string;
  src: string;
}

export default function CardMui({ title, description, src }: cardProps) {
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
        <Image src={src} alt="picture" width={500} height={550} />
        <Typography
          sx={{ padding: 2 }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
