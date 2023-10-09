import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendUrl: String = 'http://localhost:8000/api';

export const fetchTodos = createAsyncThunk(
    'todo/fetchTodos',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await axios.get(`${backendUrl}/todos`);
            return data;
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            } else {
                return rejectWithValue(error.message);
                
            }
        }
    }
);