import React, { useEffect } from 'react';

const Header = ({ firstname }) => {
    useEffect(() => console.log("firstname", firstname), [firstname]); 

    return (
        <div className="header">
            <h1>Bonjour <span className="name">{firstname}</span></h1>
			<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

export default Header;