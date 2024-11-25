import React, { useEffect, useState } from 'react';
import MaintenancePage from './pages/MaintenancePage';
import axios from 'axios';

const App = () => {
  const [isUnderMaintanance, setIsUnderMaintanance] =useState(false);

  const getMaintananceStatus = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/v1/get_maintanance_status")
      setIsUnderMaintanance(data?.data[0]?.under_maintanance || false)
    } catch (Err) {
      console.log(Err)
    }
  }

  useEffect(() => {
    getMaintananceStatus()
  }, [])

  if (isUnderMaintanance) {
    return <MaintenancePage />;
  }


  return (
    <div>
      <h1>Welcome to My React App</h1>
      {/* Your app's content goes here */}
      <p>This is the main application content.</p>

      <h>hi</h>
    </div>
  );
};

export default App;

