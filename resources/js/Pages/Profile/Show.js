import React from "react";
import DefaultLayout from "@/Shared/Layouts/DefaultLayout";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { InertiaLink } from '@inertiajs/inertia-react';

const Show = () => {

  return (
    <main>
      <Container>
        <Typography variant="h1">
          Profile
        </Typography>
        <Button variant="contained" color="secondary" method="post" as="button" href={route('logout')} component={InertiaLink}>Logout</Button>
      </Container>
    </main>
  )
};

Show.layout = (page) => <DefaultLayout title="Dashboard" children={page} />;
export default Show;