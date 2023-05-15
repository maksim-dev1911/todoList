import React from 'react';
import {Box, Checkbox, IconButton, Tooltip, Typography} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {TaskType} from "../../types/types";

type PropsType = {
    task: TaskType
    handleDeleteTask: (todolistId: string, taskId: string) => void
}

const Task: React.FC<PropsType> = ({task, handleDeleteTask}) => {
    return (
        <Box mt={1}>
            <Box>
                <Box sx={{backgroundColor: '#f2f2f2', borderRadius: '3px', p: '5px'}} display='flex'
                     alignItems='center'>
                    <Checkbox sx={{mr: '3px'}}/>
                    <Typography sx={{width: '100%'}}>{task.title}</Typography>
                    <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Tooltip title='Edit'>
                            <IconButton>
                                <EditIcon/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Delete'>
                            <IconButton color='error' onClick={() => handleDeleteTask(task.todoListId, task.id)}>
                                <DeleteIcon/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default React.memo(Task);