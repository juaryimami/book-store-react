import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';

const reducer = combineReducers({
  books: booksReducer,
});
export default configureStore({
  reducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
