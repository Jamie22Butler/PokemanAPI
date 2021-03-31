
import logo from './Images/image.png'
import  './style.css'
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'


const Navbar = () => {

    return (
            <nav className="Navbar">
                <img src = {logo} className = 'Poke-Logo' alt = 'logo'></img>
                <ul className="links">
                    <li><Link to = {'/About'}>About</Link></li>
                    <li><Link to = {'/'}>Home</Link></li>
                    <li>
                        <SearchIcon className = 'SearchIcon'/>
                        <TextField label = 'Search' className = 'searchInput'/>
                    </li>
                </ul>
            </nav>
    );
}
 
export default Navbar;