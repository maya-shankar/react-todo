import React, {Component} from 'react';
import ToDoListItem from './ToDoListItem';

class ToDoList extends Component {
	constructor(props) {
		super(props);
		this.state = {todos: []};
	}

	deleteTodo = (index) => {
		this.setState({todos: [...this.state.todos.slice(0, index), ...this.state.todos.slice(index+1)] });
	}

	componentDidMount() {
		this.setState({todos: [ {text: "DO THE THING!"}, {text: "Do something else!"} ]});
	}

	render() {
		return(
			<ul className = "list-group">
			{
				this.state.todos.map((ToDoItem, index) => {
					return <ToDoListItem item = {ToDoItem.text} 
										 key = {index}
										 index = {index} 
										 deleteTodo = {this.deleteTodo} />
				})
			}
			</ul>
		);
	}
}

export default ToDoList;