import React, { useState, useEffect } from "react";

import { Cards, Charts, CountryPicker } from "./components";
import Axios from "axios";

import { fetchData } from "./api";
import logoImage from './images/logo.png'

import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({

  body: {
    backgroundColor: 'rgb(250, 250, 250)',
  },

  container: {
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    [theme.breakpoints.up('md')]: {
      margin: '0 10%'
    }
  },

  image: {
    width: '370px',
    marginTop: '20px',
    paddingBottom: '30px',
  }

}))

const App = () => {
  const styles = useStyles()
  const [covidData, setCovidData] = useState({});
  const [country, setCountry] = useState('')

  useEffect(() => {
    const fetchAPI = async () => {
      setCovidData(await fetchData())
    }
    fetchAPI()
  }, []);

const handleCountryChange = async (country) => {
  // fetch the data, then set the state
  const fetchedData = await fetchData(country)
  setCountry(country)
  setCovidData(fetchedData)

  // console.log(fetchedData)
  // console.log(country);
}

  return (
    <div className = {styles.container}>
      <img className = 'image' src = {logoImage} alt = "COVID-19"/>
      <Cards data={covidData} />
      <CountryPicker handleCountryChange = {handleCountryChange} />
      <Charts data = {covidData} country = {country}/>
    </div>
  );
};

export default App;
