import * as React from 'react';
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
import { Link } from '@mui/material';

const drawerWidth = 240;

export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} >
      <Typography variant="h6" sx={{ my: 2 }}>
       Post 
      </Typography>
      <Divider />
      <List>

        <ListItem disablePadding >
          <ListItemButton sx={{ textAlign: 'center' , display:"flex", flexDirection:"column"}}>
            <Link href='/' style={{textDecoration:"none", color:"black"}}>  <ListItemText>Home</ListItemText></Link>
            <Link href='/pages/about'   style={{textDecoration:"none", color:"black"}}> <ListItemText>About</ListItemText></Link>
            <Link href='/pages/contact'  style={{textDecoration:"none", color:"black"}}>  <ListItemText>Contact</ListItemText></Link>
            <Link href='/pages/posts'  style={{textDecoration:"none", color:"black"}}>  <ListItemText>Posts</ListItemText></Link>
            <Link href='/pages/postSearch'  style={{textDecoration:"none", color:"black"}}>  <ListItemText> Post-search</ListItemText></Link>
          </ListItemButton>
        </ListItem>

      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document : undefined;

  return (
    <Box sx={{ display: 'flex' }} mb={6}>
      <CssBaseline />
      <AppBar style={{backgroundColor:"#062973", padding:"14px 0px"}} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
         UK SHOP
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} >

            <Link href='/' >
              <Button sx={{ color: 'white' }}>
                Home
              </Button>
            </Link>

            <Link href='/pages/about'>
              <Button sx={{ color: 'white' }}>
                About
              </Button>
            </Link>

            <Link href='/pages/contact' >
              <Button sx={{ color: 'white' }}>
                Contact
              </Button>
            </Link>

            <Link href='/pages/posts'>
              <Button sx={{ color: 'white' }}>
                Posts
              </Button>
            </Link>

            <Link href='/pages/postSearch'>
              <Button sx={{ color: 'white' }}>
                Post-search
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
           >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}