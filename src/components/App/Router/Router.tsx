import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import BaseLayout from "../BaseLayout/BaseLayout";
import TodoList from "../../../pages/TodoLists/TodoListsPage";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<BaseLayout/>}>
                    <Route index element={<Navigate to='/todoList'/>}/>
                    <Route path='/todoList' element={<TodoList/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default React.memo(Router);