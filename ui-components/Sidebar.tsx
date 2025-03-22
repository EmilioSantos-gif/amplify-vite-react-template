import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { Home, Info, ContactMail, Add } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <List>
        <ListItem component={Link} to="/">
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem component={Link} to="/create">
          <ListItemIcon><Add /></ListItemIcon>
          <ListItemText primary="Crear Informe" />
        </ListItem>
        <ListItem component={Link} to="/about">
          <ListItemIcon><Info /></ListItemIcon>
          <ListItemText primary="Información" />
        </ListItem>
        <ListItem component={Link} to="/contact">
          <ListItemIcon><ContactMail /></ListItemIcon>
          <ListItemText primary="Contacto" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
