import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from 'uuid'
import Todo from "./Todo";
// 7. we need to initiate a random id for each todo
// uuid is a package to generate a random id
uuidv4();

const TodoWrapper = () => {
  //5.  we need an array to hold the todos which is created by the user in todo form
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    
  }
  return (
    <div>
      {/* we need to add some props to transfer values  */}
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo key={index} task={todo} />
      ))}
    </div>
  );
};

export default TodoWrapper;
