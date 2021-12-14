import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  todo: string;
}

const TodoList = () => {
  const { register, watch, handleSubmit } = useForm();

  const handleValid = (data: IForm) => {
    console.log("add to do", data.todo);
  };

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
        <li></li>
      </ul>
    </div>
  );
};

export default TodoList;
