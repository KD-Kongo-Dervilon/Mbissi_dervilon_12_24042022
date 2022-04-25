import React, { useEffect, useState } from 'react';
import Header from '../components/dashboard/Header';
import Poids from '../components/dashboard/Poids';
import Objectifs from '../components/dashboard/Objectifs';
import Radar from '../components/dashboard/Radar';
import Score from '../components/dashboard/Score';
import Counter from '../components/dashboard/Counter';
import PropTypes from "prop-types";
import getData from '../getData/getData';



const Dashboard = ({ userId }) => {
    const [mainData, setMainData] = useState();

    useEffect(() => {
		async function get() {
			const response = await getData("USER_MAIN_DATA", userId);
			setMainData(response);
		}
		get();
	});

    return (
        <div className="Dashboard">
            <Header firstname={mainData?.userInfos.firstName} />
            <div className="dashboard_graphs">
                <div className="graphs_left">
                    <Poids/>
                    <Objectifs />
                    <Radar />
                    <Score/>
                </div>
                <div className="graphs_right">

                </div>
            </div>
        </div>
    );
};

export default Dashboard;

Dashboard.prototype = {
	userId: PropTypes.number,
};