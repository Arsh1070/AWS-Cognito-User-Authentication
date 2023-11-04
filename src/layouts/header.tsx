import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { useSessionContext } from '../store/SessionContext';
import styles from '../styles/Home.module.css';

const CustomDrawer = dynamic(() => import('../components/Drawer'));

const navItems = [
  {
    id: 'dwqd12',
    title: 'Home',
    path: '/',
    isActive: (itemPath: string) => itemPath === '/',
  },
];

const CustomHeader: React.FC = () => {
  const router = useRouter();
  const [trigger, setTrigger] = useState(false);
  const { session } = useSessionContext();

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" color="primary">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setTrigger(!trigger)}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ display: { sm: 'none' } }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Brand Logo
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {router.pathname !== '/' ? (
              <>
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => router.push(item.path)}
                    className={
                      item.isActive(router.pathname)
                        ? styles.activeNavitem
                        : styles.navItem
                    }
                  >
                    {item.title}
                  </Button>
                ))}
                <Button
                  key={'signout2'}
                  onClick={session.signOut}
                  className={styles.navItem}
                >
                  Signout
                </Button>
              </>
            ) : (
              <>
                <Button
                  key={'signout1'}
                  onClick={() => router.push('/signin')}
                  className={styles.navItem}
                >
                  Signin
                </Button>
                <Button
                  key={'signout'}
                  onClick={() => router.push('/signin')}
                  className={styles.navItem}
                >
                  Signup
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <CustomDrawer trigger={trigger} navItems={navItems} />
    </Box>
  );
};

export default CustomHeader;
