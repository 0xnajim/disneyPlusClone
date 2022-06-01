import { configureStore } from '@reduxjs/toolkit';
import movieSlice from '../features/movie/movieSlice';
import userSlice from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
    user: userSlice.reducer,
  },
});
