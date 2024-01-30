import ListItem from "@/core/components/ListItem";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import { Stack } from "@mui/material";
import React from "react";

function SidebarContent() {
  return (
    <Stack sx={{ pl: 2 }}>
      <ListItem
        title="Main Menu"
        subItems={[
          {
            icon: <DashboardIcon />,
            text: "Dashboard",
            route: "/main",
          },
          {
            icon: <SupervisorAccountIcon />,
            text: "Users",
            route: "/main",
          },
          {
            icon: <AssessmentIcon />,
            text: "Reports",
            route: "/main",
          },
        ]}
      />
      <ListItem
        title="Setting"
        subItems={[
          {
            icon: <SettingsIcon />,
            text: "Setting",
            route: "/main",
          },
          {
            icon: <HelpIcon />,
            text: "Help",
            route: "/main",
          },
        ]}
      />
    </Stack>
  );
}

export default SidebarContent;
