import React from 'react';
import './task-form.scss';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';

class TaskForm extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    state = {
        nameTask: ''
    }

    onChangeValue = ({ target }) => {
        this.setState({
            nameTask: target.value
        });
    }

    addTask = () => {
        const { nameTask } = this.state;
        const post = {
            title: nameTask,
            done: false
        }
        this.props.addTask(post);
    }

    render() {
        return (
            <div className="task-form">
                <TextField 
                    onChange={this.onChangeValue} 
                    placeholder="New Task"
                    value={this.state.nameTask}/>
                <Button marginLeft={10} onClick={this.addTask}>add task</Button>
            </div>
        )
    }
}

export default TaskForm;