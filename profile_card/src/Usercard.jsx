import React from "react";
import "./Usercard.css";

const Usercard = ({ name, avatar, title, bio }) => {
  return (
    <div className="card">
      <img src={avatar} alt={name} className="avatar" />
      <h2>{name}</h2>
      <h4 className="title">{title}</h4>
      <p className="bio">{bio}</p>
    </div>
  );
};

export default Usercard;
