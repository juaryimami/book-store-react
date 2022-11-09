import React from 'react';
import AddBook from './AddBook';
import BookList from './BookList';

const MainBooks = () => (
  <div className="mainbook__container">
    <AddBook />
    <BookList />
  </div>
);

export default MainBooks;
