import React from "react"

const EditDepartment = (props) => {
  return (
    <div>
    <p>Edit Department</p>
    <form action="/departments" method="post">
      <p>New Name</p>
      <input defaultValue={props.department.name} name="department[name]"/>
      <button type="submit">Create</button>
    </form>
    </div>
  );
};

export default EditDepartment