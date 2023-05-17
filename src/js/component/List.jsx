import React from "react";

export const List = (props) => {
  const removeItem = (index) => {
    let newList = props.list.filter((todo, idx) => idx != index);
    props.setList(newList);
  };

  return (
    <div>
      {props.list.map((toDo, index) => {
        return (
          <div className="toDoItem" key={index}>
            <p>{toDo}</p>
            <button
              onClick={() => {
                removeItem(index);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
