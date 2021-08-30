import React from "react"

const Items = (props) => {
  const { department, items } = props;
  const renderItems = () => {
  return items.map((item) => {
    return (
    <div>
      <p>ID:{item.id}</p>
      <p>{item.name}</p>
      <a href = {`/departments/${department.id}/items/${item.id}`}>Show Item</a>
      <a href={`/departments/${department.id}/items/${item.id}/edit`}>Update Item</a>
      <a href={`/departments/${department.id}/items/${item.id}`} data-method="delete">Delete Item</a>
    </div>
  )})
}
return (
  <div>
    <p>Department ID:{department.id}</p>
    <a href="/departments">Back</a>
    <p>Department Name:{department.name}</p>
    {renderItems()}
    <a href={`/departments/${department.id}/items/new`}>Create New Item</a>
    

  </div>
);
};

export default Items