import React from 'react';
import numeral from 'numeral';
import './Table.css';
import { sortData } from '../util';
import emptyHeart from '../../Images/empty-heart.svg';
import filledHeart from '../../Images/filled-heart.svg';

class Table extends React.Component {

    constructor(props) {
        super(props);
        console.log("props:", props)
        this.state = {
            tableData: []
        }
        // console.log("state:", this.state)
    }

    
    getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then(response => response.json())
      .then(data => {
        
        
        data.forEach((entry) => {
          entry.favorite = false;
        })
        const tableData = sortData(data);
        console.log("table data:", tableData);
        this.setState({tableData});
      })
    }
    
    componentDidMount() {
        this.getCountriesData();
    }
  
    
    setAsFav = (country) => {
        
        return () => {
            let { tableData } = this.state
            console.log("going to set as fav:", country)
            console.log("set as favorite countries:", tableData)
            tableData.forEach((item) => {
              // console.log("item:", item, "country:", country)
                if (item.country === country) {
                    console.log("item:", item)
                    item.favorite = !item.favorite
                } 
            })
            tableData = sortData(tableData)
            this.setState({tableData});
        }
    }

    
    render() {
        const {tableData} = this.state
        console.log("countries:", tableData)
        return (
            <div className="table">
                {tableData.map(({ country, cases, countryInfo, favorite }) => (
                    <tr key={country}>
                        <td>
                            <div className="flag-info">
                                <img src={countryInfo.flag} style={{height:"26px", width:"38px"}}/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src={favorite ? filledHeart : emptyHeart} onClick={this.setAsFav(country)}/>
                            </div>
                        </td>
                        <td>{country}</td>
                        <td><strong>{numeral(cases).format("0,0")}</strong></td>
                    </tr>
                ))}
            </div>
        )
    }
}




export default Table
