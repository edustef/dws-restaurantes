import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import GuestLayout from '../Shared/Layouts/GuestLayout';
import DefaultLayout from '../Shared/Layouts/DefaultLayout';
import { Button, Card, CardActions, CardContent, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }
}));

export default function ExploreRestaurant() {
  const classes = useStyles();
  const restaurant = usePage().props.restaurant;
  const authUser = usePage().props.user.data;

  console.log(usePage());
  const main = <main>
    <Container className={classes.container}>
      <Typography className={classes.title} component="h1" variant="h5" color="textSecondary">
        {restaurant.name}
      </Typography>
      <Typography component="h2" variant="h5" >
        Location
      </Typography>
      <Typography>
        City: {restaurant.city}
      </Typography>
      <Typography>
        Address: {restaurant.address}
      </Typography>
    </Container>
  </main>;

  if (authUser) {
    return (
      <DefaultLayout>
        {main}
      </DefaultLayout>
    )
  }

  return (
    <GuestLayout>
      {main}
    </GuestLayout>
  )
}
