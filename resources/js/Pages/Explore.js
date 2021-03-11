import React, { useEffect, useState } from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import GuestLayout from '../Shared/Layouts/GuestLayout';
import SearchInput from "@/Shared/SearchInput";
import DefaultLayout from '../Shared/Layouts/DefaultLayout';
import { Box, Button, Card, CardActions, CardContent, Grid, Link, makeStyles, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { Inertia } from '@inertiajs/inertia';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  pagination: {
    padding: `${theme.spacing(2)}px 0`,
    '& .MuiPagination-ul': {
      display: 'flex',
      justifyContent: 'center'
    }
  },
}));

const Explore = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  console.log(usePage());
  const user = usePage().props?.user?.data;
  const restaurants = usePage().props.restaurants;

  const handlePageChange = (e, val) => {
    Inertia.reload({
      only: ['restaurants'],
      data: { page: val }
    });
  }

  useEffect(() => {
    Inertia.reload({
      only: ['restaurants'], data: {
        q: query,
      }
    });
  }, [query]);

  const main = <main>
    <Container>
      <Typography className={classes.title} component="h1" variant="h6" color="textSecondary">
        Explore our restaurants
      </Typography>
      <SearchInput value={query} setQuery={setQuery} placeholder="Search restaurant" />
      <Pagination className={classes.pagination} count={restaurants.meta.links.length - 3} size="small" page={restaurants.meta.current_page} onChange={handlePageChange} />
      <Grid container spacing={2}>
        {restaurants ? restaurants.data.map((restaurant) => (
          <Grid key={restaurant.id} item xs={12} md={4}>
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

      <Pagination className={classes.pagination} count={restaurants.meta.links.length - 3} size="small" page={restaurants.meta.current_page} onChange={handlePageChange} />
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