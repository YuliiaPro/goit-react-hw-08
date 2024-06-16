import { createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  changeContact,
  deleteContact,
  fetchContacts,
} from "./operations";
import { logOut } from "../auth/operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
    currentContact: null,
  },
  reducers: {
    addCurrentContact: (state, action) => {
      state.currentContact = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.loading = false;
        state.error = null;
      })
      .addCase(changeContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(changeContact.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(changeContact.fulfilled, (state, action) => {
        state.items = state.items.map((item) => {
          return item.id === state.currentContact.id
            ? { ...item, name: action.payload, number: action.payload }
            : item;
        });
        state.currentContact = null;
        state.loading = false;
      });
  },
});

export const { addCurrentContact } = contactsSlice.actions;

export default contactsSlice.reducer;
