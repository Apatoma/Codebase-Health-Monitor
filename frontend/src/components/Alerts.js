import React from 'react';

function Alerts({ alerts }) {
  return (
    <div className="alerts">
      <h2>Alerts</h2>
      {alerts.length > 0 ? (
        alerts.map((alert, index) => (
          <div key={index} className="alert">{alert}</div>
        ))
      ) : (
        <p>No alerts.</p>
      )}
    </div>
  );
}

export default Alerts;
