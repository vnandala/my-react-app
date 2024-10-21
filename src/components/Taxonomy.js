import React from 'react';
import './Taxonomy.css'; // Ensure you're importing the CSS file

const Taxonomy = () => {
  return (
    <div className="taxonomy-container">
      <h2>Taxonomy of Surveyed Papers</h2>
      <p>Here we classify the papers reviewed in the context of edge computing in web technologies based on key metrics like latency reduction, real-time data handling, and bandwidth optimization.</p>
      
      {/* Wrapping table in a scrollable container */}
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Paper Citation</th>
              <th>Problem Domain</th>
              <th>Solution Approach</th>
              <th>Web Architecture Type</th>
              <th>Evaluation Methodology</th>
              <th>Application Domain</th>
              <th>Security Mechanism</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>K. Cao, Y. Liu, G. Meng, Q. Sun, "An Overview on Edge Computing Research," IEEE Access, vol. 8, pp. 85714-85728, 2020.</td>
              <td>Enhancing Web Performance through Edge Computing</td>
              <td>Optimizing Data Processing and Resource Allocation</td>
              <td>Distributed Edge-Cloud Architecture</td>
              <td>Survey and Analysis of Edge Technologies</td>
              <td>Web Applications, Real-Time Services</td>
              <td>Secure Data Transfer at the Edge</td>
            </tr>
            <tr>
              <td>M. Talebkhah et al., "Edge Computing: Architecture, Applications and Future Perspective," IEEE 2nd International Conference on Artificial Intelligence in Engineering and Technology, 2020.</td>
              <td>Improving Web-Based IoT Application Performance</td>
              <td>Hybrid Edge-Cloud Framework for Web and IoT Services</td>
              <td>Hybrid Cloud-Edge Architecture</td>
              <td>Case Studies on Web and IoT Applications</td>
              <td>Web Services, IoT-Enabled Web Platforms</td>
              <td>Secure Communication Protocols for Web and IoT Data</td>
            </tr>
            <tr>
              <td>J. Pan and J. McElhannon, "Future Edge Cloud and Edge Computing for IoT Applications," IEEE Internet of Things Journal, vol. 5, no. 1, pp. 439-449, Feb. 2018.</td>
              <td>Enabling Real-Time Processing for IoT Web Applications</td>
              <td>Leveraging Edge Nodes for Optimized Web and IoT Services</td>
              <td>Cloud-Edge Hybrid Architecture</td>
              <td>Performance Simulations and Case Studies</td>
              <td>Web-Based IoT Services</td>
              <td>End-to-End Security in Web-Driven IoT Systems</td>
            </tr>
            <tr>
              <td>X. Zhang, Z. Cao, and W. Dong, "Overview of Edge Computing in the Agricultural Internet of Things: Key Technologies, Applications, Challenges," IEEE Access, vol. 8, pp. 141748-141761, 2020.</td>
              <td>Improving Agricultural Web Services through Edge Computing</td>
              <td>Utilizing Edge for Real-Time Data in Agricultural Systems</td>
              <td>Decentralized Edge Architecture</td>
              <td>Case Studies of Edge Applications</td>
              <td>Agricultural IoT Web Platforms</td>
              <td>Secure IoT Data Transfer in Agricultural Web Services</td>
            </tr>
            <tr>
              <td>S. Naveen and M. R. Kounte, "Key Technologies and Challenges in IoT Edge Computing," 2019 Third International Conference on I-SMAC.</td>
              <td>Web-Driven IoT Resource Management</td>
              <td>Optimizing Edge Resources for Web and IoT Services</td>
              <td>Hierarchical Web-Edge Architecture</td>
              <td>Survey and Analysis of Web-Based IoT Challenges</td>
              <td>IoT Web Applications, Smart Web-Based Systems</td>
              <td>Encryption and Trusted Hardware for Web Services</td>
            </tr>
            <tr>
              <td>M. Satyanarayanan, "The Emergence of Edge Computing," Computer, vol. 50, no. 1, pp. 30-39, Jan. 2017.</td>
              <td>Improving Web-Based Services through Edge Computing</td>
              <td>Analyzing the Growth of Web-Edge Integration</td>
              <td>Decentralized Edge Architecture</td>
              <td>Comparative Analysis of Edge for Web Applications</td>
              <td>General Web Applications</td>
              <td>Basic Web Security Features</td>
            </tr>
            <tr>
              <td>F. Liu et al., "A Survey on Edge Computing Systems and Tools," Proceedings of the IEEE, vol. 107, no. 8, pp. 1537-1562, Aug. 2019.</td>
              <td>Tools and Platforms for Web-Based Edge Services</td>
              <td>Overview of Web-Edge Tools for Optimized Performance</td>
              <td>Various Edge Architectures for Web Platforms</td>
              <td>Survey of Web-Oriented Edge Tools</td>
              <td>Web Services, Tools for Edge Optimization</td>
              <td>Web Security in Edge Tools</td>
            </tr>
            <tr>
              <td>L. U. Khan, I. Yaqoob, N. H. Tran, S. M. A. Kazmi, T. N. Dang and C. S. Hong, "Edge-Computing-Enabled Smart Cities: A Comprehensive Survey," in IEEE Internet of Things Journal, vol. 7, no. 10, pp. 10200-10232, Oct. 2020, doi: 10.1109/JIOT.2020.2987070.</td>
              <td>Compute-Intensive Applications in Smart Cities</td>
              <td>Using Edge Computing to Overcome Cloud Limitations</td>
              <td>Edge Computing with Fog Nodes</td>
              <td>Literature Review and Taxonomy</td>
              <td>Smart Transportation, Healthcare, Farming</td>
              <td>Discusses encryption and physical security challenges</td>
            </tr>
            <tr>
              <td>Ali Asghari, Mohammad Karim Sohrabi, Server placement in mobile cloud computing: A comprehensive survey for edge computing, fog computing and cloudlet, Computer Science Review, Volume 51, 2024, 100616, ISSN 1574-0137,https://doi.org/10.1016/j.cosrev.2023.100616.</td>
              <td>Server Placement Optimization in Mobile Cloud Computing</td>
              <td>Optimization methods such as ML-based techniques</td>
              <td>Mobile Edge Computing (MEC), Fog Computing</td>
              <td>Simulations using real-world and synthetic datasets</td>
              <td>Smart Cities, Healthcare, Vehicular Networks</td>
              <td>Brief mention of security risks in distributed computation</td>
            </tr>
            <tr>
              <td>Javad Dogani, Reza Namvar, Farshad Khunjush, Auto-scaling techniques in container-based cloud and edge/fog computing: Taxonomy and survey, Computer Communications, Volume 209, 2023, Pages 120-150, ISSN 0140-3664, https://doi.org/10.1016/j.comcom.2023.06.010.</td>
              <td>Auto-Scaling in Container-Based Cloud/Edge Environments</td>
              <td>Taxonomy and Review of Auto-Scaling Techniques</td>
              <td>Cloud, Edge, Fog Computing</td>
              <td>Comparison of Scaling Algorithms</td>
              <td>IoT Applications like Smart Homes, Healthcare</td>
              <td>Resource Management for Privacy-Sensitive Applications</td>
            </tr>
            <tr>
              <td>R. S. Boparai and R. Bhatia, "Challenges of Reviews Scraped from Web Services Hosted on Edge Devices," 2022 IEEE International Conference on Current Development in Engineering and Technology (CCET), Bhopal, India, 2022, pp. 1-6, doi: 10.1109/CCET56606.2022.10080006.</td>
              <td>Data Management and Security Issues in Edge Services</td>
              <td>Distributed Deep Learning, Resource Optimization</td>
              <td>Hybrid (Edge-Cloud)</td>
              <td>Theoretical Analysis and Case Study</td>
              <td>Web Services, E-commerce</td>
              <td>Trust and Privacy Management in Edge Networks</td>
            </tr>
            <tr>
              <td>Partha Pratim Ray, Dinesh Dash, Debashis De, Edge computing for Internet of Things: A survey, e-healthcare case study and future direction, Journal of Network and Computer Applications, Volume 140, 2019, Pages 1-22, ISSN 1084-8045, https://doi.org/10.1016/j.jnca.2019.05.005.</td>
              <td>Reducing Network Bandwidth and Service Latency in IoT</td>
              <td>Taxonomy of Industrial Edge-IoT Architecture</td>
              <td>Edge-IoT Ecosystem</td>
              <td>Use Cases and Demo Test-Bed Evaluation</td>
              <td>E-Healthcare, Urban Living, Smart Cities</td>
              <td>Localized Data Processing to Minimize Cloud Dependency</td>
            </tr>
            <tr>
              <td>A. Plakhteyev, A. Perepelitsyn, and V. Frolov, "Edge Computing for IoT: An Educational Case Study," 2018 IEEE 9th International Conference on Dependable Systems, Services and Technologies (DESSERT).</td>
              <td>Educational Integration of Web and Edge Computing</td>
              <td>Teaching Web-Based IoT and Edge Computing Concepts</td>
              <td>Decentralized Edge for Web IoT Education</td>
              <td>Case Study of Web-Based IoT Applications</td>
              <td>Educational Web Services</td>
              <td>Basic Web Security Measures</td>
            </tr>
            <tr>
              <td>Z. Wang and I. -Y. Ko, "Edge-Cloud Collaboration Architecture for Efficient Web-Based Cognitive Services," 2023 IEEE International Conference on Big Data and Smart Computing (BigComp), Jeju, Korea, Republic of, 2023, pp. 124-131, doi: 10.1109/BigComp57234.2023.0002.</td>
              <td>Latency Reduction in Web-Based Cognitive Services</td>
              <td>Edge-Cloud Collaboration, Binary Offloading Strategy, Deep Neural Networks (DNN)</td>
              <td>Collaborative Architecture (End-User, Edge Server, Cloud Server)</td>
              <td>Experimental Evaluation using YOLOv5 on the PASCAL VOC 2012 Dataset</td>
              <td>Web Object Recognition, Cognitive Services</td>
              <td>Not explicitly discussed, but efficient offloading strategies enhance privacy and performance</td>
            </tr>
            <tr>
              <td>Mahmood A. Al-Shareeda, Li Yue, Selvakumar Manickam, Review of Edge Computing for the Internet of Things (EC-IoT): Techniques, Challenges and Future Directions, Journal of Sensor Networks and Data Communications, Volume 4, Issue 1, 2024, Pages 1-11,  https://doi.org/10.33140/jsndc.04.01.09.</td>
              <td>Massive Data Production and Consumption in IoT</td>
              <td>Implementation of Edge Computing to Improve Handling</td>
              <td>Distributed Edge Computing Architecture</td>
              <td>Literature Review Summarizing Existing Research</td>
              <td>IoT, Real-Time Processing</td>
              <td>Privacy Preservation Techniques, Secure Data Storage</td>
            </tr>
            <tr>
              <td>E. Kartsakli et al., "AI-Powered Edge Computing Evolution for Beyond 5G Communication Networks," 2023 Joint European Conference on Networks and Communications & 6G Summit (EuCNC/6G Summit), Gothenburg, Sweden, 2023, pp. 478-483, doi: 10.1109/EuCNC/6GSummit58263.2023.10188371.</td>
              <td>5G Network Enhancement</td>
              <td>Artificial Intelligence and Edge Computing Integration</td>
              <td>Distributed Edge-Cloud</td>
              <td>Simulation Study and Real-World Experiments</td>
              <td>Beyond 5G Networks</td>
              <td>Federated Learning</td>
            </tr>
            <tr>
              <td>I. Miladinovic, S. Schefer-Wenzl, T. Burger and H. Hirner, "Multi-Access Edge Computing: An Overview and Latency Evaluation," 2021 22nd IEEE International Conference on Industrial Technology (ICIT), Valencia, Spain, 2021, pp. 744-748, doi: 10.1109/ICIT46573.2021.9453495.</td>
              <td>Latency Reduction in Mobile Network Applications</td>
              <td>Multi-Access Edge Computing (MEC) with Latency Reduction Techniques</td>
              <td>Multi-Access Edge Computing (MEC) in 5G and Beyond</td>
              <td>Latency Measurement and Round Trip Time (RTT) Evaluation in MEC vs Cloud</td>
              <td>IoT, Real-Time Systems (e.g., Augmented Reality, Connected Cars)</td>
              <td>Not explicitly discussed in this paper</td>
            </tr>
            <tr>
              <td>Joao da Mata Liborio Filho, Jhonathan Oliveira, Cesar A.V. Melo,Super-resolution with perceptual quality for improved live streaming delivery on edge computing,Computer Networks,Volume 248,2024,110463,ISSN 1389-1286, https://doi.org/10.1016/j.comnet.2024.110463.</td>
              <td>Video Streaming Quality Improvement</td>
              <td>Super-Resolution Techniques</td>
              <td>Edge Computing</td>
              <td>Experimental Validation</td>
              <td>Live Streaming</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>S. Sekigawa, C. Sasaki and A. Tagami, "Web Application-Based WebAssembly Container Platform for Extreme Edge Computing," GLOBECOM 2023 - 2023 IEEE Global Communications Conference, Kuala Lumpur, Malaysia, 2023, pp. 3609-3614, doi: 10.1109/GLOBECOM54140.2023.10437269.</td>
              <td>Resource Allocation and Task Offloading in Extreme Edge Computing</td>
              <td>Use of WebAssembly (Wasm) Containers for Cross-Platform, Lightweight Task Execution</td>
              <td>WebAssembly Containerized Edge-Cloud Hybrid Architecture</td>
              <td>Experimental Performance Evaluation on Various CPU Architectures (e.g., ARM, x64) and OS Platforms (e.g., Linux, Windows, Android)</td>
              <td>IoT, Smart Cities, and Public Services</td>
              <td>WASI-based system call isolation for task execution</td>
            </tr>
            <tr>
              <td>Ali, Belal & Gregory, Mark & Li, Shuo. (2021). Multi-Access Edge Computing Architecture, Data Security and Privacy: A Review. IEEE Access. PP. 1-1. 10.1109/ACCESS.2021.3053233.</td>
              <td>Data Security and Privacy in Edge Computing</td>
              <td>Privacy-Preserving Mechanisms</td>
              <td>Multi-Access Edge Computing (MEC)</td>
              <td>Literature Review</td>
              <td>General Web Applications</td>
              <td>Data Anonymization and Encryption</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Taxonomy;
