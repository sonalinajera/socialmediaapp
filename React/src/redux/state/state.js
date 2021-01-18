import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../reducers/postsReduces/postsSlice';


export default configureStore({
  reducer: {
    posts: postsReducer
  }
})
