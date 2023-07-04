import { configureStore } from "@reduxjs/toolkit";
import authReducer from './state/index.js'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
  
  const persistConfig = {key: "root", storage, version:1 }
  const persistedReducer = persistReducer(persistConfig,authReducer)


export const store = configureStore({
    reducer : {
        userData : persistedReducer,
    },
    middleware : (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck:{
        ignoreActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      },
    }),
})