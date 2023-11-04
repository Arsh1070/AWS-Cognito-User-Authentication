import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

import ServerErrorImg from '../../assets/serverError.jpg';

const ServerError: React.FC = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'fff',
      }}
    >
      <Typography variant="h1" color="red">
        500
      </Typography>
      <Image
        src={'/images/serverError.jpg'}
        alt="pic"
        width={450}
        height={350}
      />
      <Typography variant="h6" color="red">
        Internal Server Error !
      </Typography>
      {/*  <Button variant="contained" onClick={() => router.back()}>
        Go Back
      </Button> */}
      <Button variant="contained" onClick={() => router.push('/')}>
        Back To Home
      </Button>
    </Box>
  );
};

export default ServerError;
