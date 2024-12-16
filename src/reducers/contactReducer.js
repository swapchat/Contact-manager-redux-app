import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.data.push({ ...action.payload, id: action.payload.id });
    },
    deleteContact: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    updateContact: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
  },
});

export const { addContact, deleteContact, updateContact } =
  contactSlice.actions;
export default contactSlice.reducer;
