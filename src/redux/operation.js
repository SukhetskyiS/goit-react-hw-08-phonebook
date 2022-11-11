import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'components/API/API';

export const getContactsData = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await fetchContacts();

      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const setContactsData = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await addContact(contact);

      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContactsData = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const response = await deleteContact(id);

      return response;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
