import React from 'react';

const Profile = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full ${className}`}
    />
  );
};

export default Profile;
