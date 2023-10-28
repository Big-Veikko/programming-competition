import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthModel } from "./auth.model";

import axios from "axios";

const backendURL = "http://127.0.0.1:8000/api"
export const login = createAsyncThunk(
    'auth/login',
    async (payload: AuthModel, {rejectWithValue}) => {
        try {
            
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const { data } = await axios.post(
                `${backendURL}/auth/login/`,
                { 'email': payload.email, 'password': payload.password },
                config
            )

            if (data) {

                const userDetails = data;
                localStorage.setItem('userDetails', JSON.stringify(userDetails));

                return {userDetails}
            }

            
            
        } catch (error: any) {
            if (error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
            
        }

    }

);

export const checkUserSession = createAsyncThunk(
    'auth/checkUserSession',
    async (_, {rejectWithValue}) => {
        try {
            const session = localStorage.getItem('userToken')
                ? true
                : false;
            return session;
            
        } catch (error: any) {
            if (error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
            
        }

    }
)