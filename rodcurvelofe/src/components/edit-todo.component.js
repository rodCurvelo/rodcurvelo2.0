import React, {Component} from 'react';
import axios from 'axios';

export default class EditTodo extends Component { 

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    todo_description: response.data.todo_description,
                    todo_responsible: response.data.todo_responsible,
                    todo_priority: response.data.todo_priority,
                    todo_completed: response.data.todo_completed
                })
            })

            .catch(function(error) {
                console.log(error)
            })
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onChangeTodoCompleted(e) {
        this.setState({
            todo_completed: !this.state.todo_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };
        axios.post('http://localhost:4000/todos/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');

    }
 
    render() {
        return (
            <div>
                <h2 className="center">Welcome to EditTodo Component</h2>

                <form onSubmit={this.onSubmit}>

                    <div className="container">
                        <label>Description: </label>
                        <input type="text"
                            className="validate"
                            value={this.state.todo_description}
                            onChange={this.onChangeTodoDescription}>
                        </input>
                    </div>

                    <div className="container">
                        <label>Responsible: </label>
                        <input type="text"
                            className="validate"
                            value={this.state.todo_responsible}
                            onChange={this.onChangeTodoResponsible}>
                        </input>

                        <p>
                            <label>
                                <input
                                type="radio"
                                id="priorityLow" 
                                value="Low"
                                checked={this.state.todo_priority==="Low"}
                                onChange={this.onChangeTodoPriority}></input>
                                <span>Low</span>
                            </label>
                        </p>
                            
                            
                        <p>
                            <label>
                            <input 
                                type="radio"
                                id="priorityMedium" 
                                value="Medium"
                                checked={this.state.todo_priority==="Medium"}
                                onChange={this.onChangeTodoPriority}></input>
                                <span>Medium</span>
                            </label>
                        </p>

                        <p>
                            <label>
                            <input 
                                type="radio"
                                id="priorityHigh" 
                                value="High"
                                checked={this.state.todo_priority==="High"}
                                onChange={this.onChangeTodoPriority}></input>
                                <span>High</span>
                            </label>
                        </p>

                        <p>
                            <label className="categories-container pin-top">
                                <input type="checkbox" 
                                htmlFor="completedCheckBox"
                                checked="checked"
                                onChange={this.onChangeTodoCompleted}
                                checked={this.state.todo_completed}
                                value={this.state.todo_completed}></input>
                                <span>Completed</span>
                            </label>
                        </p>
                        <br></br>
                        <div>
                            <input type="submit" 
                                   className='btn' 
                                   value="Create Todo">
                            </input>
                        </div>
                    </div>  

                </form>
            </div>
        );
    }
}