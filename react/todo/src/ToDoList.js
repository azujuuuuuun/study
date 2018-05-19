// @flow
import React from 'react';
import ToDo from './ToDo';

type propsType = {
  todos: Array<Object>,
  toggleToDo: Function,
  removeToDo: Function,
};

function ToDoList(props: propsType) {
  const todos = props.todos.map((todo) => <ToDo key={todo.id} text={todo.text} isCompleted={todo.isCompleted} toggleToDo={() => props.toggleToDo(todo.id)} removeToDo={() => props.removeToDo(todo.id)} />);
  return (
    <ul>
      {todos}
    </ul>
  );
}

export default ToDoList;
