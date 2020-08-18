import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const Booklist = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails key={book.id} book={book} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No Books to read. Hello Free Time :)</div>
  );
};

export default Booklist;
