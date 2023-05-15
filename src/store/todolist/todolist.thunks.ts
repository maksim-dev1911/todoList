import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api";
import {TaskType, TodoPayloadType, TodoType} from "../../types/types";
import {setOneTask, setOneTodo, setTodoLists, setTodoTasks} from "./todolistSlice";
import {RootState} from "../index";

export const getMe = createAsyncThunk(
    'getMe',
    async () => {
        const response = await api.get('auth/me')
    }
)

export const createTodo = createAsyncThunk<void, TodoPayloadType>(
    'createTodo',
    async (data, {dispatch}) => {
        const response = await api.post('todo-lists', data)
        dispatch(setOneTodo(response.data))
        dispatch(getTodoLists())
    }
)

export const getTodoLists = createAsyncThunk(
    'getTodoLists',
    async (_, {dispatch}) => {
        const response = await api.get<TodoType[]>('todo-lists')
        dispatch(setTodoLists(response.data))

        const todoLists = response.data

        const promises = todoLists.map((todo) => {
            return api.get<{ items: TaskType[] }>(`todo-lists/${todo.id}/tasks`)
        })

        const responses = await Promise.all(promises)
        responses.forEach((res) => {
            dispatch(setTodoTasks(res.data.items))
        })
    }
)

export const deleteTodo = createAsyncThunk<void, string>(
    'deleteTodo',
    async (id, {getState, dispatch}) => {
        const state = getState() as RootState;
        const todoList = state.todoList.todoLists.find((t) => t.id === id);

        if (todoList) {
            await api.delete(`todo-lists/${id}`)
            dispatch(getTodoLists())
        }
    }
)

export const createTask = createAsyncThunk(
    'createTask',
    async ({data, id}: Record<string, any>, {dispatch}) => {
        const response = await api.post(`todo-lists/${id}/tasks`, data)
        dispatch(setOneTask(response.data.data.item))
    }
)

export const deleteTask = createAsyncThunk<void, { todolistId: string, taskId: string }>(
    'deleteTask',
    async ({todolistId, taskId}, {dispatch}) => {
        await api.delete(`todo-lists/${todolistId}/tasks/${taskId}`)
    }
)