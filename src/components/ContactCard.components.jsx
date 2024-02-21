import React from "react";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";

const ContactCardComponents = ({ data }) => {
  const nav = useNavigate();
  const handleReDirect = () => {
    nav(`/home/contact/${data.id}`);
  };
  const handleEdit = () => {
    nav("/home/add", { state: { edit: true, data, id: data.id } });
  };
  return (
    <div className="w-2/4 h-auto border my-5 flex justify-between items-center p-3">
      <button onClick={handleReDirect} className="flex-1">
        <div>
          <h1>{data.name}</h1>
          <p>{data.phone}</p>
        </div>
      </button>
      <div>
        <button onClick={handleEdit}>
          <CiEdit />
        </button>
      </div>
    </div>
  );
};

export default ContactCardComponents;
