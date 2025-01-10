import React, { useState } from 'react';
import './ProfileInfoForm.css';

const ProfileInfoForm = ({ onSave }) => {
  const [profileInfo, setProfileInfo] = useState({
    name: '',
    alias: '',
    city: '',
    moveAndMuse: '',
    dances: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo({ ...profileInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(profileInfo);
  };

  return (
    <form className="profile-info-form" onSubmit={handleSubmit}>
      <div className="photo-upload-placeholder">
        <span>Upload your photo so others can recognize you and share some kudo love!</span>
      </div>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={profileInfo.name}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Dance alias:
        <input
          type="text"
          name="alias"
          value={profileInfo.alias}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        City:
        <input
          type="text"
          name="city"
          value={profileInfo.city}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        I Move & Muse:
        <input
          type="text"
          name="moveAndMuse"
          value={profileInfo.moveAndMuse}
          onChange={handleInputChange}
          required
        />
      </label>
      {/* Additional fields for dance styles will go here */}
      <button type="submit">Save Profile</button>
    </form>
  );
};

export default ProfileInfoForm;
