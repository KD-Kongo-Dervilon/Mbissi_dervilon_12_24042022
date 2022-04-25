import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import getData from '../../getData/getData';

const Radar = ({ userId }) => {
    const [data, setData] = useState();

	useEffect(() => {
		async function get() {
			const response = await getData("USER_PERFORMANCE", userId);
			setData(response.data);
		}
		get();
	}, [userId]);

    return (
        <div className="radar">
            return <div className="Radar">RADAR: </div>;
        </div>
    );
};

export default Radar;

Radar.proptype = {
	userId: PropTypes.number.isRequired,
};