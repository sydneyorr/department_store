import React from "react"

const Item = (props) => {
  return (
    <div>
    {props.item.name}
    <a href={`/departments/${props.department.id}/items/${props.item.id}/edit`}>Edit Item</a>
    <a href={`/departments/${props.department.id}/items`}>Back to Department</a>
    <a href="/departments">All Departments</a>
    </div>
  );
};

export default Item