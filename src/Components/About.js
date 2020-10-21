import React from 'react'
import '../App.css'
import img from '../Images/me.jpg';

function About() {
    return (
        <div className="about_header">
            <h1>About Page</h1>
            <br></br>
<<<<<<< HEAD
            <br></br>
            <br></br>

=======
>>>>>>> login
            <div className="row">
                
                    <div className="card-left">
                        <img src={img} alt="karan" />
                    </div>
                
                    <div className="card-right">
                        <h2>What is Covid-Vault?</h2>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h3>
                            <ul>
                                <li>
                                    Covid-Vault is an app that tracks and visualizes data regarding the Covid-19 Pandemic.
                                </li>
                                <br></br>
                                <li>
                                    A user is able to view data regarding active covid-19 cases, recovered cases, and deaths, by country.
                                </li>
                                <br></br>
                                <li>
                                    The tracker shows data in a worldwide map view.
                                </li>
                                <br></br>
                                <li>
                                    The graph displays data in a table, listing countries and how many total live cases they have, from greatest to least.
                                </li>
                                <br></br>
                                <li>
<<<<<<< HEAD
                                    The graph also shows a line graph with data regarding the additional new active cases, recovered cases, or deaths per day, over the past 120 days. 
=======
                                    The graph also shows a line graph with data regarding the additional new deaths per day, over the past 120 days. 
>>>>>>> login
                                </li>
                            </ul>
                        </h3>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h4>
                            As a student in Flatiron's fulltime immersive software engineering program, I had a lot of fun building this project. I always had an idea about this since day 1 and it feels great to see it come to fruition.
                        </h4>
                        
                        
                    </div>
            </div>

        </div>
        
    )
}

export default About