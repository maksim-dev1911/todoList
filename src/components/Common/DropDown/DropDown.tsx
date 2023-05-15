import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import {TodoType} from "../../../types/types";

type PropsType = {
    todoList: TodoType
    deleteTodo: (id: string) => void
};

const DropDown: React.FC<PropsType> = ({todoList, deleteTodo}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                <IconButton onClick={handleClick} size="small">
                    <MoreHorizIcon sx={{ '&:hover': { color: '#0056b3' } }} />
                </IconButton>
            </Box>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        width: '200px',
                        overflow: 'visible',
                        border: '1px solid rgba(243,244,246)',
                        mt: 1.5,
                        p: 1,
                        a: {
                            textDecoration: 'none',
                            color: '#666666DE',
                        },
                        '& .MuiList-root': {
                            p: 0,
                        },
                        '& .MuiButtonBase-root': {
                            p: '7.5px 11.25px',
                            '&:hover': { backgroundColor: 'rgba(229,231,235)', borderRadius: 1 },
                        },
                        '& .MuiTypography-root': {
                            fontSize: '15px',
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Link to="editTodo">
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <EditIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography sx={{ color: '#666666DE' }}>Edit Todo</Typography>
                    </MenuItem>
                </Link>
                <Divider sx={{ m: '5px 0 5px 0', borderStyle: 'dashed' }} />
                <Link to="/" onClick={() => deleteTodo(todoList.id)}>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <DeleteIcon color="error" fontSize="small" />
                        </ListItemIcon>
                        <Typography color="error">Delete</Typography>
                    </MenuItem>
                </Link>
            </Menu>
        </React.Fragment>
    );
};

export default React.memo(DropDown);
