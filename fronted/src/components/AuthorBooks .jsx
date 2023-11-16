import React from 'react';
import { useParams } from 'react-router-dom';

function AuthorBooks({ authors, books }) {
  const { id } = useParams(); // Obtiene el parámetro de la URL (el ID del autor)
  
  // Busca el autor correspondiente en authorsData
  const author = authors.find((author) => author.id === Number(id));

  // Filtra los libros del autor
  const authorBooks = books.filter((book) => book.author === author.name);

  return (
    <div>
      <h2>Libros de {author.name}</h2>
      <ul>
        {authorBooks.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default AuthorBooks;
