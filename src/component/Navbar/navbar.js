// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import InboxIcon from '@mui/icons-material/Inbox'
// import MailIcon from '@mui/icons-material/Mail'
// import Menu from '@mui/icons-material/Menu';
// import { MenuItem, ListItemIcon } from '@mui/material';


// import { useState } from "react"

// const Navbar = () => {
//   const [anchorEl, setAnchorEl] = useState(null)
//   const [mobileOpen, setMobileOpen] = useState(false)

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget)
//   }

//   const handleClose = () => {
//     setAnchorEl(null)
//   }

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen)
//   }

//   const menuId = "primary-search-account-menu"

//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerToggle}
//           >
//             <MenuIcon />
//           </IconButton>
//           <div>
//             <IconButton
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleMenu}
//               color="inherit"
//             >
//               <InboxIcon />
//             </IconButton>
//             <Menu
//               id={menuId}
//               anchorEl={anchorEl}
//               keepMounted
//               open={Boolean(anchorEl)}
//               onClose={handleClose}
//             >
//               <MenuItem onClick={handleClose}>
//                 <ListItemIcon>
//                   <MailIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Projects" />
//               </MenuItem>
//               <MenuItem onClick={handleClose}>
//                 <ListItemIcon>
//                   <MailIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="About" />
//               </MenuItem>
//               <MenuItem onClick={handleClose}>
//                 <ListItemIcon>
//                   <MailIcon />
//                 </ListItemIcon>
//                 <ListItemText primary="Contact" />
//               </MenuItem>
//             </Menu>
//           </div>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="temporary"
//         anchor="left"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//       >
//         <List>
//           <ListItem button onClick={handleDrawerToggle}>
//             <ListItemIcon>
//               <InboxIcon />
//             </ListItemIcon>
//             <ListItemText primary="Projects" />
//             </ListItem>
//             <ListItem button onClick={handleDrawerToggle}>
//             <ListItemIcon>
//                 <InboxIcon />
//             </ListItemIcon>
//             <ListItemText primary="About" />
//             </ListItem>
//             <ListItem button onClick={handleDrawerToggle}>
//             <ListItemIcon>
//                 <InboxIcon />
//             </ListItemIcon>
//             <ListItemText primary="Contact" />
//             </ListItem>
//         </List>
//         </Drawer>
//     </div>
//     )
// }

// export default Navbar;
