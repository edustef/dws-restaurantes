import React from 'react';
import { InertiaLink, useForm, usePage } from '@inertiajs/inertia-react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DefaultLayout from '@/Shared/Layouts/DefaultLayout';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(4)
  },
  title: {
    marginBottom: theme.spacing(2)
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  button: {
    width: '100%',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
}));

const Edit = () => {
  const classes = useStyles();
  const restaurant = usePage().props.restaurant.data;
  const { data, setData, errors, put, processing } = useForm({
    name: restaurant.name,
    address: restaurant.address,
    city: restaurant.city,
    phone: restaurant.phone,
    latitude: restaurant.latitude,
    longitude: restaurant.longitude,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route('restaurants.update', restaurant.id));
  }

  return (
    <main>
      <Container className={classes.container} component="main" maxWidth="sm">
        <Typography className={classes.title} component="h1" variant="h4">
          Create restaurant
          </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            error={Boolean(errors.name)}
            helperText={errors.name}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoFocus
            value={data.name}
            onChange={e => setData('name', e.target.value)}
          />
          <TextField
            error={Boolean(errors.address)}
            helperText={errors.address}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="address"
            label="Address"
            id="address"
            value={data.address}
            onChange={e => setData('address', e.target.value)}
          />
          <TextField
            error={Boolean(errors.city)}
            helperText={errors.city}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="city"
            label="City"
            id="city"
            value={data.city}
            onChange={e => setData('city', e.target.value)}
          />
          <TextField
            error={Boolean(errors.phone)}
            helperText={errors.phone}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Phone"
            id="phone"
            value={data.phone}
            onChange={e => setData('phone', e.target.value)}
          />
          <TextField
            error={Boolean(errors.latitude)}
            helperText={errors.latitude}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="latitude"
            label="Latitude"
            type="number"
            id="latitude"
            value={data.latitude}
            onChange={e => setData('latitude', e.target.value)}
          />
          <TextField
            error={Boolean(errors.longitude)}
            helperText={errors.longitude}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="longitude"
            label="Longitude"
            type="number"
            id="longitude"
            value={data.longitude}
            onChange={e => setData('longitude', e.target.value)}
          />
          <Button
            className={classes.button}
            type="submit"
            variant="contained"
            color="primary"
            disabled={processing}
            onClick={handleSubmit}
          >
            Update
          </Button>
        </form>
      </Container>
    </main >
  );
};

Edit.layout = (page) => <DefaultLayout title="Create Restaurant" children={page} />;

export default Edit