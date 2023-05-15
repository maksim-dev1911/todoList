import React from 'react';
import NavBar from "../NavBar/NavBar";
import {Box, IconButton} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

type PropsType = {
    handleOpen: () => void
}

const SideBarSmall: React.FC<PropsType> = ({handleOpen}) => {
    return (
        <Box>
            <Box sx={{textAlign: 'center', p: '5px'}}>
                <IconButton onClick={handleOpen}>
                    <ChevronRightIcon/>
                </IconButton>
            </Box>
            <Box>
                <NavBar variant='small'/>
            </Box>
        </Box>
    );
};

export default React.memo(SideBarSmall);