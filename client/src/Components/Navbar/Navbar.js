import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuIcon: {
    color: '#2C3758',
    flexGrow: 1,
  },
  title: {
    color: '#2C3758',
  },
  toolbar: {
    minHeight: 20,
    backgroundColor: 'white',
  },

  logoImg: {
    width: 80,
    height: 28,
    marginRight: 110,
  },
  // login: { flexGrow: 1 },
}));

export default function Navbar({ onShowSidebarChange }) {
  const classes = useStyles();
  const [showSidebar, setShowSidebar] = useState(true);

  const handelShowSiderbar = () => {
    onShowSidebarChange(showSidebar);
  };
  useEffect(() => {
    handelShowSiderbar();
  }, [showSidebar]);

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <Link to='/login'>
            <img
              src='/assets/img/logo.PNG'
              className={classes.logoImg}
              alt='logo'
            />
          </Link>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon
              className={classes.menuIcon}
              onClick={() => {
                setShowSidebar(!showSidebar);
              }}
            />
          </IconButton>
          {/* <div>
            <Button edge='start' className={classes.login}>
              Login
            </Button>
          </div> */}
          {/* <Typography variant='h6' className={classes.title}>
            admin
          </Typography> */}
          {/* <Button color='inherit'>admin</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
