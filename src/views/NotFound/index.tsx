import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

const NotFound: React.FC = () => {
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
        gap: '10px',
      }}
    >
      <Typography variant="h1" color="red">
        404
      </Typography>
      <Image src={'/images/NotFound.jpg'} alt="pic" width={550} height={450} />
      <Typography variant="h6" style={{ color: '#000' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <div>
        <Button
          variant="contained"
          style={{ marginRight: '15px' }}
          onClick={() => router.back()}
        >
          Go Back
        </Button>
        <Button variant="contained" onClick={() => router.push('/')}>
          Back To Home
        </Button>
      </div>
    </Box>
  );
};

export default NotFound;
