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
    <a href="/">Back</a>
    </div>
  );
};

export default NewDepartment