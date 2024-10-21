// Home.js
import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Abstract</h2>
      <p style={styles.paragraph}>
        As web technologies evolve, there is a growing need for quick and effective applications due to the increasing number of IoT devices and their large amounts of data. Edge computing has become a crucial approach to tackle these issues by distributing data processing and moving computation nearer to where the data originates. This study investigates different edge computing techniques that improve web performance, lower latency, and support real-time processing for web apps. We examine recent progress in edge computing structures and platforms, emphasizing their influence on distributing content via strategically positioned edge nodes. Through the examination of specific scholarly articles, we classify the primary obstacles and recommended resolutions, presenting an organized summary of the existing scenario. The article also emphasizes the importance of security measures in protecting data in edge computing environments. In the end, our results emphasize the importance of ongoing innovation in edge computing to fully realize its potential in enhancing web technologies. We end by examining potential future advancements in edge computing solutions to address the changing needs of modern web applications, with a particular emphasis on efficiency, scalability, and security.
      </p>
      <p style={styles.keywords}><strong>Key words:</strong> Edge Computing, Latency Reduction, Real-time Processing, Cloud-Edge Integration</p>
      
      <h2 style={styles.heading}>Introduction</h2>
      <p style={styles.paragraph}>
        In the era of technology, the need for smooth and quick web applications has drastically increased due to the rise in IoT devices, mobile computing, and data-heavy apps. With the increasing number of internet-connected devices, the amount of data being produced has reached historic levels, posing notable obstacles for conventional cloud computing structures. These structures that depend on centralized data processing in remote data centers frequently face challenges in providing the low-latency performance demanded by modern applications, especially in real-time situations. Data transmission delays from remote servers can result in less than ideal user experiences, particularly in crucial applications like autonomous driving, telemedicine, and smart city infrastructures, where even milliseconds can have a major impact.
      </p>
      <p style={styles.paragraph}>
        Edge computing is a new paradigm that deals with these issues by distributing data processing and moving computation nearer to the source of the data. By utilizing edge nodes positioned at the outer edges of the network, close to end-users or IoT devices, as highlighted by Boparai et al. [11], edge infrastructures face high latency requirements for IoT applications that cannot be properly serviced by traditional cloud setups. By moving data processing closer to the source, edge computing effectively reduces latency, which is crucial for real-time services such as smart healthcare. This change improves the performance of web applications and reduces the bandwidth limitations of cloud computing by sending less data across far distances.
      </p>
      <p style={styles.paragraph}>
        The combination of edge computing and web technologies creates new opportunities for developing and deploying applications. In the IoT field, edge computing enables instant analysis and decision-making on the device itself, leading to quick responses to changes without relying on communication with a central cloud. This is especially beneficial in situations where fast response times are critical, like in industrial automation or smart healthcare systems, where prompt action can improve operations and patient results.
      </p>
      <p style={styles.paragraph}>
        Moreover, edge computing allows for a more effective use of network resources. Organizations can enhance scalability and lower operational expenses by optimizing their cloud resources through processing data at the edge. This is especially important in settings with varying workloads, where being able to assign resources based on current demand can result in substantial cost savings and enhanced performance.
      </p>
      <p style={styles.paragraph}>
        Even though there are advantages, incorporating edge computing is hindered by several challenges. Security is a significant concern when data processing takes place closer to the end-user, making it more prone to various vulnerabilities and threats. It is crucial to guarantee the security of data both during transmission and when it is being stored in order to maintain user trust and comply with data protection regulations. Additionally, the decentralized structure of edge computing necessitates robust management and orchestration mechanisms to guarantee effective use and upkeep of edge resources.
      </p>
      <h3 style={styles.heading}>Figure 1: Edge Computing - Faster Data Processing</h3>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
    lineHeight: '1.6',
    backgroundColor: '#fff', // Optional background to make it stand out
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
  },
  heading: {
    marginTop: '30px',
    marginBottom: '15px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  paragraph: {
    marginBottom: '20px',
    fontSize: '16px',
    textAlign: 'justify', // Makes the text look neat
  },
  keywords: {
    marginBottom: '30px',
    fontStyle: 'italic',
  },
};

export default Home;
