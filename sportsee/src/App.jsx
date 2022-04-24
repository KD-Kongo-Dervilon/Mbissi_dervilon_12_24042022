import React from 'react';
import "./styles/app.scss";
import NavigationHorizontale from './components/NavigationHorizontale';
import NavigationVerticale from './components/NavigationVerticale';
import Dashboard from './pages/Dashboard';


/**
 * This function component returns the global Dashboard App.
 * NavH - Horizontal nav covers 100% width.
 * .app-content - Container for NAvV & Dashboard component.
 * NavV - Vertical Nav covers 100% height.
 * Dashboard - Contains all graphics & user data.
 * @returns The global interface of SportSee Dashboard
 */

const App = () => {
  return (
    <div className="App">
      <NavigationHorizontale />
      <div className="app-content">
        <NavigationVerticale />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;