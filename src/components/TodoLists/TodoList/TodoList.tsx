import React from 'react';
import {Box, Grid, IconButton, Tooltip, Typography} from "@mui/material";
import DropDown from "../../Common/DropDown/DropDown";
import {TaskType, TodoType} from "../../../types/types";
import Task from "../../Task/Task";
import TodoListForm from "../TodoForm/TodoListForm";

type PropsType = {
    todoList: TodoType
    deleteTodo: (id: string) => void
    handleOpenTaskInput: () => void
    handleCloseTaskInput: () => void
    handleSubmitAddTask: (data: Record<string, any>, id: string) => void
    tasks: Record<string, TaskType[]>
    handleDeleteTask: (todolistId: string, taskId: string) => void
    openTaskInput: boolean
}

const TodoList: React.FC<PropsType> = ({
                                           todoList,
                                           deleteTodo,
                                           handleCloseTaskInput,
                                           openTaskInput,
                                           handleSubmitAddTask,
                                           handleOpenTaskInput,
                                           tasks,
                                           handleDeleteTask
                                       }) => {
    const todoListsTasks = tasks[todoList.id] || []

    return (
        <Grid item p={2} lg={3.8} sx={{borderRadius: '10px', backgroundColor: '#fff'}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Typography fontWeight='bold'>{todoList.title}</Typography>
                <Box display='flex'>
                    <Tooltip title='Add task'>
                        <IconButton onClick={handleOpenTaskInput} sx={{width: '40px', height: '40px'}}>+</IconButton>
                    </Tooltip>
                    <DropDown deleteTodo={deleteTodo} todoList={todoList}/>
                </Box>
            </Box>
            <Box>
                <TodoListForm
                    todoList={todoList}
                    handleCloseTaskInput={handleCloseTaskInput}
                    handleSubmitAddTask={handleSubmitAddTask}
                    openTaskInput={openTaskInput}
                />
            </Box>
            <Box>
                {todoListsTasks.length ? todoListsTasks.map((task) => {
                    return (
                        <Box>
                            <Task handleDeleteTask={handleDeleteTask} key={task.id} task={task}/>
                        </Box>
                    )
                }) : <Typography display='flex' color='#808080' justifyContent='center' alignItems='center'>
                    Create a new task
                </Typography>}
            </Box>
        </Grid>
    );
};

export default React.memo(TodoList);