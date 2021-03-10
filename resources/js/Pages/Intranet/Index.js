import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import DefaultLayout from '@/Shared/Layouts/DefaultLayout';
import SearchInput from '@/Shared/SearchInput';
import { Divider, List, ListItem, makeStyles } from '@material-ui/core';

const menuItems = [
  { title: 'Restaurants', route: 'restaurants.index' },
  { title: 'Dishes', route: 'dishes.index' },
  { title: 'Categories', route: 'categories.index' },
  { title: 'Orders', route: 'orders.index' },
  { title: 'Users', route: 'users.index' }
];

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  listItem: {
    '&:hover': {
      backgroundColor: theme.palette.success.main
    }
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
        <List component="nav">
          {menuItems.map(item => (
            <ListItem key={item.title} className={classes.listItem} component={InertiaLink} href={route(item.route)}>
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
