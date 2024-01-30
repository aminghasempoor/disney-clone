import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  title: string;
  subItems: SubItem[];
}

interface SubItem {
  icon: JSX.Element;
  text: string;
  route: string;
}

function ListItem({ title, subItems }: Props) {
  const router = useRouter();

  return (
    <>
      <List
        sx={{ width: "100%" }}
        component="nav"
        subheader={
          <ListSubheader sx={{ bgcolor: "black" }} component="div">
            {title}
          </ListSubheader>
        }
      >
        {subItems.map((subItem, index) => (
          <ListItemButton
            key={index}
            onClick={() => {
              router.push(subItem.route);
            }}
          >
            <ListItemIcon>{subItem.icon}</ListItemIcon>
            <ListItemText primary={subItem.text} />
          </ListItemButton>
        ))}
      </List>
    </>
  );
}

export default ListItem;
