import React, { useState } from 'react';

function AuthorForm() {
  const [newAuthor, setNewAuthor] = useState({ name: '', nationality: '' });
  const [authors, setAuthors] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAuthor({ ...newAuthor, [name]: value });
  };

  const handleAddAuthor = () => {
    // Agrega el nuevo autor a la lista de autores dentro del componente
    setAuthors([...authors, newAuthor]);
    setNewAuthor({ name: '', nationality: '' });
  };

  return (
    <div>
      <h2>Agregar Autor</h2>
      <form>
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" name="name" value={newAuthor.name} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Nacionalidad:</label>
          <input type="text" name="nationality" value={newAuthor.nationality} onChange={handleInputChange} className="form-control" />
        </div>
        <button type="button" onClick={handleAddAuthor} className="btn btn-success">
          Agregar Autor
        </button>
      </form>
    </div>
  );
}

export default AuthorForm;
