import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  let clickEv = () => {
    navigate("/about");
  };

  return (
    <>
      <div>Contact</div>

      <button onClick={clickEv}>Go To Home</button>
    </>
  );
};

export default Contact;
