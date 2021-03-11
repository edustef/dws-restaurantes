import React from "react";
import DefaultLayout from "@/Shared/Layouts/DefaultLayout";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
}));

const Show = () => {
  const classes = useStyles();
  const user = usePage().props.user.data;
  console.log(usePage());

  return (
    <main>
      <Container>
        <Typography className={classes.title} component="h1" variant="h6" color="textSecondary">
          Profile
        </Typography>
        <Typography>
          {user.email}
        </Typography>
        <Button variant="contained" color="secondary" method="post" as="button" href={route('logout')} component={InertiaLink}>Logout</Button>
        <Box>
          <Typography className={classes.title} component="h2" variant="h5" color="textSecondary">
            Order history
          </Typography>
        </Box>
      </Container>
    </main>
  )
};

Show.layout = (page) => <DefaultLayout title="Profile" children={page} />;
export default Show;