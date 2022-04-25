import React from 'react';
import PropTypes from "prop-types";

const Score = ({ data }) => {
    return (
        <div className="score">
            SCORE: {data}
        </div>
    );
};

export default Score;

Score.prototype = {
	data: PropTypes.number.isRequired,
};