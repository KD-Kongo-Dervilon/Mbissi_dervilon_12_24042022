import React from 'react';
import PropTypes from "prop-types";

/**
 * The Header component is a React component that renders a header with a name and a paragraph
 * @param {string} firstname
 * @returns A div with a h1 and a p.
 */

const Header = ({ firstname }) => { 

    return (
        <div className="header">
            <h1>Bonjour <span className="name" data-testid="firstname">{firstname}</span></h1>
			<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

export default Header;

Header.propTypes = {
	firstname: PropTypes.string.isRequired
}