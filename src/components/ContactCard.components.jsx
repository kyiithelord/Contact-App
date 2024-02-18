import React from "react";
import { useNavigate } from "react-router-dom";

const ContactCardComponents = ({ data }) => {
  const nav = useNavigate();
  const handleReDirect = () => {
    nav(`/home/contact/${data.id}`);
  };
  return (
    <button onClick={handleReDirect} className="w-2/4 h-auto border my-5 ">
      <h1>{data.name}</h1>
      <p>{data.phone}</p>
    </button>
  );
};

export default ContactCardComponents;
