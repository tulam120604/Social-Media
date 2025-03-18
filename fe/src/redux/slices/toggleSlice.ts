import { createSlice } from "@reduxjs/toolkit";

interface iStatus {
  status: boolean;
}
const initialState: iStatus = {
  status: true,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    updateStatus: (state: { status: boolean }) => {
      state.status = !state.status;
    },
  },
});

export const { updateStatus } = toggleSlice.actions;
export const toggleReducer = toggleSlice.reducer;