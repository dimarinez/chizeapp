import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Link,
  Stack,
  Grid,
  Button
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Create a theme instance.
const theme = createTheme({
  palette: {
    customTypography: {
      h7: '#FF5757',
    },
    primary: {
      main: '#FF5757',
    },
    text: {
      secondary: '#FFFFFF',
    },
    background: {
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '58px'
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h7: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 700,
      fontSize: '12px',
      textTransform: 'uppercase',
      fontColor: '#FF5757'
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
          color: "#fff",
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
      styleOverrides: {
        root: {
          fontFamily: '"Playfair Display", serif',
          color: "#fff", // White color for the links
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h7: { // This is a custom name, it won't work out of the box like h1-h6
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 700,
          fontSize: '12px',
          textTransform: 'uppercase',
          color: '#FF5757 !important',
        },
      },
    },
  },
});

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="absolute">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <Link
              component={RouterLink}
              to="/privacy-policy"
              sx={{ mr: 2, ml: '24px' }} // Added marginLeft here
            >
              Privacy Policy
            </Link>
            <Link component={RouterLink} to="/terms-conditions" sx={{ mr: 'auto' }}> 
              Terms & Conditions
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <img src="../assets/chize-logo.png" alt="chize logo" style={{ height: 'auto', maxWidth: '100%', width: '50px' }}/>
          </Box>
          <Box sx={{ visibility: 'hidden', flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-start' }}>
            <Link
              component={RouterLink}
              to="/privacy-policy"
              sx={{ mr: 2, ml: '24px' }} // Added marginLeft here
            >
              Privacy Policy
            </Link>
            <Link component={RouterLink} to="/terms-conditions" sx={{ mr: 'auto' }}> 
              Terms & Conditions
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/hero.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "75vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexDirection: "column",
          paddingLeft: '40px'
        }}
      >
        <Typography
          sx={{
            maxWidth: '460px',
          }}
          variant="h1"
          align="left"
          color="text.secondary"
          gutterBottom
        >
          The realest dating app experience
        </Typography>
      </Box>
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Go on real dates.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Experience the Now. Lead with Confidence. Connect with Purpose. Welcome to Chize, the only app that reimagines the way you meet people by leveraging the power of real-time interactions.
            </Typography>
            <Button
  variant="contained"
  href="#how"
  sx={{
    backgroundColor: 'black', // Solid black background color
    color: 'white', // Text color
    borderRadius: '50px', // Pill shape, you can adjust the value as needed
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.75)', // Keep the background black even when hovering
    }
  }}
>
  How we do it
</Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <img src="../assets/grid-image.jpg" alt="offset grid" style={{
                width: '100%',
                height: 'auto'
              }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container>
      <Box id="how" paddingBottom={4}>
      <Typography variant="h7" align="left" color="text.primary" paddingBottom={1}>
    Our Process
  </Typography>
        <Typography variant="h4" align="left" color="text.primary" >
    How It Works
  </Typography>
  </Box>
  <Stack
    direction={{ xs: 'column', md: 'row' }}
    spacing={4}
    justifyContent="center"
    alignItems="center"
  >
    <Box sx={{ maxWidth: 345 }}>
        <img src="../assets/1.png" alt="process" style={{width: '100%'}}/>
    </Box>
    <Box sx={{ maxWidth: 345 }}>
      <img src="../assets/2.png" alt="process" style={{width: '100%'}}/>
    </Box>
    <Box sx={{ maxWidth: 345 }}>
      <img src="../assets/3.png" alt="process" style={{width: '100%'}}/>
    </Box>
    <Box sx={{ maxWidth: 345 }}>
      <img src="../assets/4.png" alt="process" style={{width: '100%'}}/>
    </Box>
    <Box sx={{ maxWidth: 345 }}>
      <img src="../assets/5.png" alt="process" style={{width: '100%'}}/>
    </Box>
  </Stack>

        <Box sx={{ bgcolor: "background.paper", p: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }} component="footer" paddingTop={6} paddingBottom={4}>
          <Typography variant="h6" align="center" gutterBottom>
            Get in touch.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.primary"
            component="p"
          >
            feedback@chizeapp.com
          </Typography>
          <a
      href="https://apps.apple.com/us/app/chize/id6461267383?itsct=apps_box_badge&amp;itscg=30200"
      style={{
        display: 'inline-block',
        overflow: 'hidden',
        marginTop: '20px',
        borderRadius: '13px',
        width: '160px',
      }}
    >
      <img
        src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1706486400"
        alt="Download on the App Store"
        style={{
          borderRadius: '13px',
          width: '160px',
        }}
      />
    </a>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default HomePage;
