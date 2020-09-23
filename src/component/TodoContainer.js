import React from 'react';
import TodoList from './TodoList';
import Header from './Header.js';
import InputTodo from './InputTodo.js';
import {v4 as uuidv4} from 'uuid';

class TodoContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    id : uuidv4(),
                    title : "setup developement environment",
                    completed : true
                },
                {
                    id : uuidv4(),
                    title : "develop website and add content",
                    completed : false
                },
                {
                    id : uuidv4(),
                    title : "deploy to live server",
                    completed : false
                }                
            ]
        };
    }

    handleChange = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    }

    delTodo = id => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    addTodo = title => {
        const newTodo = {
            id : uuidv4(),
            title : title,
            completed : false
        };
        this.setState({
            todos : [...this.state.todos, newTodo]
        });
    }
    render() {
        return (
            <div className = "container">
                <Header />
                <InputTodo addTodoProps={this.addTodo} />
                <TodoList todos={this.state.todos} handleChangeProps={this.handleChange} 
                delTodoProps={this.delTodo}></TodoList>
            </div>
        );
    }
}
export default TodoContainer;