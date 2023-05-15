import React, {useCallback, useEffect, useState} from 'react';
import {Box} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {
    createTask,
    createTodo,
    deleteTask,
    deleteTodo,
    getMe,
    getTodoLists
} from "../../store/todolist/todolist.thunks";
import TodoLists from "../../components/TodoLists/TodoLists";
import {TodoPayloadType} from "../../types/types";
import {getTodoListsSelector, getTodoTasksSelector} from "../../store/todolist/todolist.selectors";

const TodoListsPage = () => {
    const todoLists = useAppSelector(getTodoListsSelector);
    const tasks = useAppSelector(getTodoTasksSelector);

    const [openTodoInput, setOpenTodoInput] = useState(false)
    const [openTaskInput, setOpenTaskInput] = useState(false)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getMe())
        dispatch(getTodoLists())
    }, [])


    const handleOpenTodoInput = useCallback(() => {
        setOpenTodoInput(true)
    }, [])

    const handleCloseTodoInput = useCallback(() => {
        setOpenTodoInput(false)
    }, [])

    const handleOpenTaskInput = useCallback(() => {
        setOpenTaskInput(true)
    }, [])

    const handleCloseTaskInput = useCallback(() => {
        setOpenTaskInput(false)
    }, [])

    const handleSubmitAddTodo = useCallback((data: TodoPayloadType) => {
        dispatch(createTodo(data))
        handleCloseTodoInput()
    }, [])

    const handleSubmitAddTask = useCallback((data: Record<string, any>, id: string) => {
        dispatch(createTask({data, id}))
    }, [])

    const handleDeleteTodo = useCallback((id: string) => {
        dispatch(deleteTodo(id))
    }, [])

    const handleDeleteTask = useCallback((todolistId: string, taskId: string) => {
        dispatch(deleteTask({todolistId, taskId}))
    }, [])

    return (
        <Box>
            <TodoLists
                handleCloseTodoInput={handleCloseTodoInput}
                handleCloseTaskInput={handleCloseTaskInput}
                deleteTodo={handleDeleteTodo} todoLists={todoLists}
                handleSubmitAddTodo={handleSubmitAddTodo}
                openTodoInput={openTodoInput}
                handleOpenTodoInput={handleOpenTodoInput}
                handleOpenTaskInput={handleOpenTaskInput}
                openTaskInput={openTaskInput}
                tasks={tasks}
                handleSubmitAddTask={handleSubmitAddTask}
                handleDeleteTask={handleDeleteTask}
            />
        </Box>
    );
};

export default React.memo(TodoListsPage);