import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';
import statusReducer from './categories/categories';

const reducer = combineReducers({
  books: booksReducer, status: statusReducer,
});
export default configureStore({
  reducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
