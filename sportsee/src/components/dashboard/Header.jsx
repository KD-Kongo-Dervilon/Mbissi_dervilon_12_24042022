import React from 'react';

const Header = ({ firstname }) => { 

    return (
        <div className="header">
            <h1>Bonjour <span className="name" data-testid="firstname">{firstname}</span></h1>
			<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

export default Header;