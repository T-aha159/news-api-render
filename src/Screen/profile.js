import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const param = useParams();
  console.log(param);

  return <h1>Welcome {param.id}</h1>;
};

export default Profile;
