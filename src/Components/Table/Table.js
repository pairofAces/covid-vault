import React from 'react';
import numeral from 'numeral';
import './Table.css';
import { sortData } from '../util';
import emptyHeart from '../../Images/empty-heart.svg';
import filledHeart from '../../Images/filled-heart.svg';

class Table extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tableData: []
        }
        
    }

    
    getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then(response => response.json())
      .then(data => {
        
        
        data.forEach((entry) => {
          entry.favorite = false;
        })

        if (!localStorage.getItem('favorites')) {
            let favorites = [];
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
        
        const favorites = JSON.parse(localStorage.getItem('favorites'))
        
        favorites.forEach((favorite) => {
            data.forEach((country) => {
                
                if (favorite === country.country) {
                    country.favorite = true;
                }
            })
        })
        const tableData = sortData(data);
        this.setState({tableData})

      })
    }
    
    componentDidMount() {
        this.getCountriesData();
    }
  
    
    setAsFav = (country) => {
        
        return () => {
            const favorites = JSON.parse(localStorage.getItem('favorites'))
            favorites.push(country)

            localStorage.setItem('favorites', JSON.stringify(favorites))
            
            let { tableData } = this.state
            tableData.forEach((item) => {
                if (item.country === country) {
                    
                    item.favorite = !item.favorite
                } 
            })
            tableData = sortData(tableData)
            this.setState({tableData});
        }
    }

    
    render() {
        const {tableData} = this.state
        
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
