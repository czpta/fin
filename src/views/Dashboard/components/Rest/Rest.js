import React, {useState, useEffect, Suspense} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';

import { getAllEntries, deleteEntry, editEntry } from '../../../../api'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  }
}));

const Rest = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  // State
  // const [mainDB, setDB] = useState([]); // No longer going with json-server
  const [entry, setEntries] = useState([])
  
  // No longer going with json-server npm package
  // useEffect(() => {
  //   // Loads data from json-server REST API
  //   fetch('http://localhost:3000/budget')
  //   .then(response => response.json())
  //   .then((result) => {
  //     setDB(result);
  //   });
  // }, []);

  useEffect(() => {
    getAllEntries.then(res => setEntries(res))
  }, [])
  console.log(entry);

  function LazyLoad(props) {
    const reptiles = ["alligator", "snake", "lizard"];
  
    return (
      <ol>
        {entry.map((cost) => (
          <li key={cost.data.data.loanId}>Month's cost: {cost.data.data.currentStanding}</li>
        ))}
      </ol>
    );
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              Rest
            </Typography>
            {/*Input your entry result here */}
            <LazyLoad cost={entry}/>
            <Typography variant="h3">Month</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <MoneyIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <div className={classes.difference}>
          <ArrowDownwardIcon className={classes.differenceIcon} />
          <Typography
            className={classes.differenceValue}
            variant="body2"
          >
            12%
          </Typography>
          <Typography
            className={classes.caption}
            variant="caption"
          >
            Since last month
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

Rest.propTypes = {
  className: PropTypes.string
};

export default Rest;
