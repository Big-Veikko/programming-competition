import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FundraiserModel } from "./fundraiser.model";

interface FundraiserState {
    fundraiser: FundraiserModel;
    fundraisers: FundraiserModel[];
}

const initialState: FundraiserState = {
    fundraiser: {} as FundraiserModel,
    fundraisers: [] as FundraiserModel[]
};

const fundraiserSlice = createSlice({
    name: 'fundraiser',
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

export default fundraiserSlice;
