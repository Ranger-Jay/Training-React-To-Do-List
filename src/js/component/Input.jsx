import React, { useState } from "react";

export const Input = (props) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="What Needs to Be Done?"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button
        onClick={() => {
          props.setList([...props.list, inputValue]);
        }}
      >
        Add Task
      </button>
    </div>
  );
};
