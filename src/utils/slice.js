import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app ",
  initialState: {
    displaySideMenu: true,
    mostPopularVideos: undefined
  },
  reducers: {
    toggleSideMenu: (state, action) => {
      return { ...state, displaySideMenu: !state.displaySideMenu };
    },
    closeSideMenu: (state, action) => {
      return { ...state, displaySideMenu: false };
    },
    addMostPopularVideos: (state, action) => {
      return { ...state, mostPopularVideos: action.payload };
    },
  },
});

export const { toggleSideMenu, addMostPopularVideos, closeSideMenu } = appSlice.actions;
export default appSlice.reducer;
