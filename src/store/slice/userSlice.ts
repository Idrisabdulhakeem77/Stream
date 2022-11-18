import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../shared/types";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthUser {
  user: User | null;
}

const initialState = {
  user: null,
} as AuthUser;



export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser : (state , action : PayloadAction<User | null>) => {
          state.user = action.payload
    } 
  },
});



export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;



