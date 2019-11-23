import React from 'react';
import todoContainer from './TodoContainer.module.scss';

import Header from '../Header/Header';
import Title from '../Title/Title';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';
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

    render () {
        return (
            <React.Fragment>
                <Header />
                <div className={todoContainer.wrapper}>
                    <div className={todoContainer.TodoContainer}>
                        <Title />
                        <div className={todoContainer.flex}>
                            <TextField 
                                onChangeField={this.onChangeValue} 
                                placeholder="New Task"
                                value={this.state.nameTask}/>
                            <Button marginLeft={10} addEventClick={this.addPost} />
                        </div>
                    </div>

                    {   (this.state.tasks.length === 0) 
                        ? <span>No tasks, add them</span>
                        : <TaskList 
                            listTask={this.state.tasks} 
                            onDeleteElement={this.deleteElement}
                            onDone={this.doneTask}    
                          />
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default TodoContainer;