import React from 'react';
import {Box, Grid} from "@mui/material";
import TodoList from "./TodoList/TodoList";
import {TaskType, TodoPayloadType, TodoType} from "../../types/types";
import TodoListsForm from "./TodoForm/TodoListsForm";

type PropsType = {
    handleOpenTodoInput: () => void
    handleSubmitAddTodo: (data: TodoPayloadType) => void
    handleSubmitAddTask: (data: Record<string, any>, id: string) => void
    handleDeleteTask: (todolistId: string, taskId: string) => void
    handleCloseTodoInput: () => void
    handleOpenTaskInput: () => void
    handleCloseTaskInput: () => void
    deleteTodo: (id: string) => void
    openTodoInput: boolean
    todoLists: Array<TodoType>
    openTaskInput: boolean
    tasks: Record<number, TaskType[]>
}

const TodoLists: React.FC<PropsType> = ({
                                            handleOpenTodoInput,
                                            openTodoInput,
                                            openTaskInput,
                                            handleOpenTaskInput,
                                            handleSubmitAddTodo,
                                            handleCloseTodoInput,
                                            todoLists,
                                            handleCloseTaskInput,
                                            handleSubmitAddTask,
                                            deleteTodo,
                                            handleDeleteTask,
                                            tasks
                                        }) => {
    return (
        <Box p={3} sx={{backgroundColor: '#edf1fb', width: '100%', height: '100vh'}}>
            <Box>
                <TodoListsForm
                    handleCloseTodoInput={handleCloseTodoInput}
                    handleOpenTodoInput={handleOpenTodoInput}
                    handleSubmitAddTodo={handleSubmitAddTodo}
                    openTodoInput={openTodoInput}
                />
            </Box>
            <Grid p={3} mt={3} container gap={2} sx={{display: 'flex', justifyContent: 'center'}}>
                {todoLists.map((todolist) => {
                    return (
                        <TodoList key={todolist.id} openTaskInput={openTaskInput}
                                  tasks={tasks}
                                  handleCloseTaskInput={handleCloseTaskInput}
                                  handleOpenTaskInput={handleOpenTaskInput} deleteTodo={deleteTodo}
                                  todoList={todolist} handleSubmitAddTask={handleSubmitAddTask}
                                  handleDeleteTask={handleDeleteTask}
                        />
                    )
                })}
            </Grid>
        </Box>
    );
};

export default React.memo(TodoLists);