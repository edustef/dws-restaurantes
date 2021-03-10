import React from "react";
import { InertiaLink } from '@inertiajs/inertia-react';
import GuestLayout from "@/Shared/Layouts/GuestLayout";
import Typography from '@material-ui/core/Typography';
import SearchInput from '@/Shared/SearchInput';
import Logo from '@/Shared/Logo';
import { Box, Button, Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh'
  },
  button: {
    margin: theme.spacing(2)
  },
  ware: {
    fontWeight: 'bold',
    color: theme.palette.primary.main
  },
  logo: {
    width: '2.5rem',
    height: '2.5rem'
  }
}));

const LandingPage = () => {
  const classes = useStyles();
  return <>
    <Container className={classes.container}>
      <Box pt={2} display="flex" justifyContent="flex-end"><Button component={InertiaLink} href={route('login')}>LOGIN</Button></Box>
      <Box my={2} display="flex" flexDirection="column" justifyContent="center">
        <Box textAlign="center">
          <Typography component="h1" variant="h2">
            Food
        <Logo className={classes.logo} />
            <span className={classes.ware}>ware</span>
          </Typography>
          <Typography variant="subtitle2">
            The middleware between you and your favorite food.
        </Typography>
        </Box>
        <Box mt={4} display="flex" justifyContent="center">
          <Button className={classes.button} variant="outlined" color="primary" href={route('explore')} component={InertiaLink}>
            Explore
          </Button>
          <Button className={classes.button} variant="contained" color="primary" href={route('register')} component={InertiaLink}>
            SignUp
          </Button>
        </Box>
        <Box mx="auto">
          <SearchInput placeholder="Search restaurant" />
        </Box>
      </Box>
    </Container>
  </ >;
};

LandingPage.layout = (page) => <GuestLayout title="Welcome!" children={page} />;

export default LandingPage;
