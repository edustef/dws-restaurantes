import React, { useEffect } from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import GuestLayout from '../Shared/Layouts/GuestLayout';
import DefaultLayout from '../Shared/Layouts/DefaultLayout';
import { Box, Button, Card, CardActions, CardContent, Grid, Link, makeStyles, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { Inertia } from '@inertiajs/inertia';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
}));

const Explore = () => {
  const classes = useStyles();
  const user = usePage().props?.user?.data;
  const restaurants = usePage().props.restaurants.data;
  const links = usePage().props.restaurants.links;
  const currentPage = usePage().props.restaurants.current_page;
  console.log(usePage());

  const handlePageChange = (e, val) => {
    Inertia.visit(links[val].url);
  }

  const main = <main>
    <Container>
      <Typography className={classes.title} component="h1" variant="h6" color="textSecondary">
        Explore our restaurants
      </Typography>
      <Box my={2}>
        <Grid container spacing={2}>
          {restaurants ? restaurants.map((restaurant) => (
            <Grid key={restaurant.id} item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {restaurant.name}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    {restaurant.address}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Contact: {restaurant.phone}
                  </Typography>

                </CardContent>
                <CardActions>
                  <Button component={InertiaLink} href={route('exploreRestaurant', restaurant.id)}>See the menu</Button>
                  <Button variant="outlined" color="primary" component={InertiaLink} href={route('order', restaurant.id)}>Order now</Button>
                </CardActions>
              </Card>
            </Grid>
          )) : null}
        </Grid>
      </Box>

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
};

export default Explore;