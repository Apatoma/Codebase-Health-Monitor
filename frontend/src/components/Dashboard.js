import React from 'react';

function Dashboard({ metrics }) {
  return (
    <div className="dashboard">
      <h2>Latest Metrics</h2>
      {metrics.length > 0 ? (
        <div className="metric">
          <div><span className="label">Timestamp:</span> {metrics[metrics.length - 1].timestamp}</div>
          <div><span className="label">Complexity:</span> {metrics[metrics.length - 1].complexity.toFixed(2)}</div>
          <div><span className="label">Code Smells:</span> {metrics[metrics.length - 1].code_smells}</div>
          <div><span className="label">Duplication:</span> {metrics[metrics.length - 1].duplication.toFixed(2)}%</div>
          <div><span className="label">Debt Ratio:</span> {metrics[metrics.length - 1].debt_ratio.toFixed(2)}</div>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}

export default Dashboard;
