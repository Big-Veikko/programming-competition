import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UniversityModel } from "./university.model";

interface UniversityState {
    university: UniversityModel;
    universitys: UniversityModel[];
}

const initialState: UniversityState = {
    university: {} as UniversityModel,
    universitys: [] as UniversityModel[]
};

const universitySlice = createSlice({
    name: 'university',
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

export default universitySlice;
