// @flow
import React from 'react';

type propsType = {
  text: string,
  isCompleted: boolean,
  toggleToDo: Function,
  removeToDo: Function,
};

function ToDo(props: propsType) {
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
