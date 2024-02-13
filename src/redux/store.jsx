
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Reducers';

const store = configureStore({
  reducer: {
    auth: rootReducer,
    // Add other reducers here if you have multiple slices
  },
  // Optionally, you can configure middleware, enhancers, etc. here
});

export default store;
