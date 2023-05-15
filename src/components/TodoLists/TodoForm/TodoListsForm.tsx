import React from 'react';
import {Box, IconButton, Tooltip, Typography} from "@mui/material";
import {Form} from "react-final-form";
import TextFieldControlled from "../../Fields/TextFieldControlled/TextFieldControlled";
import LoadingButton from "@mui/lab/LoadingButton";
import CloseIcon from "@mui/icons-material/Close";
import {TodoPayloadType} from "../../../types/types";

type PropsType = {
    handleOpenTodoInput: () => void
    handleSubmitAddTodo: (data: TodoPayloadType) => void
    handleCloseTodoInput: () => void
    openTodoInput: boolean
}

const TodoListsForm: React.FC<PropsType> = ({
                                                handleOpenTodoInput,
                                                openTodoInput,
                                                handleSubmitAddTodo,
                                                handleCloseTodoInput
                                            }) => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box>
                <Typography fontSize='20px' fontWeight='600'>Hello Maks 👋🏻</Typography>
            </Box>
            <Box display='flex'>
                <Form
                    onSubmit={handleSubmitAddTodo}
                    render={({handleSubmit, submitting}) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <Box alignItems='center' display='flex'>
                                    {openTodoInput &&
                                        <TextFieldControlled
                                            name='title'
                                            type='input'
                                            size='small'
                                            label='Title for todo'
                                        />}
                                    {openTodoInput &&
                                        <LoadingButton
                                            disabled={submitting}
                                            loading={submitting}
                                            variant="contained"
                                            size="small"
                                            type="submit"
                                            sx={{ml: 1}}
                                        >
                                            Add
                                        </LoadingButton>}
                                </Box>
                            </form>
                        )
                    }}
                />
                <Box display='flex' ml={3} alignItems='center'>
                    {openTodoInput && <Tooltip title='Cancel'><Box mr='5px'>
                        <IconButton onClick={handleCloseTodoInput}>
                            <CloseIcon fontSize='small'/>
                        </IconButton>
                    </Box></Tooltip>}
                    <Tooltip title='Add todo'>
                        <Box>
                            <IconButton onClick={handleOpenTodoInput}
                                        sx={{width: '40px', height: '40px'}}>+</IconButton>
                        </Box>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    );
};

export default React.memo(TodoListsForm);