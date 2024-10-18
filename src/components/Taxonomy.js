// Taxonomy.js
import React from 'react';
import './Taxonomy.css'; // Import a separate CSS file for styling

const Taxonomy = () => {
  return (
    <div className="taxonomy-container">
      <h2>Taxonomy of Surveyed Papers</h2>
      <p>Here we classify the papers reviewed in the context of edge computing in web technologies based on key metrics like latency reduction, real-time data handling, and bandwidth optimization.</p>
      
      <table className="styled-table">
        <thead>
          <tr>
            <th>Paper Citation</th>
            <th>Problem Domain</th>
            <th>Solution Approach</th>
            <th>Web Arch. Type</th>
            <th>Evaluation Methodology</th>
            <th>App. Domain</th>
            <th>Security Mechanism</th>
          </tr>
        </thead>
        <tbody>
          {/* You can add rows with content later */}
        </tbody>
      </table>
    </div>
  );
};

export default Taxonomy;
