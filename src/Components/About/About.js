
import React from 'react'   
import './style.css'
import image from '../../Images/Pikachu.gif'

const About = () => {
    return (
        <div className="AboutPage">
            <div className="aboutContainer">
                <h2>About</h2>
                <p>A PokeDex project</p>
                <p className = 'title'>Next steps</p>
                <li>Search bar</li>
                <li>Pagination</li>
                <li>Card filtering</li>
                <li>Attribute chart</li>
                <img src = {image} style ={{display: 'block', 'marginLeft': 'auto', 'marginRight': 'auto', height: 'auto', 'marginTop': 'auto', 'marginBottom': 'auto', float: 'bottom'}} alt = 'Loading'/>
            </div>
        </div>
    );
}
 
export default About;