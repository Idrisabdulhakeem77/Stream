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
    } ,
     
    setGuestUser : ( state , action ) => {
        state.user = {
           displayName : "Guest" ,
           email : "guest@gmail.com" ,
           emailVerified : true,
           photoURL: "https://i.ibb.co/stB42Nb/catface-5.jpg" ,
           uid: "D3xcrHOuQ7fI2kPPH8eljwUrqcH2"
        }
    }
  },
});



export const { setCurrentUser  , setGuestUser} = userSlice.actions;

export default userSlice.reducer;



