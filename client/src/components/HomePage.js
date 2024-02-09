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
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Create a theme instance.
const theme = createTheme({
  palette: {
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
              sx={{ mr: 2 }}
            >
              Privacy Policy
            </Link>
            <Link component={RouterLink} to="/terms-conditions">
              Terms & Conditions
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          backgroundImage: "url('../assets/hero.jpg')",
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
          variant="h1"
          align="left"
          color="text.secondary"
          gutterBottom
        >
          The realest dating<br/>app experience
        </Typography>
      </Box>
      <Container>
        <Typography variant="h4" align="left" color="text.primary" paddingTop={6} paddingBottom={4}>
    How It Works
  </Typography>
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

        <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer" paddingTop={6} paddingBottom={4}>
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
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default HomePage;
