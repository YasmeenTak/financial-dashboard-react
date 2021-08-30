import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 20,
  },
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
      <AppBar position='static' color='sacndary'>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon
              onClick={() => {
                setShowSidebar(!showSidebar);
              }}
            />
          </IconButton>
          {/* <Typography variant='h6' className={classes.title}>
            admin
          </Typography> */}
          {/* <Button color='inherit'>admin</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
