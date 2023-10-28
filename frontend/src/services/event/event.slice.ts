import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EventModel } from "./event.model";

interface EventState {
    event: EventModel;
    events: EventModel[];
}

const initialState: EventState = {
    event: {} as EventModel,
    events: [] as EventModel[]
};

const eventSlice = createSlice({
    name: 'event',
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

export default eventSlice;
