import React from "react";

export const IncompleteTodo = (props) => {
  const { incompleteTodosprop, onClickCompleteprop, onClickDeleteprop } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodosprop.map((todo, index) => {
          return (
            <div key={index} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickCompleteprop(index)}>完了</button>
              <button onClick={() => onClickDeleteprop(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
