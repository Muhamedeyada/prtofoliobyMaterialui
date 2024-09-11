import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/New.css";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const drawer = (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <IconButton onClick={toggleDrawer(false)} style={{ margin: "16px" }}>
        <CloseIcon />
      </IconButton>
      <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Portfolio" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Resume" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Blog" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {/* Cover Section */}
      <div className="cover">
        {/* Navbar */}
        <AppBar style={{ backgroundColor: "transparent", boxShadow: "none" }}>
          <Toolbar >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              M-A
            </Typography>
            <div className="nav-buttons">
              <Button color="inherit">Home</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Portfolio</Button>
              <Button color="inherit">Services</Button>
              <Button color="inherit">Resume</Button>
              <Button color="inherit">Blog</Button>
              <Button color="inherit">Contact</Button>
            </div>
          </Toolbar>
        </AppBar>

        {/* Drawer for Mobile Menu */}
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
          {drawer}
        </Drawer>

        {/* Text on Cover */}
        <div className="cover-text">
          <h1>Muhamed Eyada</h1>
          <h2>Full Stack Developer</h2>
        </div>
      </div>
    </div>
  );
}

