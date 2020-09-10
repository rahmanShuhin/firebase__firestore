import React from "react";
import db from "./FirebaseConfig";

const ShowData = ({ id, index, data }) => {
  console.log(id);
  const removeItem = () => {
    db.collection("user").doc(id).delete();
  };
  return (
    <li>
      <span>
        {index + 1} : {data.name} {data.age}
      </span>
      <span
        onClick={removeItem}
        style={{ color: "red", marginLeft: "10px", cursor: "pointer" }}
      >
        X
      </span>
    </li>
  );
};

export default ShowData;
