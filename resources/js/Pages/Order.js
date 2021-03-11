import React from "react";
import DefaultLayout from "@/Shared/Layouts/DefaultLayout";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
}));

const Order = () => {
  const classes = useStyles();

  return (
    <main>
      <Container>
        <Typography className={classes.title} component="h1" variant="h6" color="textSecondary">
          Order
        </Typography>
      </Container>
    </main>
  )
};

Order.layout = (page) => <DefaultLayout title="Order" children={page} />;
export default Order;