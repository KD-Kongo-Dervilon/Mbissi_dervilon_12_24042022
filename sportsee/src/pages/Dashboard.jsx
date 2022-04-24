import React from 'react';
import Header from '../components/dashboard/Header';
import Poids from '../components/dashboard/Poids';
import Objectifs from '../components/dashboard/Objectifs';
import Radar from '../components/dashboard/Radar';
import Score from '../components/dashboard/Score';
import Counter from '../components/dashboard/Counter';


const Dashboard = () => {
    return (
        <div className="Dashboard">
            <Header />
            <div className="dashboard_graphs">
                <div className="graphs_left">
                    <Poids/>
                    <Objectifs />
                    <Radar />
                    <Score/>
                    <Counter />
                </div>
                <div className="graphs_right">

                </div>
            </div>
        </div>
    );
};

export default Dashboard;