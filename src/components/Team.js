import React from 'react';
import './Team.css';

const teamMembers = [
  { name: 'Vamshi Nandala', role: 'Website Developer', bio: 'Built the website, sourced relevant research papers, and contributed content from those papers to support the survey findings.', imgSrc: process.env.PUBLIC_URL + '/vamshi.jpg' },
  { name: 'Divya Gorijala', role: 'Website Developer', bio: 'Website Designing, Contributed 5 papers to the survey, paper analysis, Latex formatting of the survey paper.', imgSrc: process.env.PUBLIC_URL + '/divya.jpg' },
  { name: 'Syeda Bushra Fatima', role: 'Content validator', bio: 'Literature review, latex formatting of the survey paper, and also contributed in website development.', imgSrc: process.env.PUBLIC_URL + '/bushra.jpg' },
  { name: 'Jeevan Tubinakere Govindaraju', role: 'Content Validator', bio: 'Conducted literature review, analysis, synthesis, categorization, and contributed to writing the survey paper and website design.', imgSrc: process.env.PUBLIC_URL + '/jeevan.jpg' },
  { name: 'Sudheepa Katakam', role: 'Reporting and Delivery Lead', bio: 'Coordinated team activities, tracked project progress, ensured timely deliverables, and oversaw the final presentation and submission of the survey paper and website.', imgSrc: process.env.PUBLIC_URL + '/sudeepa.jpg' },
];

const Team = () => {
  return (
    <div className="team-section">
      <h2 className="team-heading">Team Members</h2>
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member">
          <img src={member.imgSrc} alt={member.name} className="team-icon" />
          <h3>{member.name}</h3> {/* Name */}
          <h4 className="team-role">{member.role}</h4> {/* Role */}
          <p>{member.bio}</p> {/* Bio */}
        </div>
      ))}
    </div>
  );
};

export default Team;
