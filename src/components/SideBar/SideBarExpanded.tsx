import React from 'react';
import NavBar from "../NavBar/NavBar";
import {Box, Divider, IconButton} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Logo from "../../images/logo.png";
import {LogoImg} from "./SideBar.style";

type PropsType = {
    handleOpen: () => void
}

const SideBarExpanded: React.FC<PropsType> = ({handleOpen}) => {
    return (
        <Box sx={{width: 240}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', p: 1, alignItems: 'center'}}>
                <LogoImg>
                    <img src={Logo} alt='logo'/>
                </LogoImg>
                <Box>
                    <IconButton onClick={handleOpen}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </Box>
            </Box>
            <Divider sx={{borderStyle: 'dashed'}}/>
            <Box p={1}>
                <NavBar variant='default'/>
            </Box>
        </Box>
    );
};

export default React.memo(SideBarExpanded);