import React, { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select, Card, CardContent } from "@material-ui/core";
import InfoBox from './InfoBox';
import Map from './Map';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then(response => response.json())
      .then(data => {
        const countries = data.map(country => ({
          name: country.country,
          value: country.countryInfo.iso2
        }))

        setCountries(countries);
      })
    }
    getCountriesData();
  }, [])

  const onCountryChange = async(e) => {
    const countryCode = e.target.value
    setCountry(countryCode);
  }

  return (
    <div className="app">
      <div className="app_left">
        <div className="app_header">
          <h1>Covid-19 TRACKER</h1>
          <FormControl className="app_dropdown">
            <Select variant="outlined" value={country} onChange={onCountryChange}>
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map(country => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
                ))
              }
            </Select> 
          </FormControl>
        </div>

        <div className="app_stats">
          <InfoBox title="Coronavirus Cases" cases={123} total={2000}/>

          <InfoBox title="Recovered" cases={40} total={3000}/>

          <InfoBox title="Deaths" cases={100} total={4000}/>
        </div>

        <Map/>
      </div>
      <Card className="app_right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          {/* Table */}
          <h3>Worldwide new cases</h3>
          {/* Graph */}
        </CardContent>
        
      </Card>
    </div>
  );
}

export default App;
