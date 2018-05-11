import React from 'react';

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompleted: props.isCompleted,
    }
    this.text = props.text;
  }

  toggleToDo(e) {
    this.setState({
      isCompleted: !this.state.isCompleted,
    });
  }

  render() {
    const msg = this.state.isCompleted ? '未了' : '完了';
    return (
      <li>
        <button onClick={e => this.toggleToDo(e)}>{msg}</button>
        {this.text}
      </li>
    );
  }

}
