import React from "react"

const Department = (props) => {
  return (
    <div>
      <p>{props.department.name}</p>
      <a href="/">Back</a>
    </div>
  );
};

export default Department