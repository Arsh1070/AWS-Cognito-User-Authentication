import { Box, Typography } from '@mui/material';
import Link from 'next/link';

import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Box
        py={6}
        px={3}
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link className={styles.footer_logo} href="/">
          Brand Logo
        </Link>
        <Box component="nav" display="flex" gap="20px">
          <Link href="/" className={styles.footer_link}>
            About Us
          </Link>
          <Link href="/" className={styles.footer_link}>
            Contact Us
          </Link>
          <Link href="/" className={styles.footer_link}>
            Help
          </Link>
          <Link href="/" className={styles.footer_link}>
            FAQs
          </Link>
        </Box>
        <Typography color="textSecondary" component="p" variant="caption">
          © 2020 Nereus All rights reserved.
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
