import React from 'react';
import PropTypes from "prop-types";

const Score = ({ data }) => {
    return (
        <div className="score">
            SCORE:
        </div>
    );
};

export default Score;

Score.proptype = {
	data: PropTypes.number.isRequired,
};