import React, {useEffect} from 'react';
import {Box, Checkbox, Grid, IconButton, Tooltip, Typography} from "@mui/material";
import {useAppDispatch} from "../../hooks/redux";
import {getMe} from "../../store/todolist/todolist.thunks";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DropDown from "../../components/Common/DropDown/DropDown";
import TodoList from "../../components/TodoLists/TodoList/TodoList";

const TodoLists = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getMe())
    }, [])

    return (
        <Box p={3} sx={{backgroundColor: '#edf1fb', width: '100%', height: '100vh'}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box>
                    <Typography fontSize='20px' fontWeight='600'>Hello Maks 👋🏻</Typography>
                </Box>
                <Tooltip title='Add todo'>
                    <Box>
                        <IconButton sx={{width: '40px', height: '40px'}}>+</IconButton>
                    </Box>
                </Tooltip>
            </Box>
            <Grid p={3} mt={3} container gap={2} sx={{display: 'flex', justifyContent: 'center'}}>
                <TodoList/>
            </Grid>
        </Box>
    );
};

export default React.memo(TodoLists);