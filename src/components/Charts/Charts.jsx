import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";

import { fetchDailyData } from "../../api";

import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
    height: '40vh',
  }
})
const Charts = ({data, country}) => {
  const styles = useStyles()
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  // console.log(dailyData);
  const lineChart = (
     dailyData.length
     ? (
    <Line
      data={{
        labels: dailyData.map(({ data }) => data),
        datasets: [{
          data: dailyData.map(({ confirmed }) => confirmed),
          label: 'Infected',
          borderColor: '#3333ff',
          fill: true
        }, {
          data: dailyData.map(({ deaths }) => deaths),
          label: 'Deaths',
          borderColor: 'rgba(255, 0, 0, 0.5)',
          fill: true
        }],
      }}
      width = {900}
      height = {450}
      options={{
        maintainAspectRatio: false,
        responsive: true
      }}

      />) : null
  );

  const barChart = (
    data.confirmed
    ? (
      <Bar
        data = {{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [{
            label: 'People',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
              ],
            data: [data.confirmed.value, data.recovered.value, data.deaths.value]
          }]

        }}

        options = {{
          legend: {display: false},
          title: { display: true, text: `Current State in ${country}`}

        }}
        width = {900}
        height = {450}
        options={{
           maintainAspectRatio: false,
           responsive: true
          }}
      />
    ) : null

  )



  return (
    <div>
      <div className = {styles.container}>
      {country ? barChart : lineChart }
      </div>
    </div>
  );
};

export default Charts;
