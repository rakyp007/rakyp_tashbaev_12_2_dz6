import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "usersSlice",
    initialState: {
        users: [],
        name: ""
    },
    reducers: {
        addUser(state, action) {
            state.users = [...state.users, action.payload]
        },
        handleName(state, action) {
            state.name = action.payload
        },
        clearUser (state, action){
            state.users = ["", action.payload]
        }
    }
})

export const {addUser, handleName,clearUser} = userSlice.actions;

export default userSlice.reducer