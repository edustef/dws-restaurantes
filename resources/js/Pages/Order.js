import React from "react";
import DefaultLayout from "@/Shared/Layouts/DefaultLayout";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Order = () => {

  return (
    <main>
      <Container>
        <Typography component="h1" variant="h2">
          Order
      </Typography>
      </Container>
    </main>
  )
};

Order.layout = (page) => <DefaultLayout title="Order" children={page} />;
export default Order;