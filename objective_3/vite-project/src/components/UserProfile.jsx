
import React, { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";
import "./UserProfile.css";

const UserProfile = () => {
  const { profile, updateProfile } = useContext(ProfileContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProfile({
      name: e.target.name.value,
      bio: e.target.bio.value,
      avatar: e.target.avatar.value
    });
    e.target.reset();
  };

  return (
    <div className="profile-card">
      <img src={profile.avatar} alt="User Avatar" className="avatar" />
      <h2>{profile.name}</h2>
      <p>{profile.bio}</p>

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