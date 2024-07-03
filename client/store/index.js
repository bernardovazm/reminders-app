import { configureStore, createSlice } from "@reduxjs/toolkit";

const remindersSlice = createSlice({
  name: "reminders",
  initialState: [],
  reducers: {
    addReminder: (state, action) => {
      state.push({
        id: new Date().toISOString(),
        name: action.payload.name,
        date: action.payload.date,
      });
    },
    deleteReminder: (state, action) => {
      return state.filter((reminder) => reminder.id !== action.payload);
    },
  },
});

export const { addReminder, deleteReminder } = remindersSlice.actions;

const store = configureStore({
  reducer: {
    reminders: remindersSlice.reducer,
  },
});

export default store;
