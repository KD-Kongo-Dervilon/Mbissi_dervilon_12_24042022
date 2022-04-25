import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import getData from '../../getData/getData';

const Weight = ({ userId }) => {
    const [data, setData] = useState();

	useEffect(() => {
		async function get() {
			const response = await getData("USER_ACTIVITY", userId);
			setData(response.data);
		}
		get();
	}, [userId]);

    return (
        <div>
            WEIGHT: {JSON.stringify(data)}
        </div>
    );
};

export default Weight;


Weight.prototype = {
	userId: PropTypes.number.isRequired,
};