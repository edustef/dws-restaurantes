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
            error={Boolean(errors.password)}
            helperText={errors.password}
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