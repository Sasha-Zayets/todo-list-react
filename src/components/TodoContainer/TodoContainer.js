import React from 'react';
import './TodoContainer.scss';

import Header from '../Header/Header';
import Router from '../../router';
import TaskList from '../TaskList/TaskList';

class TodoContainer extends React.Component {
    constructor (props) {
        super();

        this.state = {
            nameTask: '',
            tasks: [
                {
                    id: 0,
                    name: 'valueField',
                    done: false
                }
            ]
        }
    }

    addPost = () => {
        const valueField = this.state.nameTask;
        const myTask = [...this.state.tasks];

        if (valueField.length > 0) {
            myTask.push({
                id: myTask.length,
                name: valueField,
                done: false
            })

            this.setState({
                tasks: myTask,
                nameTask: ''
            })
        }
    }

    onChangeValue = (event) => {
        const value = event.target.value;

        this.setState({
            nameTask: value
        })
    }

    deleteElement = (id) => {
       const myNewTask = this.state.tasks;

       myNewTask.splice(id, 1);

       this.setState({
           tasks: myNewTask
       })
    }

    doneTask = (id) => {
        const task = this.state.tasks;
        const changeTask = task[id];

        changeTask.done = !changeTask.done;
        task[id] = changeTask;

        this.setState({
            tasks: task
        })
    }

    editElement = (id, value) => {
        const task = this.state.tasks;
        const changeTask = task[id];

        changeTask.name = value;
        task[id] = changeTask;

        this.setState({
            tasks: task
        })
    }

    render () {
        return (
            <React.Fragment>
                <Header />
                <div className="wrapper">
                    <Router />

                    {/* {   (this.state.tasks.length === 0) 
                        ? <span>No tasks, add them</span>
                        : <TaskList 
                            listTask={this.state.tasks} 
                            onDeleteElement={this.deleteElement}
                            onEditElement={this.editElement}
                            onDone={this.doneTask}    
                          />
                    } */}
                </div>
            </React.Fragment>
        )
    }
}

export default TodoContainer;