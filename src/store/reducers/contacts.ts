import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  id: number | undefined;
  name: string | undefined;
  phone: string | undefined;
  email: string | undefined;
}

interface ContactState {
  items: Contact[];
  selected: Contact | null;
  isAddModalOpen: boolean;
  isEditModalOpen: boolean;
}

const initialState: ContactState = {
  items: [],
  selected: null,
  isAddModalOpen: false,
  isEditModalOpen: false
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    openAddModal(state) {
      state.isAddModalOpen = true;
    },
    closeAddModal(state) {
      state.isAddModalOpen = false;
    },
    openEditModal(state, action: PayloadAction<number>) {
      const contact = state.items.find(c => c.id === action.payload) || null;
      state.selected = contact;
      state.isEditModalOpen = true;
    },
    closeEditModal(state) {
      state.isEditModalOpen = false;
      state.selected = null;
    },
    addContact(state, action: PayloadAction<Contact>) {
      state.items.push(action.payload);
    },
    updateContact(state, action: PayloadAction<Contact>) {
      const index = state.items.findIndex(c => c.id === action.payload.id);
      if (index >= 0) {
        state.items[index] = action.payload;
      }
    },
    deleteContact(state, action: PayloadAction<number | undefined>) {
      if (typeof action.payload === 'number') {
        state.items = state.items.filter(c => c.id !== action.payload);
      }
    }
  }
});

export const {
  openAddModal,
  closeAddModal,
  openEditModal,
  closeEditModal,
  addContact,
  updateContact,
  deleteContact
} = contactSlice.actions;

export const contactReducer = contactSlice.reducer;
