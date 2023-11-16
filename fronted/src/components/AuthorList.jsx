import React from 'react';
import { Link } from 'react-router-dom';

function AuthorList({ authors, onDeleteAuthor, viewAuthorBooks, handleEditAuthor }) {
  return (
    <div className="container">
      <h2>Listado de Autores</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Nacionalidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.id}>
              <td>{author.name}</td>
              <td>{author.nationality}</td>
              <td>
                <Link to={`/author/edit/${author.id}`} className="btn btn-warning">
                  Editar
                </Link>
                <button onClick={() => onDeleteAuthor(author)} className="btn btn-danger">
                  Eliminar
                </button>
                <Link to={`/author/books/${author.id}`}>Ver Libros</Link> {/* Navega a la ruta AuthorBooks con el ID del autor */}

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AuthorList;
