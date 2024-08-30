import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Alerts from './components/Alerts';
import CodebaseMetrics from './components/CodebaseMetrics';

function App() {
  const [metrics, setMetrics] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetchMetrics();
    fetchAlerts();
  }, []);

  const fetchMetrics = async () => {
    const response = await fetch('http://localhost:5000/metrics');
    const data = await response.json();
    setMetrics(data);
  };

  const fetchAlerts = async () => {
    const response = await fetch('http://localhost:5000/alerts');
    const data = await response.json();
    setAlerts(data);
  };

  return (
    <div>
      <h1>Codebase Health Monitor</h1>
      <Dashboard metrics={metrics} />
      <Alerts alerts={alerts} />
      <CodebaseMetrics metrics={metrics} />
    </div>
  );
}

export default App;
