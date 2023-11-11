import React from "react";
import { CardContainer, CardHeader, Avatar, StatusIndicator } from "./style";

const Card = ({ data }) => {
  const { id, title, tag, userId, status, priority } = data;

  const userAvatarUrl =
    "https://tamilnaducouncil.ac.in/wp-content/uploads/2020/04/dummy-avatar.jpg";

  return (
    <CardContainer>
      <CardHeader>
        <span className="user_id">{id}</span>
        <Avatar>
          <img src={userAvatarUrl} alt="User Avatar" className="avatar_img" />
          <StatusIndicator className="status-indicator" />
        </Avatar>
      </CardHeader>
      <h3>{title}</h3>
      <span>Priority: {priority}</span>
      <div className="card-body">
        <p>Status: {status}</p>
        <p>Assigned to: {userId}</p>
        <p>Tag: {tag.join(", ")}</p>
      </div>
    </CardContainer>
  );
};

export default Card;
