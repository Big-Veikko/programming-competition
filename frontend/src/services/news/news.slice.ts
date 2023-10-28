import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NewsModel } from "./news.model";

interface NewsState {
    newsA: NewsModel;
    news: NewsModel[];
}

const initialState: NewsState = {
    newsA: {} as NewsModel,
    news: [] as NewsModel[]
};

const newsSlice = createSlice({
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

export default newsSlice;
