import { configureStore } from '@reduxjs/toolkit';
import type {} from 'redux-thunk/extend-redux';

import rootReducer from './reducers';
import { userService } from 'src/services/user';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([userService.middleware]),
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
