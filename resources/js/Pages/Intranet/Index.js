import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import DefaultLayout from '@/Shared/Layouts/DefaultLayout';
import { List, ListItem, makeStyles } from '@material-ui/core';

const menuItems = [
  { title: 'Restaurants', route: 'restaurants.index' },
  { title: 'Dishes', route: 'dishes.index' },
  { title: 'Categories', route: 'categories.index' },
  { title: 'Orders', route: 'orders.index' }
];

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

const Index = () => {
  const classes = useStyles();
  return (
    <main>
      <Container>
        <Typography className={classes.title} component="h1" variant="h6" color="textSecondary">
          Intranet
        </Typography>
        <List>
          {menuItems.map(item => (
            <ListItem key={item.title} component={InertiaLink} href={route(item.route)}>
              {item.title}
            </ListItem>
          ))}
        </List>
      </Container>
    </main >
  );
};

// Persistent layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Index.layout = page => <DefaultLayout title="Intranet" children={page} />;

export default Index;
