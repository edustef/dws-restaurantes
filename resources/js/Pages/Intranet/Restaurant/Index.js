import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import DefaultLayout from "@/Shared/Layouts/DefaultLayout";
import SearchInput from "@/Shared/SearchInput";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, makeStyles, Typography, Box, Container, Button, Link } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect } from 'react';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
}));

const Index = () => {
  const [query, setQuery] = useEffect('');
  const classes = useStyles();
  const restaurants = usePage().props.restaurants;
  console.log(restaurants);

  const handlePageChange = (e, val) => {
    Inertia.visit(restaurants.links[val].url);
  }

  return (
    <Container>
      <Typography className={classes.title} component="h1" variant="h6" color="textSecondary">
        Restaurants
      </Typography>
      <SearchInput value={query} onChange={setQuery} placeholder="Search restaurant" />
      <TableContainer component={Box} boxShadow={2} my={3}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Latitude</TableCell>
              <TableCell align="right">Longitude</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {restaurants.data.map((restaurant) => (
              <TableRow key={restaurant.id}>
                <TableCell component="th" scope="row">
                  {restaurant.name}
                </TableCell>
                <TableCell align="right">{restaurant.city}</TableCell>
                <TableCell align="right">{restaurant.address}</TableCell>
                <TableCell align="right">{restaurant.phone}</TableCell>
                <TableCell align="right">{restaurant.latitude}</TableCell>
                <TableCell align="right">{restaurant.longitude}</TableCell>
                <TableCell align="right"><Link component={InertiaLink} href={route('restaurants.show', restaurant.id)}>View</Link></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={restaurants.links.length} size="small" page={restaurants.current_page} onChange={handlePageChange} />
    </Container>
  )
}

Index.layout = (page) => <DefaultLayout title="Restaurants - Intranet" children={page} />;
export default Index;