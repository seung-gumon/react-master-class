import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

interface IForm {
  todo: string;
}

interface ITodo {
  text: string;
  category: "DONE" | "DOING" | "TODO";
  id: number;
}

const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  const { register, watch, handleSubmit } = useForm();

  const handleValid = (data: IForm) => {
    setTodos((oldTodos) => [
      { id: Date.now(), text: data.todo, category: "TODO" },
      ...oldTodos,
    ]);
  };

  console.log(todos);

  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("todo", { required: "뭐라도 적으셔야합니다 !" })}
          placeholder="할일을 쓰시오~"
        />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo: ITodo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
