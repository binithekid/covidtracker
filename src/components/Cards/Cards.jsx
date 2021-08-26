import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

//Styling
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading..";
  }

  console.log(recovered);

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        <Grid
          item
          xs={12}
          md={5}
          component={Card}
          className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography
              className='infectedHeading'
              color='textSecondary'
              gutterBottom>
              Infected
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2'>
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          xs={12}
          md={5}
          component={Card}
          className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Deaths
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=','
              />
            </Typography>{" "}
            <Typography color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>{" "}
            <Typography variant='body2'>
              Number of deaths from COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
