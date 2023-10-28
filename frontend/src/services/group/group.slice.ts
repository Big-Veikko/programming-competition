import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GroupModel } from "./group.model";

interface GroupState {
    group: GroupModel;
    groups: GroupModel[];
}

const initialState: GroupState = {
    group: {} as GroupModel,
    groups: [] as GroupModel[]
};

const groupSlice = createSlice({
    name: 'group',
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

export default groupSlice;
