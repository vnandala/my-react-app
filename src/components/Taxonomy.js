// Taxonomy.js
import React from 'react';
import './Taxonomy.css'; // Make sure to import your CSS styling

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
          <tr>
            <td>Miladinovic, I., Schefer-Wenzl, S., Burger, T., & Hirner, H. (2023)</td>
            <td>Resource Management and Data Scraping on Edge Devices</td>
            <td>Distributed Deep Learning, Resource Optimization</td>
            <td>Hybrid (Edge-Cloud)</td>
            <td>Theoretical Analysis and Case Study of Edge Networks</td>
            <td>Web Services, E-commerce Platforms</td>
            <td>Trust and Privacy Management in Edge Networks</td>
          </tr>
          <tr>
            <td>Zhang, W., Zhang, L., Chen, C., et al. (2023)</td>
            <td>Latency Reduction in Web-Based Cognitive Services</td>
            <td>Edge-Cloud Collaboration, Binary Offloading Strategy, DNN</td>
            <td>Collaborative Architecture (End-User, Edge Server, Cloud Server)</td>
            <td>Experimental Evaluation using YOLOv5 on PASCAL VOC 2012</td>
            <td>Web Object Recognition, Cognitive Services</td>
            <td>Not explicitly discussed, but offloading strategies improve privacy</td>
          </tr>
          <tr>
            <td>Sekigawa, S., Sasaki, C., & Tagami, A. (2023)</td>
            <td>Resource Allocation and Task Offloading in Extreme Edge Computing</td>
            <td>WebAssembly (Wasm) Containers for Cross-Platform, Lightweight Execution</td>
            <td>WebAssembly Containerized Edge-Cloud Hybrid Architecture</td>
            <td>Experimental Performance Evaluation on Various CPU and OS Platforms</td>
            <td>IoT, Smart Cities, Public Services</td>
            <td>WASI-based system call isolation for task execution</td>
          </tr>
          <tr>
            <td>Liu, Y., Song, L., Zhang, S., et al. (2023)</td>
            <td>Real-time Data Processing, Scalability, and Low Latency in IoT Systems</td>
            <td>Edge and Fog Computing Paradigms for Decentralized Data Processing</td>
            <td>Edge-Cloud and Fog Computing Hybrid Architecture</td>
            <td>Theoretical Analysis with Comparative Evaluation</td>
            <td>IoT, Smart Cities, Healthcare, Autonomous Vehicles</td>
            <td>Localized Data Processing, Whitelisting Authentication</td>
          </tr>
          <tr>
            <td>Miladinovic, I., Schefer-Wenzl, S., & Hirner, H. (2021)</td>
            <td>Latency Reduction in Mobile Network Applications</td>
            <td>Multi-Access Edge Computing (MEC) with Latency Reduction Techniques</td>
            <td>MEC in 5G and Beyond</td>
            <td>Latency Measurement and Round Trip Time (RTT) Evaluation</td>
            <td>IoT, Real-Time Systems (e.g., Augmented Reality, Connected Cars)</td>
            <td>Not explicitly discussed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Taxonomy;
