import homePageReducer from '../redux/reducer/homePageReducer';
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    homePage: homePageReducer
  },
  devTools: true,
})