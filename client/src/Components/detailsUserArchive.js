import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ReplyIcon from '@material-ui/icons/Reply';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paperUser: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  avatar: {},
  name: {
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 10,
  },
  titleName: {
    fontSize: 11,
  },
  date: {
    float: 'right',
    fontSize: 11,
  },
  chatIcon: { color: '#FF6565', marginRight: 5, fontSize: 16 },
  replyIcon: { marginTop: -7 },
  textOne: { fontWeight: 'bold', marginTop: -3 },
  timeArchive: { color: '#9CA1AC' },
  subTitle: {
    textAlign: 'start',
    paddingLeft: 7,
    color: '#2C3758',
    fontSize: '10px',
  },
  divider: {
    margin: '15px 0 15px ',
  },
}));
export default function DetailsUserArchive() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ display: 'flex' }}>
        <Avatar
          alt='Remy Sharp'
          src='/static/images/avatar/1.jpg'
          className={classes.avatar}
        />
        <Typography
          variant='caption'
          display='block'
          gutterBottom
          className={classes.name}
          align='center'
        >
          Billy Roy
        </Typography>
      </div>
      <Divider className={classes.divider} />
      <div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ display: 'flex' }}>
            <ReplyIcon className={classes.replyIcon} />
            <ForumOutlinedIcon className={classes.chatIcon} />
            <Typography
              variant='subtitle2'
              gutterBottom
              className={classes.textOne}
            >
              Request a Document
            </Typography>
          </div>
          <div style={{ marginLeft: 'auto', marginTop: '-7px' }}>
            <Typography
              className={classes.timeArchive}
              variant='caption'
              display='block'
              gutterBottom
            >
              Sun 02:17 PM
            </Typography>
          </div>
        </div>
        <div>
          <Typography
            variant='caption'
            display='block'
            gutterBottom
            className={classes.subTitle}
          >
            <span style={{ fontWeight: 'bold' }}>documents:</span> Initial
            filing documents
          </Typography>
        </div>
      </div>
      <Divider className={classes.divider} />
    </div>
  );
}
