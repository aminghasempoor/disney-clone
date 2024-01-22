import { IconButton, SvgIconTypeMap } from "@mui/material";
import React from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface MdChevronsProps {
  icon: OverridableComponent<SvgIconTypeMap>;
  isHovered: boolean;
  handleScroll: (scrollOffset: number) => void;
  position: "left" | "right"; // Specify the position prop
}

function MdChevrons({
  icon: IconComponent,
  isHovered,
  handleScroll,
  position,
}: MdChevronsProps) {
  const isLeft = position === "left";
  return (
    <IconButton
      sx={{
        zIndex: 1,
        position: "absolute",
        top: "50%",
        [isLeft ? "left" : "right"]: 0, // Dynamic left/right based on the position prop
        transform: "translateY(-50%)",
        height: 50,
        color: "red",
        opacity: isHovered ? 1 : 0,
        transition: "opacity 0.3s",
      }}
      onClick={() => handleScroll(isLeft ? -500 : 500)}
    >
      <IconComponent fontSize="large" />
    </IconButton>
  );
}

export default MdChevrons;
