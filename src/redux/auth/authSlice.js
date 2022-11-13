import { createSlice } from '@reduxjs/toolkit';
import { getUser, logIn, logOut, registation } from './authOperation';

const Status = {
  init: 'INIT',
  loading: 'LOADING',
  success: 'SUCCESS',
  error: 'ERROR',
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  status: Status.init,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registation.pending](state) {
      state.status = Status.loading;
    },
    [registation.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.status = Status.success;
    },
    [registation.rejected](state) {
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLoggedIn = false;
      state.status = Status.error;
    },
    [logIn.pending](state) {
      state.status = Status.loading;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.status = Status.success;
    },
    [logIn.rejected](state) {
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLoggedIn = false;
      state.status = Status.error;
    },
    [logOut.pending](state) {
      state.status = Status.loading;
      state.isLoggedIn = false;
    },
    [logOut.fulfilled]() {
      return initialState;
    },
    [logOut.rejected](state) {
      state.status = Status.error;
      state.isLoggedIn = false;
    },

    [getUser.pending](state) {
      state.status = Status.loading;
      state.isLoggedIn = false;
    },
    [getUser.fulfilled](state, action) {
      state.status = Status.success;
      state.isLoggedIn = true;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
    },
    [getUser.rejected](state) {
      state.status = Status.error;
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
