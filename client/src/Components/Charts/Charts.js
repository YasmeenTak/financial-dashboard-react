import './style.css';
import React from 'react';
import { useStyles } from './style';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SimpleBarChart from '../ChartsCopm/SimpleBarChart';
import DonutChart from '../ChartsCopm/DonutChart';
import Dount from '../DountChartNew/Dount';
import ResponsiblePersonCol from '../ResponsiblePersonCol/ResponsiblePersonCol';

export default function Charts() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.charts}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper className={classes.paper}>
              <Typography
                variant='subtitle1'
                gutterBottom
                className={classes.titleChart}
                style={{ marginBottom: '30px' }}
              >
                Average time to clear notifications
              </Typography>
              <SimpleBarChart />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper className={classes.paper}>
              <div style={{ display: 'flex' }}>
                <Typography
                  variant='subtitle1'
                  gutterBottom
                  className={classes.titleChart}
                  style={{
                    width: '30%',
                    paddingRight: '5px',
                  }}
                >
                  Average time to clear notifications
                </Typography>
                <div
                  style={{
                    paddingRight: '20px',
                  }}
                >
                  <ResponsiblePersonCol />
                </div>
                <ResponsiblePersonCol />
              </div>
              <SimpleBarChart />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper className={classes.paper}>
              <Typography
                variant='subtitle1'
                gutterBottom
                className={classes.titleChart}
                style={{ marginBottom: '60px' }}
              >
                Active notifications
              </Typography>
              <DonutChart />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper className={classes.paper}>
              <div style={{ display: 'flex' }}>
                <Typography
                  variant='subtitle1'
                  gutterBottom
                  className={classes.titleChart}
                  style={{ paddingRight: '25px' }}
                >
                  Active notifications
                </Typography>
                <div style={{ paddingRight: '20px' }}>
                  <ResponsiblePersonCol />
                </div>
                <ResponsiblePersonCol />
              </div>
              <Dount />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
