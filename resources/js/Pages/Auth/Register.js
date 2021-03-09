import React from 'react';
import { InertiaLink, useForm } from '@inertiajs/inertia-react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GuestLayout from '../../Shared/Layouts/GuestLayout';

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

const Register = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const classes = useStyles();
  const { data, setData, errors, post, processing } = useForm({
    email: '',
    password: '',
    password_confirmation: '',
    name: '',
    lastname: '',
    address: '',
    city: '',
    phone: '',
    dni: '',
    remember: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('register'));
  }

  return (
    <main>
      <Container className={classes.container} component="main" maxWidth="sm">
        <Typography className={classes.title} component="h1" variant="h4">
          Sign up
          </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            error={Boolean(errors.email)}
            helperText={errors.email}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={data.email}
            onChange={e => setData('email', e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={data.password}
            onChange={e => setData('password', e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password_confirmation"
            label="Confirm Password"
            type="password"
            id="password_confirmation"
            autoComplete="current-password"
            value={data.password_confirmation}
            onChange={e => setData('password_confirmation', e.target.value)}
          />
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
            autoComplete="name"
            value={data.name}
            onChange={e => setData('name', e.target.value)}
          />
          <TextField
            error={Boolean(errors.lastname)}
            helperText={errors.lastname}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="Last Name"
            name="lastname"
            autoComplete="last name"
            value={data.lastname}
            onChange={e => setData('lastname', e.target.value)}
          />
          <TextField
            error={Boolean(errors.dni)}
            helperText={errors.dni}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="dni"
            label="National ID"
            name="dni"
            autoComplete="national id"
            value={data.dni}
            onChange={e => setData('dni', e.target.value)}
          />
          <TextField
            error={Boolean(errors.address)}
            helperText={errors.address}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="address"
            label="Address"
            name="address"
            autoComplete="address"
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
            id="city"
            label="City"
            name="city"
            autoComplete="city"
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
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete="phone"
            value={data.phone}
            onChange={e => setData('phone', e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value={data.remember} onChange={e => setData('remember', e.target.value)} name="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            className={classes.button}
            type="submit"
            variant="contained"
            color="primary"
            disabled={processing}
            onClick={handleSubmit}
          >
            Register
          </Button>

          <Link component={InertiaLink} href={route('login')} variant="body2">
            Have an acount? Login here!
            </Link>
        </form>
      </Container>
    </main >
  );
};

Register.layout = (page) => <GuestLayout title="Login" children={page} />;

export default Register;