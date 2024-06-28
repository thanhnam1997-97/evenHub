import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from './reducer/authReducer';

const store = configureStore({
  reducer: {
    authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export default store;
