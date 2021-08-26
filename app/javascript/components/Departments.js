import React from "react"

const Departments = (props) => {
  return (
    <div>
      <h1>All Departments</h1>
      {props.departments.map((department) => {
        return <p key={department.id}>{department.name}</p>;
    })}
    </div>
  );
};


export default Departments