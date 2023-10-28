import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OpportunityModel } from "./opportunity.model";

interface OpportunityState {
    opp: OpportunityModel;
    opps: OpportunityModel[];
}

const initialState: OpportunityState = {
    opp: {} as OpportunityModel,
    opps: [] as OpportunityModel[]
};

const opportunitySlice = createSlice({
    name: 'opportunity',
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

export default opportunitySlice;
