import ListItem from "@/core/components/ListItem";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import MovieIcon from "@mui/icons-material/Movie";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import PersonIcon from "@mui/icons-material/Person";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { Stack } from "@mui/material";
import React from "react";

function SidebarContent() {
  return (
    <Stack sx={{ pl: 2 }}>
      <ListItem
        title="Menu"
        subItems={[
          {
            icon: <TravelExploreIcon />,
            text: "Browse",
            route: "/main",
          },
          {
            icon: <MovieIcon />,
            text: "WatchList",
            route: "/main",
          },
          {
            icon: <UpcomingIcon />,
            text: "Release",
            route: "/main",
          },
        ]}
      />
      <ListItem
        title="Social"
        subItems={[
          {
            icon: <PersonIcon />,
            text: "Friends",
            route: "/main",
          },
          {
            icon: <Diversity3Icon />,
            text: "Parties",
            route: "/main",
          },
        ]}
      />
    </Stack>
  );
}

export default SidebarContent;
