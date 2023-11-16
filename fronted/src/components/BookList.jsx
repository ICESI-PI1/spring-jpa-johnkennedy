import React from 'react';

function BookList({ books, onEditBook, onDeleteBook }) {
  return (
    <div>
      <h2>Listado de Libros</h2>
      <ul className="list-group">
        {books.map((book) => (
          <li key={book.id} className="list-group-item">
            Título: {book.title} - Autor: {book.author} - Género: {book.genre}
            <button
              className="btn btn-warning"
              onClick={() => onEditBook(book)}
            >
              Editar
            </button>
            <button
              className="btn btn-danger"
              onClick={() => onDeleteBook(book)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
