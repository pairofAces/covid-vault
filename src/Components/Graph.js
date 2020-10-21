import React, { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select, Card, CardContent } from "@material-ui/core";
<<<<<<< HEAD
import InfoBox from '../components/InfoBox/InfoBox.js';
import Table from '../components/Table/Table.js';
=======
import InfoBox from './InfoBox/InfoBox.js';
import Table from './Table/Table.js';
>>>>>>> login
import LineGraph from './LineGraph';
import { sortData, prettyPrintStat } from './util';

export default function Graph() {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('worldwide');
    const [countryInfo, setCountryInfo] = useState({});
    const [tableData, setTableData] = useState([]);
    const [mapCenter, setMapCenter] = useState({
        lat: 34.80746,
        lng: -40.4796
    });
    const [mapZoom, setMapZoom] = useState(4);
    const [mapCountries, setMapCountries] = useState([]);
    const [casesType, setCasesType] = useState("cases");


  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
    .then(resp => resp.json())
    .then(data => {
      setCountryInfo(data);
    })
  }, [])

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then(response => response.json())
      .then(data => {
        const countries = data.map(country => ({
          name: country.country,
          value: country.countryInfo.iso2
        }));

        const sortedData = sortData(data);
        setTableData(sortedData);
        setMapCountries(data);
        setCountries(countries);
      })
    }
    getCountriesData();
  }, [])

  const onCountryChange = async (e) => {
    const countryCode = e.target.value
    setCountry(countryCode);

    const url = countryCode === 'worldwide' 
      ? 'https://disease.sh/v3/covid-19/all' 
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`
    await fetch(url)
    .then(resp => resp.json())
    .then(data => {
      setCountry(countryCode); 
      setCountryInfo(data);

      // setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
      // setMapZoom(4);
      countryCode === "worldwide"
          ? 
          setMapCenter([34.80746, -40.4796])
          : setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
    })
  }

  return (
      <div>

            <div className="app_stats">
            <InfoBox active={casesType === "cases"} onClick={e => setCasesType('cases')} title="Active Coronavirus Cases" cases={prettyPrintStat(countryInfo.todayCases)} total={prettyPrintStat(countryInfo.cases)}/>

            <InfoBox active={casesType === "recovered"} onClick={e => setCasesType('recovered')} title="Recovered" cases={prettyPrintStat(countryInfo.todayRecovered)} total={prettyPrintStat(countryInfo.recovered)}/>

            <InfoBox active={casesType === "deaths"} onClick={e => setCasesType('deaths')} title="Deaths" cases={prettyPrintStat(countryInfo.todayDeaths)} total={prettyPrintStat(countryInfo.deaths)}/>
            </div>
        <div>
            <Card className="app_right">
                <CardContent>
                    <h3>Live Cases by Country</h3>
                <Table countries={tableData} />
                    <h3>Worldwide new {casesType}</h3>
                <LineGraph className="app_graph" casesType={casesType}/>
                </CardContent>
            </Card>
        </div>
      </div>
  )
}

