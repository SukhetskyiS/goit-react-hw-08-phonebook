import { createSlice } from '@reduxjs/toolkit';
import {
  deleteContactsData,
  getContactsData,
  setContactsData,
} from './operation';

const Status = {
  init: 'INIT',
  loading: 'LOADING',
  success: 'SUCCESS',
  error: 'ERROR',
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  status: Status.init,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getContactsData.pending](state) {
      state.status = Status.loading;
    },

    [getContactsData.fulfilled](state, action) {
      state.status = Status.success;
      state.items = [...action.payload];
    },

    [getContactsData.rejected](state) {
      state.status = Status.error;
    },

    [setContactsData.pending](state) {
      state.status = Status.loading;
    },

    [setContactsData.fulfilled](state, action) {
      state.status = Status.success;
      state.items = [...state.items, action.payload];
    },

    [setContactsData.rejected](state) {
      state.status = Status.error;
    },

    [deleteContactsData.pending](state) {
      state.status = Status.loading;
    },

    [deleteContactsData.fulfilled](state, action) {
      state.status = Status.success;
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },

    [deleteContactsData.rejected](state) {
      state.status = Status.error;
    },
  },
});

export default contactsSlice.reducer;
