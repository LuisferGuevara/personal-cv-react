import React from "react";
let logo = require("../assets/logo.JPG");

const ProfileImg = () => {
  return (
    <div className="img--box-pro">
      <img src={logo} alt="Me Illustrated" className="profile-img" />
    </div>
  );
};

export default ProfileImg;
