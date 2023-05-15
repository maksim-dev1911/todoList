import React from 'react';
import {Box} from "@mui/material";
import Router from "./components/App/Router/Router";

const App = () => {
    return (
        <Box>
            <Router/>
        </Box>
    );
};

export default React.memo(App);