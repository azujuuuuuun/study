import React from 'react';
import ToDo from './ToDo';

function ToDoList(props) {
  const todos = props.todos.map((todo) => <ToDo key={todo.id} text={todo.text} isCompleted={todo.isCompleted} />);
  return (
    <ul>
      {todos}
    </ul>
  );
}

export default ToDoList;