import React from "react";
import DefaultLayout from "@/Shared/Layouts/DefaultLayout";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import { Box, Button, Card, CardActions, CardContent, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }
}));

const Show = () => {
  const classes = useStyles();
  const restaurant = usePage().props.restaurant.data;
  console.log(restaurant);

  return (
    <main>
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
        <Box my={2}>
          <Grid container spacing={2}>
            {restaurant.dishes.map((dish) => (
              <Grid key={dish.id} item xs={12} md={3}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {dish.name}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      {dish.category}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {dish.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button component={InertiaLink} href={route('dishes.show', dish.id)}>See dish</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </main>
  );
}

Show.layout = (page) => <DefaultLayout title="Restaurant - Intranet" children={page} />;

export default Show;
