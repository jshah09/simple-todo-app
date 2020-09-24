import React from 'react';
import TodoList from './TodoList';
import Header from './Header.js';
import InputTodo from './InputTodo.js';
//import {v4 as uuidv4} from 'uuid';
import axios from "axios";

class TodoContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            show : false
        };
    }

    handleChange = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }),
            show : !this.state.show
        });
    }

    delTodo = id => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then( response => this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        }))
        
    }

    addTodo = title => {
        axios.post("https://jsonplaceholder.typicode.com/todos", {
            title : title,
            completed : false
        })
        .then( response => this.setState({
            todos : [...this.state.todos, response.data]
            })
        )
        
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then( response => this.setState({ todos : response.data }))
    }
    render() {
        return (
            <div className = "container">
                <Header headerSpan = {this.state.show} />
                <InputTodo addTodoProps={this.addTodo} />
                <TodoList todos={this.state.todos} handleChangeProps={this.handleChange} 
                delTodoProps={this.delTodo}></TodoList>
            </div>
        );
    }
}
export default TodoContainer;