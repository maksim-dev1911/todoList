import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TaskType, TodoType} from "../../types/types";

type initialStateType = {
    todoLists: Array<TodoType>
    tasks: Record<string, TaskType[]>
}

const initialState: initialStateType = {
    todoLists: [],
    tasks: {}
}

const todolistSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        setTodoLists: (state, action: PayloadAction<TodoType[]>) => {
            state.todoLists = action.payload
        },
        setOneTodo: (state, action: PayloadAction<TodoType>) => {
            state.todoLists.push(action.payload)
        },
        setTodoTasks: (state, action: PayloadAction<TaskType[]>) => {
            const todoListId = action.payload[0]?.todoListId
            if (todoListId) {
                state.tasks[todoListId] = action.payload
            }
        },
        setOneTask: (state, {payload}:PayloadAction<TaskType>) => {
            if(!state.tasks[payload.todoListId]) {
                state.tasks[payload.todoListId] = []
            }
            state.tasks[payload.todoListId].push(payload)
        }
    }
})

export const {setTodoLists, setOneTodo, setTodoTasks, setOneTask} = todolistSlice.actions

export default todolistSlice.reducer;