import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'Hello Next.js',
};

const homePageSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    changeHomePageTitle: (state, action) => {
      console.log(state, 'aaaaaaaa', action);
      state.title = action.payload.newTitle;
    },
  },
});

export const homePageData = (state) => state.home;

export const { changeHomePageTitle } = homePageSlice.actions;

export default homePageSlice.reducer;
