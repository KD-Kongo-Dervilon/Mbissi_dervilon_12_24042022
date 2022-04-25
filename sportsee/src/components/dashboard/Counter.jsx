import React from 'react';
import PropTypes from "prop-types";

const Counter = ({ data }) => {
    const [type, value] = data

	const types = {
		calorieCount: "Calories",
		proteinCount: "Protéines",
		carbohydrateCount: "Glucides",
		lipidCount: "Lipides",
	};

    const title = types[type]

    return (
        <div className="counter">
            {title} : {value}
        </div>
    );
};

export default Counter;

Counter.prototype = {
	data: PropTypes.array.isRequired,
}; 