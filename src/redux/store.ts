import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

import homeReducer from './slice/homeSlice'

const reducers = combineReducers({
    home: homeReducer
})

const persistConfig: any = {
    key: "root",
    version: 1,
    timout: null,
    storage: AsyncStorage,
    stateReconcile: autoMergeLevel2,
    whitelist: ['home'],//things u  want to perist
    blacklist: []//things u dont want to persist
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
})

export const perisister = persistStore(store)