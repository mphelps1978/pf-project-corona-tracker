import React from "react";
import CountUp from "react-countup";
import {
  Card,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";

import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin:  '50px 0'
  },

  card: {
    margin: '0 2%',
    [theme.breakpoints.up('sm')]: {
      width: '85%'
    }
  },

  infected: {
    borderBottom: '10px solid rgba(0, 0, 255, 0.5)',
  },
  recovered: {
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
  },
  deaths: {
    borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
  }

}))







const Cards = (props) => {
  const styles = useStyles()
  // console.log(props.data);
  if (!props.data.confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs = {12} md = {3} className = {styles.card, styles.infected}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={props.data.confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(props.data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of Active Cases for COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs = {12} md = {3} className = {styles.card, styles.recovered}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
            <CountUp
                start={0}
                end={props.data.recovered.value}
                duration={2.5}
                separator=","
              />
              </Typography>
            <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of Recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs = {12} md = {3} className = {styles.card, styles.deaths}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Fatalities
            </Typography>
            <Typography variant="h5">
            <CountUp
                start={0}
                end={props.data.deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of Confirmed Fatalities due to COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
