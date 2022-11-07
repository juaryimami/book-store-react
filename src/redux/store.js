import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import booksReducer from './books/books';

const reducer = combineReducers({
  books: booksReducer,
});
export default configureStore({
  reducer,
});
