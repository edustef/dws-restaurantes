import React from "react";
import DefaultLayout from "@/Shared/Layouts/DefaultLayout";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

}));

const Show = () => {
  const user = usePage().props.user.data;

  return (
    <main>
      <Container>
        <Typography component="h1" variant="h2">
          Profile
          </Typography>
        <Typography>
          {user.name}
        </Typography>
        <Button variant="contained" color="secondary" method="post" as="button" href={route('logout')} component={InertiaLink}>Logout</Button>
      </Container>
    </main>
  )
};

Show.layout = (page) => <DefaultLayout title="Profile" children={page} />;
export default Show;