import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
  return (
    <Card
      sx={{
        width: 500,
        borderRadius: 5,
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          cursor: "pointer",
          transform: "translateY(-10px)",
        },
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        width={"100%"}
        image={imageURL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title.substring(0, 30)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.substring(0, 100) + " ..."}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Watch</Button>
        <Button size="small">Save to favorites</Button>
      </CardActions>
    </Card>
  );
}
