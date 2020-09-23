import React from "react";
import CountUp from "react-countup";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  StylesProvider,
} from "@material-ui/core";

import styles from "./Cards.module.css";

const Cards = (props) => {
  console.log(props.data);
  if (!props.data.confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
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
              {props.data.lastUpdate}
            </Typography>
            <Typography variant="body2">
              Number of Active Cases for COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">REAL DATA</Typography>
            <Typography color="textSecondary">REAL DATE</Typography>
            <Typography variant="body2">
              Number of Recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Fatalities
            </Typography>
            <Typography variant="h5">REAL DATA</Typography>
            <Typography color="textSecondary">REAL DATE</Typography>
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
