import React from "react"

const EditDepartment = (props) => {
  return (
    <div>
    <p>Edit Department</p>
    <form action={`/departments/${props.department.id}`} method="post">
      <input type="hidden" name="_method" value="patch"/>
      <p>New Name</p>
      <input defaultValue={props.department.name} name="department[name]"/>
      <button type="submit">Update</button>
    </form>
    <a href="/">Back</a>
    </div>
  );
};

export default EditDepartment