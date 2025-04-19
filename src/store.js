import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {value: {username: "", profession: ""}};
const userSlice = createSlice({
  name: "user", initialState,
  profession: "profession", initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload
    },
    
    logout: (state) => {
      state = initialState.value;
    },
  },
});

export const {login, logout} = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    profession: userSlice.reducer,
  }
});