import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    render() {
        return(
            <div>
                {this.props.todos.map( a => (
                <TodoItem 
                    key = {a.id} 
                    todo = {a} 
                    handleChangeProps = {this.props.handleChangeProps} 
                    delTodoProps = {this.props.delTodoProps}/> 
                ))}
            </div>
        );
    }
}
export default TodoList