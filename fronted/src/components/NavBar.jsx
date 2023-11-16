import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate(); // Obtén la función de navegación

  const handleAddAuthorClick = () => {
    // Lleva al usuario a la página de agregar autor cuando se hace clic
    navigate('/author/new');
  };

  const handleAddBookClick = () => {
    navigate('/book/new');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/authors" className="nav-link">
            Autores
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/books" className="nav-link">
            Libros
          </Link>
        </li>
        <li className="nav-item">
          <button className="btn btn-primary" onClick={handleAddAuthorClick}>
            Agregar Autor
          </button>
        </li>
        <li className="nav-item">
          <button className="btn btn-success" onClick={handleAddBookClick}>
            Agregar Libro
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;





