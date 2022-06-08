import { combineReducers, configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/slices';

export const rootReducer = combineReducers({
	cars: carsReducer
});

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production',
});
console.log(process.env.NODE_ENV);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch