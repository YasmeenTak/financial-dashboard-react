import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import User from '../../Components//userArchive';
import DetailsUser from '../../Components/DetailsUserArchive';
import { makeStyles } from '@material-ui/core/styles';

import './style.css';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  mainTabs: {
    flex: 4,
    backgroundColor: '#f5f9ff',
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    margin: 30,
    borderRadius: 15,
    paddingBottom: 50,
  },
  searchRoot: {
    padding: '1px 1px',
    display: 'flex',
    alignItems: 'center',
    width: 280,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: 13,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.mainTabs}>
      <Tabs className={classes.root}>
        <TabList>
          <div component='form' className={classes.searchRoot}>
            <IconButton
              type='submit'
              className={classes.iconButton}
              aria-label='search'
            >
              <SearchIcon />
            </IconButton>

            <InputBase
              className={classes.input}
              placeholder='Search Message or Name'
            />
          </div>
          <Tab>
            <User />
          </Tab>
          <Tab>
            <User />
          </Tab>
          <Tab>
            <User />
          </Tab>
          <Tab>
            <User />
          </Tab>
          <Tab>
            <User />
          </Tab>
        </TabList>

        <TabPanel>
          <div className='panel-content'>
            <DetailsUser />
          </div>
        </TabPanel>
        <TabPanel>
          <div className='panel-content'>
            <DetailsUser />
          </div>
        </TabPanel>
        <TabPanel>
          <div className='panel-content'>
            <DetailsUser />
          </div>
        </TabPanel>
        <TabPanel>
          <div className='panel-content'>
            <DetailsUser />
          </div>
        </TabPanel>
        <TabPanel>
          <div className='panel-content'>
            <DetailsUser />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
