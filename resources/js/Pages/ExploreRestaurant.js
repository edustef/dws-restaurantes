import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import GuestLayout from '../Shared/Layouts/GuestLayout';
import DefaultLayout from '../Shared/Layouts/DefaultLayout';
import { Button, Card, CardActions, CardContent, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { Inertia } from '@inertiajs/inertia'

export default function ExploreRestaurant() {
  const restaurant = usePage().props.data;
  console.log(usePage());
  const main = <main>
    <Container className={classes.container}>
      <Typography className={classes.title} component="h1" variant="h5" color="textSecondary">
        Explore our restaurants
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h4" >
            {restaurant.name}
          </Typography>
          <Typography>
            {restaurant.address}
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={InertiaLink} href={route('restaurants.show', restaurant.id)}>See the menu</Button>
        </CardActions>
      </Card>
      <Pagination count={links.length} page={currentPage} onChange={handlePageChange} />
    </Container>
  </main>;

  if (user) {
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
