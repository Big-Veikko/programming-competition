import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// apis and slices
import { expressApi } from '../services/expressApi';
import authSlice from '../services/auth/auth.slice';

const reducers = combineReducers({
    [expressApi.reducerPath]: expressApi.reducer,
    auth: authSlice.reducer
});

const persistConfig = {
    key: 'root',
    storage
};


export const store = configureStore({
    reducer: persistReducer(persistConfig, reducers),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(
        [
            expressApi.middleware
        ]
    )
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);