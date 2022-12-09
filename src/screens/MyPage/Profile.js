import React from "react";
import "./style.css";
import profile from "./image/profile.png";
function Profile() {
  return (
    <div className="profile">
      <img src={profile} alt="" className="pic" />
      <h1 className="name">새싹커</h1>
      {/* <span>Philadelphia, PA</span> */}
    </div>
  );
}

export default Profile;
