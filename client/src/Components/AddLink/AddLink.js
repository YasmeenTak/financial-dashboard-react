import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './style';
import Paper from '@material-ui/core/Paper';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TableLinks from '../TableLinks/TableLinks';
import data from "./mock-data.json";

export default function AddLink() {
  const classes = useStyles();
  const [links, setLinks] = useState();

  const [addFormData, setAddFormData] = useState({
    title: '',
    url: '',
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    console.log('hi', event.target.value);

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    console.log('hiiiiiiiiii');

    const newLink = {
      title: addFormData.title,
      url: addFormData.url,
    };

    const newLinks = [...links, newLink];
    setLinks(newLinks);
    return <TableLinks newLink={newLinks} />;
  };
  return (
    <div className={classes.root}>
      <Grid container>
        <Paper className={classes.paper}>
          <p className={classes.addTitle}>
            <ArrowBackIcon className={classes.backArrow} /> Add
          </p>
          <form
            className={classes.addForm}
            onSubmit={handleAddFormSubmit}
            noValidate
            autoComplete='off'
          >
            <Grid container>
              <Grid item lg={6} xs={12}>
                <TextField
                  id='standard-basic'
                  name='title'
                  label='Title'
                  className={classes.addTextField}
                  required
                  onChange={handleAddFormChange}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <TextField
                  id='url'
                  label='URL'
                  className={classes.addTextField}
                  name='url'
                  autoComplete='url'
                  type='url'
                  required
                  onChange={handleAddFormChange}
                />
              </Grid>

              <Grid item xs={12} className={classes.AddBtnGrid}>
                <Button
                  variant='contained'
                  color='secondary'
                  className={classes.AddBtn}
                  // onClick={(e) => console.log(e.target.value, 'hi')}
                  onSubmit={handleAddFormSubmit}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}
