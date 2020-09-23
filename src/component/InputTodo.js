import React,{Component} from 'react';

class InputTodo extends Component {

    state={
        title:"",
    }

    onChange= e => {
       this.setState({
           [e.target.name] : e.target.value,
       })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title:""
        })
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit} className = "form-container">
                <input type = "text"
                    placeholder = "Add Todos here ..." 
                    name = "title" 
                    value = {this.state.title} 
                    onChange = {this.onChange} 
                    className = "input-text" />
                <input type = "submit" value = "submit" className = "input-submit" />
            </form>
        )
    }

}
export default InputTodo;