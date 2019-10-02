import React from "react";
import UserCard from "./UserCard";


const User = props => {
  return (
      <div>
        {props.user.map(item => (
          <UserCard key={item.id} user={item} />
        ))}
      </div>
  );
};

export default User;
