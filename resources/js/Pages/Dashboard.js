import React from "react";
import DefaultLayout from "@/Shared/Layouts/DefaultLayout";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Dashboard = () => {

  return (
    <main>
      <Container>
        <Typography component="h1" variant="h2">
          Foodware
      </Typography>
      </Container>
    </main>
  )
};

Dashboard.layout = (page) => <DefaultLayout title="Dashboard" children={page} />;
export default Dashboard;