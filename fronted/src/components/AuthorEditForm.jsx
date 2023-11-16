import React, { useState } from 'react';

function AuthorEditForm({ author, onSaveAuthor, onCancelEdit }) {
  const [editedAuthor, setEditedAuthor] = useState(author);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedAuthor({
      ...editedAuthor,
      [name]: value,
    });
  };

  const handleSaveAuthor = () => {
    onSaveAuthor(editedAuthor);
  };

  return (
    <div>
      <h2>Editar Autor</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={editedAuthor.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nationality">Nacionalidad:</label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            value={editedAuthor.nationality}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleSaveAuthor}>
          Guardar
        </button>
        <button className="btn btn-secondary" onClick={onCancelEdit}>
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default AuthorEditForm;
