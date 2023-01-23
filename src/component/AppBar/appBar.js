import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-scroll";


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];
const navItemsSx = {
  color: '#fff',
   fontFamily: "'Poppins', sans-serif",
    marginLeft: '20px',
     textTransform: 'capitalize',
      fontWeight:400,
  "&:hover": {
    color: '#6366F1',
  }

}

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box id="Home" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: '#6366F1', fontFamily: "'Pacifico', sans-serif" }} >
        GN;
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) =>  (

          <ListItem key={item} disablePadding>
            <ListItemButton href={`#${item}`} sx={{ textAlign: 'center', fontFamily: "'Poppins', sans-serif" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box position="sticky" sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="absolute" edge="end" component="nav" style={{right: 0, backgroundColor: '#18181B', textAlign: 'left', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: "#6366F1  ", fontSize: "30px", fontFamily:"'Pacifico', sans-serif"  }}
          >
            GN<span style={{ fontFamily:''}}>;</span>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block', color: '#FFFFF0' } }}>
            {navItems.map((item) => (
              <Link
              activeClass="active"
              to={item}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
              
              <Button scroll-behavior="smooth" scrollBehavior="smooth" href={`#${item}`}  key={item} sx={navItemsSx}>
                {item}
              </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" color="#0A1929">
        <Drawer
          backgroundColor="#18181B"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#18181B', color: '#FFFFF0' },
            backgroundColor:"#18181B"
          }}
        >
          {drawer}
        </Drawer>
      </Box>

    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;