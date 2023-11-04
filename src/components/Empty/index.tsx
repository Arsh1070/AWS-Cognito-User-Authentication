import { Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface FuncProps {
  statusCode: string;
  statusText: string;
}

const Empty: React.FC<FuncProps> = ({ statusCode, statusText }) => {
  const router = useRouter();

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Typography
          variant="h2"
          color={parseInt(statusCode) === 200 ? 'green' : 'red'}
        >
          {statusCode}
        </Typography>
        <Image
          src={'/images/emptyData.jpg'}
          alt="pic"
          width={450}
          height={350}
        />
        <Typography
          variant="h6"
          color={parseInt(statusCode) === 200 ? 'green' : 'red'}
        >
          {statusText}
          {' ! '}
        </Typography>
        <Typography variant="subtitle1">
          OOPS ! No data found. Change your search parameters or
          <Button onClick={() => router.push('/')}>Back home</Button>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Empty;
