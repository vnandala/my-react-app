// Taxonomy.js
import React from 'react';

const Taxonomy = () => {
  return (
    <div>
      <h2>Taxonomy of Surveyed Papers</h2>
      <p>Here we classify the papers reviewed in the context of edge computing in web technologies based on key metrics like latency reduction, real-time data handling, and bandwidth optimization.</p>
      <table>
        <thead>
          <tr>
            <th>Domain</th>
            <th>Solution</th>
            <th>Methodology</th>
            <th>Findings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Latency Reduction</td>
            <td>Edge Nodes</td>
            <td>Deployment near users</td>
            <td>Improved response time</td>
          </tr>
          <tr>
            <td>Real-Time Processing</td>
            <td>AI at the Edge</td>
            <td>Real-time decisions</td>
            <td>Enhanced real-time capabilities</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Taxonomy;
