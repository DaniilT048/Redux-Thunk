import {createSlice, PayloadAction, Slice} from '@reduxjs/toolkit';

interface Task{
    text: string;
    done: boolean;
}

interface ToDoState{
    tasks: Task[];
}

const initialTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

const initialState: ToDoState = {
    tasks: initialTasks,
}

const toDoSlice: Slice<ToDoState> = createSlice({
    name: 'toDo',
    initialState,
    reducers:{
        addTask(state, action: PayloadAction<string>){
            state.tasks.push({text: action.payload, done: false})
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
        doneTask(state, action: PayloadAction<number>){
            const index: number = action.payload;
            if(state.tasks[index]){
                state.tasks[index].done = !state.tasks[index].done
            }
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        },
        deleteTask(state, action: PayloadAction<number>){
            state.tasks.splice(action.payload, 1)
            localStorage.setItem("tasks", JSON.stringify(state.tasks));
        }

    }
});

export const { addTask, doneTask, deleteTask } = toDoSlice.actions;

export default toDoSlice.reducer;