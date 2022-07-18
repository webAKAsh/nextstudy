import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { app, database } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const initialState = {
    loading: false,
    users : [],
    error: ''
}

const dbUsers = collection(database, "userData");

export const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
        return getDocs(dbUsers)
                .then((data) => {
                    return data.docs.map(item => {
                        return {...item.data(), id: item.id}
                    })
      });
})


const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false,
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false,
            state.users = []
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer