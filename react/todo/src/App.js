import React from 'react';
import ToDoList from './ToDoList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      todos: [],
      id: 1,
    };
  }

  onChange(e) {
    this.setState({
      text: e.target.value,
    })
  }

  addToDo(e) {
    e.preventDefault();
    const todo = {
      id: this.state.id,
      text: this.state.text,
      isCompleted: false,
    };
    this.setState({
      text: '',
      todos: this.state.todos.concat(todo),
      id: this.state.id + 1,
    });
  }

  toggleToDo(i) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        const t = todo;
        if (t.id === i) {
          t.isCompleted = !t.isCompleted;
        }
        return t;
      }),
    });
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" value={this.state.text} onChange={(e) => this.onChange(e)} />
          <button onClick={(e) => this.addToDo(e)}>+</button>
        </form>
        <ToDoList todos={this.state.todos} /*toggleToDo={(i) => this.toggleToDo(i)}*//>
      </div>
    );
  }
}
