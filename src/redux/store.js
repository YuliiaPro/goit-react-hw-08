import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contactsSlice";
import filtersSlice from "./filterSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filters: filtersSlice,
  },
});
