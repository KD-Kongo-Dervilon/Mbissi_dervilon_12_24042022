import React from 'react';
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const NavigationHorizontale = () => {
    return (
        <div className="Nav-h">
            <img className="logo" src={logo} alt="SportSee logo" />
            <nav className="nav-h">
                <ul>
                    <li className="nav-h_menu">
                        <NavLink
                            exact to="/"
                            className="nav_link"
                            >
                                Accueil
                        </NavLink>
                    </li>
                    <li className="nav-h_menu">
                        <NavLink
                            exact to="/"
                            className="nav_link"
                            >
                                Réglages
                        </NavLink>
                    </li>
                    <li className="nav-h_menu">
                        <NavLink
                            exact to="/"
                            className="nav_link"
                            >
                                Profil
                        </NavLink>
                    </li>
                    <li className="nav-h_menu">
                        <NavLink
                            exact to="/"
                            className="nav_link"
                            >
                                Communauté
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavigationHorizontale;