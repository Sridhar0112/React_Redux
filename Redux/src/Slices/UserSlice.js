import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const UserSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      // actions contains New User object
      // here state means users: property
      state.users = [...state.users, action.payload];
    },
    deleteUsers: (state, action) => {
      state.users = state.users.filter(
        (user, index) => index != action.payload
      );
      // filter method create a new array that array has been passed the index
      //here Action Payload Expects index value used to remove that index Users
    },
  
  },
});


export const { setUsers, deleteUsers } = UserSlice.actions;

export default UserSlice.reducer;
