import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "./todo.actions";
import { TodoModel } from "./todo.model";

interface TodoState {
    todos: TodoModel[];
}

const initialState: TodoState = {
    todos: []
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchTodos.fulfilled.type]: (state, action: PayloadAction<TodoModel[]>) => {
            state.todos = action.payload;
        },
        [fetchTodos.rejected.type]: (state, action: PayloadAction<string>) => {
            state.todos = [];
        },
        [fetchTodos.pending.type]: (state, action: PayloadAction<string>) => {
            state.todos = [];
        }

    }
});

export default todoSlice;
