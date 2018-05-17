import React from 'react';

function ToDo(props) {
  const {
    text,
    isCompleted,
    toggleToDo,
    removeToDo,
  } = props;
  const msg = isCompleted ? '未了' : '完了';
  return (
    <li>
      <button onClick={toggleToDo}>{msg}</button>
      {text}
      <button onClick={removeToDo}>×</button>
    </li>
  )
}

export default ToDo;
