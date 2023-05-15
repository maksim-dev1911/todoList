import React from 'react';
import {Form} from "react-final-form";
import {Box, IconButton, Tooltip} from "@mui/material";
import TextFieldControlled from "../../Fields/TextFieldControlled/TextFieldControlled";
import LoadingButton from "@mui/lab/LoadingButton";
import CloseIcon from "@mui/icons-material/Close";
import {TodoType} from "../../../types/types";

type PropsType = {
    handleCloseTaskInput: () => void
    handleSubmitAddTask: (data: Record<string, any>, id: string) => void
    openTaskInput: boolean
    todoList: TodoType
}

const TodoListForm: React.FC<PropsType> = ({openTaskInput, todoList, handleSubmitAddTask, handleCloseTaskInput}) => {
    return (
        <Box sx={{m: '8px 0px'}}>
            <Form
                onSubmit={(data) => handleSubmitAddTask(data, todoList.id)}
                render={({handleSubmit, submitting}) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <Box alignItems='center' display='flex'>
                                {openTaskInput &&
                                    <TextFieldControlled
                                        name='title'
                                        type='input'
                                        size='small'
                                        label='Title for task'
                                        sx={{width: '100%'}}
                                    />}
                                {openTaskInput &&
                                    <LoadingButton
                                        disabled={submitting}
                                        loading={submitting}
                                        variant="contained"
                                        size="small"
                                        type="submit"
                                        sx={{ml: 1}}
                                    >
                                        Save
                                    </LoadingButton>}
                                {openTaskInput &&
                                    <Box>
                                        <Tooltip title='Cancel'>
                                            <IconButton onClick={handleCloseTaskInput} sx={{ml: 1}}>
                                                <CloseIcon fontSize='small'/>
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                }
                            </Box>
                        </form>
                    )
                }}
            />
        </Box>
    );
};

export default React.memo(TodoListForm);