import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import DefaultLayout from "@/Shared/Layouts/DefaultLayout";
import TableCellWithSort from "@/Shared/TableCellWithSort";
import SearchInput from "@/Shared/SearchInput";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, makeStyles, Typography, Box, Container, Link, Grid, Button, Fade, Modal, Backdrop } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actions: {
    '& *': {
      paddingRight: theme.spacing(2),
    }
  },
  innerModal: {
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(2)
  },
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
  info: {
    color: theme.palette.info
  }
}));

const Index = () => {
  const classes = useStyles();
  const restaurants = usePage().props.restaurants;
  const [currentRestaurant, setCurrentRestaurant] = useState(null);
  const [query, setQuery] = useState('');
  const [orderBy, setOrderBy] = useState('name');
  const [order, setOrder] = useState('ASC');


  const handlePageChange = (e, val) => {
    Inertia.reload({
      only: ['restaurants'],
      data: { page: val }
    });
  }

  const handleSorting = (val) => {
    if (val === orderBy) {
      setOrder(order === 'ASC' ? 'DESC' : 'ASC')
    } else {
      setOrder('ASC');
      setOrderBy(val);
    }
  }

  const handleDelete = () => {
    Inertia.delete(route('restaurants.destroy', currentRestaurant), { only: ['restaurants'] });
    setCurrentRestaurant(null);
  }

  useEffect(() => {
    Inertia.reload({
      only: ['restaurants'], data: {
        q: query,
        orderBy: orderBy,
        order: order
      }
    });
  }, [query, orderBy, order]);

  return (
    <Container>
      <Typography className={classes.title} component="h1" variant="h6" color="textSecondary">
        <InertiaLink href={route('restaurants.index')}>
          Restaurants
        </InertiaLink>

      </Typography>
      <Box my={2}>
        <Button component={InertiaLink} href={route('restaurants.create')} variant="contained" color="primary">Create new restaurant</Button>
      </Box>
      <SearchInput value={query} setQuery={setQuery} placeholder="Search restaurant" />
      <Pagination className={classes.pagination} count={restaurants.meta.links.length - 3} size="small" page={restaurants.meta.current_page} onChange={handlePageChange} />
      <TableContainer component={Box} boxShadow={2} mb={2}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCellWithSort onClick={handleSorting} value="name">Name</TableCellWithSort>
              <TableCellWithSort onClick={handleSorting} value="city" align="right">City</TableCellWithSort>
              <TableCellWithSort onClick={handleSorting} value="address" align="right">Address</TableCellWithSort>
              <TableCell align="right">Owner</TableCell>
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
                <TableCell align="right">
                  {restaurant.user ?
                    <Link component={InertiaLink} href={route('users.index', restaurant.user.id)}>{restaurant.user.name}</Link>
                    : 'No owner'
                  }
                </TableCell>
                <TableCell align="right">{restaurant.phone}</TableCell>
                <TableCell align="right">{restaurant.latitude}</TableCell>
                <TableCell align="right">{restaurant.longitude}</TableCell>
                <TableCell align="right">
                  <Box display="flex" alignItems="center" className={classes.actions}>
                    <Link component={InertiaLink} href={route('restaurants.show', restaurant.id)}>View</Link>
                    <Box display="flex" alignItems="center" justifyContent="center" color={classes.edit}>
                      <Link component={InertiaLink} color="inherit" href={route('restaurants.edit', restaurant.id)}>Edit</Link>
                    </Box>
                    <Link component={InertiaLink} href={route('dishes.index', restaurant.id)}>See dishes</Link>
                    <Link color="error" component={Button} onClick={() => setCurrentRestaurant(restaurant.id)}>Delete</Link>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        className={classes.pagination}
        count={restaurants.meta.links.length - 3}
        size="small"
        page={restaurants.meta.current_page}
        onChange={handlePageChange} />

      {/* MODAL */}
      {currentRestaurant &&
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={Boolean(currentRestaurant)}
          onClose={() => setCurrentRestaurant(false)}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={Boolean(currentRestaurant)}>
            <div className={classes.innerModal}>
              <h2 id="transition-modal-title">Delete confirmation</h2>
              <p id="transition-modal-description">Are you sure you want to delete the restaurant?</p>
              <Button onClick={handleDelete}>Delete</Button>
            </div>
          </Fade>
        </Modal>
      }
    </Container>
  )
}

Index.layout = (page) => <DefaultLayout title="Restaurants - Intranet" children={page} />;
export default Index;