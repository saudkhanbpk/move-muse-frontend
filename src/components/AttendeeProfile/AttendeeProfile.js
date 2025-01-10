import React from 'react';
import './AttendeeProfile.css';
import magicCircle from '../img/icons/magic_circle.png';

const AttendeeProfile = ({ userData }) => {
  // Assuming userData is an object containing user info and kudos
  // For example:
  // userData = {
  //   name: 'Eliza',
  //   alias: 'Veta',
  //   city: 'MTL',
  //   moveAndMuse: 'With all my being',
  //   festivals: 3,
  //   kudos: [
  //     { type: 'Excellent Technique', count: 1 },
  //     { type: 'Personality & Presence', count: 1 },
  //     // ... other kudos types
  //   ],
  //   imageUrl: 'path_to_user_image.jpg'
  // }

  return (
    <div className="attendee-info-popup">
      <div className="user-photo" style={{ backgroundImage: `url(${magicCircle}), url(${userData.imageUrl})` }}>
        {/* User photo is set via CSS */}
      </div>
      <div className="user-info">
        <p>Name: {userData.name}</p>
        <p>Dance alias: {userData.alias}</p>
        <p>City: {userData.city}</p>
        <p>I Move & Muse: {userData.moveAndMuse}</p>
        <p>Festivals attended: {userData.festivals}</p>
      </div>
      <div className="kudos-info">
        {userData.kudos.map((kudo, index) => (
          <div key={index} className="kudo">
            <div className="kudo-icon" style={{ backgroundImage: `url(${require(`../img/icons/${kudo.type}.png`)})` }}>
              <span className="kudo-count">{kudo.count}</span>
            </div>
            <p>{kudo.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendeeProfile;
