import { Box, Container, Typography } from '@mui/material';
import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align='center'>
      {'Copyright © '}
      <Link href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Main />
          <NextScript />
          <Box
            component="footer"
            sx={{
              py: 3,
              px: 2,
              mt: 'auto',
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[200]
                  : theme.palette.grey[800],
            }}
          >
            <Container>
              <Copyright />
            </Container>
          </Box>
        </Box>
      </body>
    </Html>
  )
}
