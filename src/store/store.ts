import { configureStore } from "@reduxjs/toolkit";
import  userReducer from './slice/userSlice'
import themeReducer from './slice/themeSlice'



export const store = configureStore ( {
     reducer : {
        user : userReducer ,
        theme : themeReducer
     }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;