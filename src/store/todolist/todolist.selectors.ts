import {RootState} from "../index";

export const getTodoListsSelector = (state: RootState) => state.todoList.todoLists;
export const getTodoTasksSelector = (state: RootState) => state.todoList.tasks;