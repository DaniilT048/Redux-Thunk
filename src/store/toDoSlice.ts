import {createSlice, PayloadAction, Slice} from '@reduxjs/toolkit';

interface Task{
    text: string;
    done: boolean;
}

interface ToDoState{
    tasks: Task[];
}

const initialState: ToDoState = {
    tasks: [],
}

const toDoSlice: Slice<ToDoState> = createSlice({
    name: 'toDo',
    initialState,
    reducers:{
        addTask(state, action: PayloadAction<string>){
            state.tasks.push({text: action.payload, done: false})
        },
        doneTask(state, action: PayloadAction<number>){
            const index: number = action.payload;
            if(state.tasks[index]){
                state.tasks[index].done = !state.tasks[index].done
            }
        },
        deleteTask(state, action: PayloadAction<number>){
            state.tasks.splice(action.payload, 1)
        }

    }
});

export const { addTask, doneTask, deleteTask } = toDoSlice.actions;

export default toDoSlice.reducer;