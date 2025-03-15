import { createSlice } from "@reduxjs/toolkit";

interface iMenu {
  activeMenu: string;
}
const initialState: iMenu = {
  activeMenu: "all",
};

const menuSlice = createSlice({
  name: "menuSlice",
  initialState,
  reducers: {
    updateValueActiveMenu: (value, actions) => {
      value.activeMenu = actions.payload;
    },
  },
});

export const { updateValueActiveMenu } = menuSlice.actions;
export default menuSlice.reducer;
