// Team.js
import React from 'react';


const teamMembers = [
  { name: 'Vamshi', bio: 'Edge Computing Specialist.', imgSrc: '/vamshi.jpg' },
  { name: 'Divya', bio: 'Latency Reduction Expert.', imgSrc: 'path_to_divya_photo' },
  { name: 'Bushra', bio: 'Real-Time Data Engineer.', imgSrc: 'path_to_bushra_photo' },
  { name: 'Jeevan', bio: 'Edge Network Architect.', imgSrc: 'path_to_jeevan_photo' },
  { name: 'Sudeepa', bio: 'Edge Security Analyst.', imgSrc: 'path_to_sudeepa_photo' },
];

const Team = () => {
  return (
    <div className="team-section">
      <h2 className="team-heading">Team Members</h2> {/* Heading on top */}
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member">
          <img src={member.imgSrc} alt={member.name} className="team-icon" /> {/* Image */}
          <h3>{member.name}</h3> {/* Name */}
          <p>{member.bio}</p> {/* Bio */}
        </div>
      ))}
    </div>
  );
};

export default Team;
