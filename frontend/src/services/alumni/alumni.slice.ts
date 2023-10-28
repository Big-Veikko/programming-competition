import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AlumniModel } from "./alumni.model";

interface AlumniState {
    alumnus: AlumniModel;
    alumni: AlumniModel[];
}

const initialState: AlumniState = {
    alumnus: {
        id: 0,
        name: "",
        email: "",
        university: "",
        degree: "",
        major: "",
        graduation: 0,
        employment_status: "",
        employment_history: []
    },
    alumni: []
};

const alumniSlice = createSlice({
    name: 'alumni',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        // builder.addCase(fetchTodos.fulfilled, (state, action: PayloadAction<AlumniModel[]>) => {
        //     state.todos = action.payload;
        // });
        // // [fetchTodos.fulfilled.type]: (state, action: PayloadAction<TodoModel[]>) => {
        // //     state.todos = action.payload;
        // // }
    }
});

export default alumniSlice;
