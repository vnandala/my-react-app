// Team.js
import React from 'react';


const teamMembers = [
  { name: 'Vamshi', bio: 'Team Member-5.', imgSrc: '/vamshi.jpg' },
  { name: 'Divya', bio: 'Team Member-5.', imgSrc: 'path_to_divya_photo' },
  { name: 'Syeda Bushra Fatima', bio: 'Team Member-5.', imgSrc: 'path_to_bushra_photo' },
  { name: 'Jeevan', bio: 'Team Member-5.', imgSrc: 'path_to_jeevan_photo' },
  { name: 'Sudeepa', bio: 'Team Member-5.', imgSrc: 'path_to_sudeepa_photo' },
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
