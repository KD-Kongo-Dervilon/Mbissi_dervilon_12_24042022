import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import getData from '../../getData/getData';


const Duration = ({  userId }) => {
    const [data, setData] = useState();

	useEffect(() => {
		async function get() {
			const response = await getData("USER_AVERAGE_SESSIONS", userId);
			setData(response.data);
		}
		get();
	}, [userId]);

	return <div className="Duration">DURATION: {JSON.stringify(data)}</div>;
}

export default Duration;

Duration.prototype = {
	userId: PropTypes.number.isRequired,
};