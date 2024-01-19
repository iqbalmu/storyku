import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  HomeIcon,
  FolderIcon
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

export function DefaultSidebar() {
  return (
    <Card className="h-full w-full max-w-[18rem] shadow-md">
      <List>        
        <NavLink to="/">
          <ListItem>
            <ListItemPrefix>
              <HomeIcon className="h-5 w-5" />
            </ListItemPrefix>
            <span className="text-sm">
              Home
            </span>
          </ListItem>
        </NavLink>
        <NavLink to="/story">
          <ListItem>
            <ListItemPrefix>
              <FolderIcon className="h-5 w-5" />
            </ListItemPrefix>
            <span className="text-sm">
              Manage Story
            </span>
          </ListItem>
        </NavLink>
      </List>
    </Card>
  );
}