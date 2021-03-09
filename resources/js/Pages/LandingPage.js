import React from "react";
import { InertiaLink } from '@inertiajs/inertia-react';
import GuestLayout from "@/Shared/Layouts/GuestLayout";
import Typography from '@material-ui/core/Typography';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
  },
  button: {
    margin: theme.spacing(2)
  }
}));

const LandingPage = () => {
  const classes = useStyles();
  return <main className={classes.main}>
    <Typography component="h1" variant="h2">
      Foodware
    </Typography>
    <Typography variant="subtitle2">
      The middleware between you and your favorite food.
    </Typography>
    <div>
      <Button className={classes.button} variant="outlined" color="secondary" href={route('explore')} component={InertiaLink}>
        Explore
      </Button>
      <Button className={classes.button} variant="contained" color="primary" href={route('login')} component={InertiaLink}>
        Login
      </Button>
    </div>
  </main>;
};

LandingPage.layout = (page) => <GuestLayout title="Welcome!" children={page} />;

export default LandingPage;
