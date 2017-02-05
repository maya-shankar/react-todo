import React, {Component} from 'react';
// Component = React.Component;
import ToDoList from './ToDoList';

class App extends Component {
  render() {
    return(
      <div>
        <h1>To-Do List</h1>
        <ToDoList />
      </div>
    );
  }
}

export default App;