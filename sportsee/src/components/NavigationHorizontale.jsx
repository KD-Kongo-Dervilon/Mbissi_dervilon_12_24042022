import React from 'react';
import logo from "../assets/logo.png";
import PropTypes from "prop-types"
import { Link, NavLink } from 'react-router-dom';

/**
 * This function returns a div with a logo and horizontal navigation.
 * @param {array} currentUser - Props containing userId state & setUserId setter.
 * @function onclick - Logo click switch between 2 mocked users.
 * @returns A div with a logo and a nav-h.
 */

const NavigationHorizontale = ({ currentUser }) => {
    const [userId, setUserId] = currentUser
    // Available users userId
    const ids = [12, 18];


    return (
        <nav className="Nav-h">
        <Link to="/accueil">
        <img
            className="logo"
            onClick={() => setUserId(ids.filter(id => id !== userId)[0])}
            src={logo}
            alt="SportSee logo"
            title="Click to switch demo User"
        />
        </Link>
            <ul className="nav-h">
                <NavLink to="/accueil">
				    <span className="nav-h_menu">Accueil</span>
                </NavLink>
                <NavLink to="/Profil">
				    <span className="nav-h_menu">Profil</span>
                </NavLink>
                <NavLink to="/reglage">
				    <span className="nav-h_menu">Réglages</span>
                </NavLink>
                <NavLink to="/communaute">
				    <span className="nav-h_menu">Communauté</span>
                </NavLink>
			</ul>
        </nav>
    );
};

export default NavigationHorizontale;

NavigationHorizontale.propTypes = {
	currentUser: PropTypes.arrayOf(
		PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
	),
};