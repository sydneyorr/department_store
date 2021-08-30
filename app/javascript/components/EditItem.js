import React from "react"
import Item from "./Item"

const EditItem = (props) => {
  return (
    <div>
      <h1>Edit Item</h1>
      <form action = {`/departments/${props.department.id}/items/${props.item.id}`} method = "post">
      <input type="hidden" name = "_method" value = "patch" />
      <p>New name:</p>
      <input name = "item[name]" defaultValue={props.item.name}/>
      <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditItem

