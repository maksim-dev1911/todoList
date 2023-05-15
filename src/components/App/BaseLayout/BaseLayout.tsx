import React, {useCallback, useState} from 'react';
import {Box, Container, CssBaseline} from "@mui/material";
import {Outlet} from "react-router-dom";
import SideBar from "../../SideBar/SideBar";

const BaseLayout = () => {
    const [open, setOpen] = useState(false);

    const toggleIsOpen = useCallback(() => {
        setOpen((prev) => !prev);
    }, [])

    return (
        <Container maxWidth={false} disableGutters>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <SideBar open={open} handleOpen={toggleIsOpen}/>
                <Box sx={{
                    width: '100%',
                    height: '100%',
                    minHeight: '100vh',
                    maxWidth: '100vw',
                    display: 'flex',
                    flexDirection: 'column',
                    '.MuiContainer-root': {maxWidth: '100%'}
                }}>
                    <Container disableGutters>
                        <Outlet/>
                    </Container>
                </Box>
            </Box>
        </Container>
    );
};

export default React.memo(BaseLayout);