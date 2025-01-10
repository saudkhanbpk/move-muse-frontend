import React from 'react';
import './RecentKudosBanner.css';

const RecentKudosBanner = ({ kudosData, totalRecentKudos }) => {

  const handleProfileClick = (profile) => {
    // Code to display popup with profile details
  };

  const handleTotalRecentKudosClick = () => {
    // Code to prompt users to log in or sign up
  };

  return (
    <div className="kudos-banner">
      {kudosData.map((profile, index) => (
        <div key={index} className="profile-frame" onClick={() => handleProfileClick(profile)}>
          <div className="profile-pic" style={{ backgroundImage: `url(${profile.imageUrl})` }}>
            <span className="kudos-count">+{profile.kudosCount}</span>
          </div>
          <div className="festival-name">{profile.festivalName}</div>
        </div>
      ))}
      <div className="profile-frame total-kudos" onClick={handleTotalRecentKudosClick}>
        <div className="total-kudos-content">+ {totalRecentKudos} people</div>
      </div>
    </div>
  );
};

export default RecentKudosBanner;
