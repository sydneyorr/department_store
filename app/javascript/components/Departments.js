import React, { useReducer } from "react"

const Departments = (props) => {
  return (
    <div>
      <h1>All Departments</h1>
      <a href="/departments/new">Create a Department</a>
      {props.departments.map((department) => {
        return (
          <div key={department.id}>
            <p>ID:{department.id}</p>
            <p>{department.name}</p>
            <div>
              <a href={`/departments/${department.id}`}>Show</a>
              <a href={`/departments/${department.id}/edit`}>Edit</a>
              <a href={`/departments/${department.id}`} data-method="delete">Delete</a>
            </div>
          </div>
        );
      })}
      </div>
  );
    };

    export default Departments