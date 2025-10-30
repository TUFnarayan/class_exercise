import React, { useState } from "react";
import "./UserProfile.css";

const UserProfile = ({ initialName, initialBio, initialAvatar }) => {
  const [name, setName] = useState(initialName);
  const [bio, setBio] = useState(initialBio);
  const [avatar, setAvatar] = useState(initialAvatar);

  const handleUpdate = (e) => {
    e.preventDefault();
    setName(e.target.name.value);
    setBio(e.target.bio.value);
    setAvatar(e.target.avatar.value);
  };

  return (
  
    <div className="profile-card">
      <img src={avatar} alt="User Avatar" className="avatar" />
      <h2>{name}</h2>
      <p>{bio}</p>

      <form onSubmit={handleUpdate} className="update-form">
        <input type="text" name="name" placeholder="Update Name" />
        <input type="text" name="bio" placeholder="Update Bio" />
        <input type="text" name="avatar" placeholder="Update Avatar URL" />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;