import React from "react"

const NewItem = (props) => {
  return (
    <div>
      <h1>New Item:</h1>
      <form action = {`/departments/${props.department.id}/items`} method = "post">
        <p>Name:</p>
        <input name = "item[name]" />
        <button type = "submit">Create</button>
      </form>
    </div>
  );
};

export default NewItem