import React, { useEffect, useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import CartIcon from '@material-ui/icons/ShoppingCart';
import ExploreIcon from '@material-ui/icons/Explore';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircle from '@material-ui/icons/AccountCircle';
import BaseLayout from './_BaseLayout';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { makeStyles } from '@material-ui/core';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import Logo from '@/Shared/Logo';

const useStyles = makeStyles((theme) => ({
  topNavigation: {
    height: '3.5rem'
  },
  bottomNavigation: {
    width: '100%',
    height: '3.5rem',
    position: 'fixed',
    bottom: '0',
    boxShadow: theme.shadows[4]
  },
  logo: {
    width: '2rem',
    height: '2rem',
    color: 'inherit',
    marginRight: '0.5rem',
  },
  main: {
    marginBottom: '3.5rem',
    minHeight: `calc(100vh - 7rem)`
  }
}));

export default function DefaultLayout({ title, children }) {
  const pages = [
    { label: 'Intranet', name: 'Intranet/Index', route: 'intranet', isNotForClient: true, icon: DashboardIcon },
    { label: 'Explore', name: 'Explore', route: 'explore', icon: ExploreIcon },
    { label: 'Order', name: 'Order', route: 'order', icon: CartIcon },
    { label: 'Profile', name: 'Profile/Show', route: 'profile.show', icon: AccountCircle }
  ];

  const classes = useStyles();
  const { props: { user: { data: user } }, component } = usePage();
  const activeIndex = pages.findIndex((page) => page.name === component);

  return (
    <BaseLayout title={title}>
      <AppBar className={classes.topNavigation} position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h6">
            <Link color="inherit" variant="inherit" component={InertiaLink} href={route('dashboard')}>
              <Logo className={classes.logo} />
                Foodware
              </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.main}>
        {children}
      </div>
      <BottomNavigation
        className={classes.bottomNavigation}
        value={activeIndex}
        showLabels
      >
        {pages.map(page => {
          if (page.isNotForClient && user.role === 'client') return;

          return (
            <BottomNavigationAction key={page.name} component={InertiaLink} href={route(page.route)} label={page.label} icon={React.createElement(page.icon)} />
          );
        })}
      </BottomNavigation>
    </BaseLayout>
  );
}