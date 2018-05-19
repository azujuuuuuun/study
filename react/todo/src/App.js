// @flow
import React from 'react';
import ToDoList from './ToDoList';

type stateType = {
  text: string,
  todos: Array<Object>,
  id: number,
  visibleToDos: Array<Object>,
  filter: string,
};

export default class App extends React.Component<void, stateType> {
  constructor(props: void) {
    super(props);
    this.state = {
      text: '',
      todos: [],
      id: 1,
      visibleToDos: [],
      filter: 'all',
    };
  }

  onChange(e: Event) {
    const target: Object = e.target;
    this.setState({
      text: target.value,
    })
  }

  addToDo(e: Event) {
    e.preventDefault();
    const todo = {
      id: this.state.id,
      text: this.state.text,
      isCompleted: false,
    };
    const newState: Object = {
      text: '',
      todos: this.state.todos.concat(todo),
      id: this.state.id + 1,
    };
    if (this.state.filter === 'all' || this.state.filter === 'incompleted') {
      newState.visibleToDos = this.state.visibleToDos.concat(todo);
    }
    this.setState(newState);
  }

  toggleToDo(id: number) {
    const newToDos = this.state.todos.map((todo) => {
      const t = todo;
      if (t.id === id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    let newVisibleToDos = [];
    if (this.state.filter === 'all') {
      newVisibleToDos = newToDos;
    } else if (this.state.filter === 'completed') {
      newVisibleToDos = newToDos.filter(todo => todo.isCompleted);
    } else {
      newVisibleToDos = newToDos.filter(todo => !todo.isCompleted);
    }
    this.setState({
      todos: newToDos,
      visibleToDos: newVisibleToDos,
    });
  }

  removeToDo(id: number) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id),
      visibleToDos: this.state.visibleToDos.filter(todo => todo.id !== id),
    });
  }

  changeFilter(filter: string) {
    const newToDos = this.state.todos;
    let newVisibleToDos = [];
    if (filter === 'all') {
      newVisibleToDos = newToDos;
    } else if (filter === 'completed') {
      newVisibleToDos = newToDos.filter(todo => todo.isCompleted);
    } else {
      newVisibleToDos = newToDos.filter(todo => !todo.isCompleted);
    }
    this.setState({
      visibleToDos: newVisibleToDos,
      filter: filter,
    });
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" value={this.state.text} onChange={(e) => this.onChange(e)} />
          <button onClick={(e) => this.addToDo(e)}>+</button>
        </form>
        <ToDoList todos={this.state.visibleToDos} toggleToDo={(id) => this.toggleToDo(id)} removeToDo={(id) => this.removeToDo(id)} />
        <div>
          <button onClick={() => this.changeFilter('all')}>all</button>
          <button onClick={() => this.changeFilter('completed')}>completed</button>
          <button onClick={() => this.changeFilter('incompleted')}>incompleted</button>
        </div>
      </div>
    );
  }
}
