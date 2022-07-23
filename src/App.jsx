import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const onClickAdd = () => {
    if (todoText !== "") {
      setIncompleteTodos([...incompleteTodos, todoText]);
      // const newTodos = [...incompleteTodos, todoText];
      // setIncompleteTodos(newTodos);
      setTodoText("");
    }
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // 配列のindex番目を1つ削除
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newTodos = [...incompleteTodos];
    // 配列のindex番目を1つ削除
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
    setCompleteTodos([...completeTodos, incompleteTodos[index]]);
  };

  const onClickBack = (index) => {
    const newTodos = [...completeTodos];
    // 配列のindex番目を1つ削除
    newTodos.splice(index, 1);
    setCompleteTodos(newTodos);
    setIncompleteTodos([...incompleteTodos, completeTodos[index]]);
  };

  return (
    <>
      <InputTodo
        todoTextprop={todoText}
        onChangeprop={onChangeTodoText}
        onClickprop={onClickAdd}
        disabledprop={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるTODOは5個までです！</p>
      )}
      <IncompleteTodo
        incompleteTodosprop={incompleteTodos}
        onClickCompleteprop={onClickComplete}
        onClickDeleteprop={onClickDelete}
      />
      <CompleteTodo
        completeTodosprop={completeTodos}
        onClickBackprop={onClickBack}
      />
    </>
  );
};
