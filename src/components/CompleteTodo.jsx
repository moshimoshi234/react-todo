import React from "react";

export const CompleteTodo = (props) => {
  const { completeTodosprop, onClickBackprop } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodosprop.map((todo, index) => {
          return (
            <div key={index} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBackprop(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
