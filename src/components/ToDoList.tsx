import './ToDoList.css';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store.ts";
import {addTask, deleteTask, doneTask} from "../store/toDoSlice.ts";
import {ChangeEvent, useState} from "react";


function ToDoList(){
    const [newTask, setNewTask] = useState('');
    const tasks = useSelector((state: RootState) => state.todo.tasks);
    const dispatch = useDispatch<AppDispatch>();

    const handleNewTask =(event: ChangeEvent<HTMLInputElement>): void => {
        setNewTask(event.target.value);
    }

    const handleAddTask = (): void => {
        if (newTask.trim() === '') {
            return;
        }
        dispatch(addTask(newTask));
        setNewTask('');
    }

    const handleDoneTask = (index: number):void =>{
        dispatch(doneTask(index))
    }

    const handleDeleteTask = (index: number):void =>{
        dispatch(deleteTask(index))
    }



    return (
            <div>
                <h1>To do list</h1>
                <div>
                    <input
                    type="text"
                    placeholder="Add task.."
                    onChange={handleNewTask}
                    />
                <button style={{ color: 'white', backgroundColor: 'green' }} onClick={handleAddTask} >add</button>
            </div>
            <ol>
                {tasks.map((element, index) => (
                    <li key={index}>
                        <span className={element.done ? 'done' : ''}
                              style={{ textDecoration: element.done ? 'line-through' : 'none' }}>{element.text}</span>
                        <button style={{color: 'white', backgroundColor: 'limegreen'}} onClick={() => handleDoneTask(index)}>done</button>
                        <button className={'deleteButton'} onClick={() => handleDeleteTask(index)}>delete</button>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default ToDoList