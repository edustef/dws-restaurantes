import React from 'react';
import Helmet from "react-helmet";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CartIcon from '@material-ui/icons/ShoppingCart';
import ExploreIcon from '@material-ui/icons/Explore';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import BaseLayout from './BaseLayout';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { makeStyles } from '@material-ui/core';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';

const useStyles = makeStyles((theme) => ({
  bottomNavigation: {
    width: '100%',
    position: 'fixed',
    bottom: '0',
    boxShadow: theme.shadows[4]
  }
}));

export default function Layout({ title, children }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { user } = usePage().props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Helmet titleTemplate="%s | Ping CRM" title={title} />
      <BaseLayout>
        <AppBar position="sticky" color="primary">
          <Toolbar>
            <Typography component={InertiaLink} href={route('dashboard')} variant="h6">
              Foodware
            </Typography>
          </Toolbar>
        </AppBar>
        <BottomNavigation
          className={classes.bottomNavigation}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
        >
          {user?.role?.name !== 'client' && <BottomNavigationAction href={route('intranet')} label="Intranet" icon={<DashboardIcon />} />}
          <BottomNavigationAction component={InertiaLink} href={route('dashboard')} label="Explore" icon={<ExploreIcon />} />
          <BottomNavigationAction label="Order" icon={<CartIcon />} />
          <BottomNavigationAction component={InertiaLink} href={route('profile.show')} label="Profile" icon={<AccountCircle />} />
        </BottomNavigation>
        {children}
      </BaseLayout>
    </>
  );
}

