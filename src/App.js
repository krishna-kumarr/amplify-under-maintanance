import React from 'react';
import MaintenancePage from './pages/MaintenancePage';

const App = () => {
  // Check if the maintenance mode is enabled
  const isUnderMaintenance = process.env.REACT_APP_MAINTENANCE === 'true';

  if (isUnderMaintenance) {
    return <MaintenancePage />;
  }

  console.log(process.env.REACT_APP_MAINTENANCE)

  return (
    <div>
      <h1>Welcome to My React App</h1>
      {/* Your app's content goes here */}
      <p>This is the main application content.</p>
    </div>
  );
};

export default App;

