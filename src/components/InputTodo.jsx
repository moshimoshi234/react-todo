import React from "react";

export const InputTodo = (props) => {
  const { todoTextprop, onChangeprop, onClickprop, disabledprop } = props;
  return (
    <div className="input-area">
      <input
        type="text"
        disabled={disabledprop}
        placeholder="TODOを入力"
        value={todoTextprop}
        onChange={onChangeprop}
        // onChange={(e) => {
        //   setTodoText(e.target.value);
        // }}
      />
      <button disabled={disabledprop} onClick={onClickprop}>
        追加
      </button>
    </div>
  );
};
