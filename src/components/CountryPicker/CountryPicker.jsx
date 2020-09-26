import React, {useState, useEffect} from "react";
import {FormControl, makeStyles, NativeSelect} from '@material-ui/core'

import {fetchCountries} from '../../api'


const useStyles = makeStyles({
  formControl: {
    width: '100%',
    marginBottom: '30px',
  }
})


const CountryPicker = ({handleCountryChange}) => {
  const styles = useStyles()
  const [fetchedCountries, setFetchedCountries] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries())
    }
    fetchAPI()
  }, [setFetchedCountries])

  // console.log(fetchedCountryNames)
  return (
    <div>
      <FormControl className = {styles.formControl}>
        <NativeSelect defaultValue = '' onChange = {(e) => handleCountryChange(e.target.value)}>
          <option value = '' >Global</option>
          {fetchedCountries.map((country, i) =><option key = {i} value = {country}>{country}</option> )}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
