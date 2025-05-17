import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './reducers/contacts';

export const store = configureStore({
  reducer: {
    addContact: contactReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
