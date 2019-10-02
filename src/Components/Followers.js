import React from "react";
import FollowersCard from "./FollowersCard";

const Followers = props => {
  return (
    <div>
     {props.followers.map( item => (
      <FollowersCard key={item.id} user={item}/>
     ))}
    </div>
  );
};

export default Followers;
