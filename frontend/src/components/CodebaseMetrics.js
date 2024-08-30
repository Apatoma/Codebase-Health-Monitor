import React from 'react';

function CodebaseMetrics({ metrics }) {
  return (
    <div className="metrics">
      <h2>Historical Metrics</h2>
      {metrics.length > 0 ? (
        metrics.map((metric, index) => (
          <div key={index} className="metric">
            <div><span className="label">Timestamp:</span> {metric.timestamp}</div>
            <div><span className="label">Complexity:</span> {metric.complexity.toFixed(2)}</div>
            <div><span className="label">Code Smells:</span> {metric.code_smells}</div>
            <div><span className="label">Duplication:</span> {metric.duplication.toFixed(2)}%</div>
            <div><span className="label">Debt Ratio:</span> {metric.debt_ratio.toFixed(2)}</div>
          </div>
        ))
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}

export default CodebaseMetrics;
