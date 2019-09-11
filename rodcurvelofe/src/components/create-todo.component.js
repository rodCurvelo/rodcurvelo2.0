import React, {Component} from 'react';
import axios from 'axios';

export default class CreateTodo extends Component { 

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeTodoDescription(e) {
        this.setState ({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState ({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState ({
            todo_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log("Form submited:");
        console.log('Todo Description: ${this.state.todo.todo_description}');
        console.log("Todo Responsible: ${this.state.todo.todo_responsible}");
        console.log("Todo Priority: ${this.state.todo.todo_priority}");
        console.log('Todo Completed: ${this.state.todo.todo_completed}');

        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        }

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        });
    }



    render() {
        return (
            <div className="container col s6 ">
                <h1 className="center">Create New TODO</h1>
                <br></br><br></br>
                <form onSubmit={this.onSubmit}>
                <label>Description</label>
                    <div className="input-field col s6">
                        <input placeholder="Description here" id="description" type="text" 
                        className="validate" 
                        value={this.state.todo_description} 
                        onChange={this.onChangeTodoDescription}></input>
                    </div>
                    <div>
                    <label>Responsible</label>
                    <input placeholder="Description here" id="responsible" type="text" 
                        className="validate" 
                        value={this.state.todo_responsible} 
                        onChange={this.onChangeTodoResponsible}></input>
                    </div>

                    <p>
                        <label>
                            <input name="priorityOptions" 
                            type="radio"
                            id="priorityLow" 
                            value="Low"
                            checked={this.state.todo_priority==="Low"}
                            onChange={this.onChangeTodoPriority}/>
                            <span>Low</span>
                        </label>
                        </p>
                        <p>
                        <label>
                        <input name="priorityOptions" 
                            type="radio"
                            id="priorityMedium" 
                            value="Medium"
                            checked={this.state.todo_priority==="Medium"}
                            onChange={this.onChangeTodoPriority}/>
                            <span>Medium</span>
                        </label>
                        </p>
                        <p>
                        <label>
                        <input name="priorityOptions" 
                            type="radio"
                            id="priorityHigh" 
                            value="High"
                            checked={this.state.todo_priority==="High"}
                            onChange={this.onChangeTodoPriority}/>
                            <span>High</span>
                        </label>
                        </p>

                        <div>
                            <input type="submit" 
                                className='btn' 
                                value="Create Todo">
                            </input>
                        </div>
                </form>
            </div>
        );
    }
}