// Team.js
import React from 'react';


const teamMembers = [
  { name: 'Vamshi', bio: 'Team Member-5.', imgSrc: process.env.PUBLIC_URL + '/vamshi.jpg' },
  { name: 'Divya', bio: 'Team Member-5.', imgSrc: process.env.PUBLIC_URL + '/divya.jpg' },
  { name: 'Syeda Bushra Fatima', bio: 'Team Member-5.', imgSrc: process.env.PUBLIC_URL + '/bushra.jpg' },
  { name: 'Jeevan', bio: 'Team Member-5.', imgSrc: process.env.PUBLIC_URL + '/jeevan.jpg' },
  { name: 'Sudeepa', bio: 'Team Member-5.', imgSrc: process.env.PUBLIC_URL + '/sudeepa.jpg' },
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
