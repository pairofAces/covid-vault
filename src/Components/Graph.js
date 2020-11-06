import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@material-ui/core";
import InfoBox from '../components/InfoBox/InfoBox.js';
import Table from '../components/Table/Table.js';
import LineGraph from './LineGraph';
import { prettyPrintStat } from './util';

export default function Graph() {
    const [countryInfo, setCountryInfo] = useState({});
    const [casesType, setCasesType] = useState("cases");


  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
    .then(resp => resp.json())
    .then(data => {
      setCountryInfo(data);
    })
  }, [])

 

  

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
                <Table />
                    <h3>Worldwide new {casesType}</h3>
                <LineGraph className="app_graph" casesType={casesType}/>
                </CardContent>
            </Card>
        </div>
      </div>
  )
}

