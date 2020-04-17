import React from 'react';
import item from './taskItem.module.scss';
import EditTask from '../EditTask/EditTask';

export default class TaskItem extends React.Component {
    constructor (props) {
        super();
        
        this.state = {
            showTaskItem: true,
            task: {}
        }
    }

    componentDidMount() {
        const task = this.props.task;
        this.setState({
            task
        });
    }

    updateDone = () => {
        const task = Object.assign({}, this.state.task);
        task.done = !task.done;
        
        this.setState({
            task
        }, () => {
            this.props.onUpdate(this.state.task);
        });
    }

    toggleEdit = (value) => {
        this.setState({
            showTaskItem: value
        })
    }

    editTitleTask = (value) => {
        const task = Object.assign({}, this.state.task);
        task.title = value;

        this.setState({
            task
        }, () => {
            this.props.onUpdate(this.state.task);
            this.toggleEdit(true);
        });
    }

    render () {
        const { task, onDelete } = this.props;
        const checkedClass = task.done ? item.taskItem__done : '';

        return (
            <React.Fragment>
                {   this.state.showTaskItem
                    ? <div className={item.taskItem}>
                        <div className={item.taskItem__checkbox}>
                            <input 
                                type="checkbox" 
                                checked={task.done}
                                onChange={this.updateDone}/>
                        </div>
                        <div className={[item.taskItem__name, checkedClass].join(' ')}>
                            { task.title }
                        </div>
                        <div className={item.taskItem__events}>
                            <span 
                                className={item.taskItem__edit}
                                onClick={() => this.toggleEdit(false)}>
                                    <i className="fa fa-edit"></i>
                                </span>
                            <span 
                                className={item.taskItem__delete}
                                onClick={() => onDelete(task)}
                            ><i className="fa  fa-trash-o"></i></span>
                        </div>
                    </div>

                    :   <EditTask 
                            value={task.title}
                            onEdit={this.editTitleTask}
                            onClose={() => this.toggleEdit(true)}/>
                }
            </React.Fragment>
        )
    }
}