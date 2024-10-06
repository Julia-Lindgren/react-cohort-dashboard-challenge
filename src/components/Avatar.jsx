import React from 'react';
import "../styles/Avatar.css";

function Avatar({ firstName, lastName, favouriteColour }) {
  
  const getInitials = (firstName, lastName) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  return (
    <div className="avatar-circle" style={{ backgroundColor: favouriteColour }}>
      <span className="avatar-initials">
        {getInitials(firstName, lastName)}
      </span>
    </div>
  );
}

export default Avatar;