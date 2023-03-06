import React, { FC, useState } from "react";

interface TodoType {
  key: string;
  text: string;
  complete: boolean;
  onClick: () => void;
  deleteTodo: () => void;
}

const Todo: FC<TodoType> = ({ text, key, complete, onClick, deleteTodo }) => {
  return (
    <div
      className="bg-dark p-5 rounded-md  cursor-pointer mb-5 hover:opacity-80 flex w-full relative"
      key={key}
    >
      <div
        onClick={onClick}
        className={`h-5 w-5 mr-5  rounded-xl  ${
          complete ? "bg-gradient-to-b from-primary to-secondary" : "bg-darkAlt"
        }`}
      ></div>
      <div
        className={`text-md ${complete ? "line-through" : "no-underline"}`}
        onClick={onClick}
      >
        {text}
      </div>

      <div
        className="absolute top-[50%] right-[16px] translate-y-[-50%] w-6 h-6 rounded-xl bg-red-700 flex items-center justify-center z-[100]"
        onClick={deleteTodo}
      >
        X
      </div>
    </div>
  );
};

export default Todo;
