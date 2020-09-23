import React, { useState, useEffect } from "react";

import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App-module.css";
import Axios from "axios";

// import { fetchData } from "./api";

const App = () => {
  const [covidData, setCovidData] = useState({});

  useEffect(() => {
    Axios.get("https://covid19.mathdro.id/api")
      .then((res) => {
        console.log(res);
        setCovidData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(covidData);

  return (
    <div className={styles.container}>
      <Cards data={covidData} />
      <CountryPicker />
      <Charts />
    </div>
  );
};

export default App;
