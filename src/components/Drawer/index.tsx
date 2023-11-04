import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styles from '../../styles/Home.module.css';

const drawerWidth = 240;

interface navObj {
  id: string;
  title: string;
  path: string;
  isActive: (path: string) => boolean;
}

interface FuncProps {
  navItems: navObj[];
  trigger: boolean;
}

const CustomDrawer: React.FC<FuncProps> = ({ navItems, trigger }) => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(trigger);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (trigger) {
      handleDrawerToggle();
    }
  }, [trigger]);

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Typography variant="h6" sx={{ my: 2, mx: 2 }}>
        Brand Logo
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.id}
            disablePadding
            className={
              item.isActive(router.pathname)
                ? styles.activeDrawerItem
                : styles.drawerItem
            }
          >
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => router.push(item.path)}
            >
              {item.title}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box component="nav">
      <Drawer
        // container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none', width: drawerWidth },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default CustomDrawer;
