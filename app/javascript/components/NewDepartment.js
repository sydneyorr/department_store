import React from "react"

const NewDepartment = () => {
  return (
    <div>
    <p>Create a Department</p>
    <form action="/departments" method="post">
      <p>Department Name</p>
      <input name="department[name]"/>
      <button type="submit">Create</button>
    </form>
    </div>
  );
};

export default NewDepartment