import React, { useState, useEffect } from 'react';

function AuthorEditForm({ author, onSaveAuthor, onCancelEdit }) {
  const [editedAuthor, setEditedAuthor] = useState(author);

  useEffect(() => {
    setEditedAuthor(author);
  }, [author]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedAuthor({ ...editedAuthor, [name]: value });
  };

  const handleSaveAuthor = () => {
    onSaveAuthor(editedAuthor);
  };

  return (
    <div>
      <h2>Editar Autor</h2>
      <form>
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" name="name" value={editedAuthor.name} onChange={handleInputChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Nacionalidad:</label>
          <input type="text" name="nationality" value={editedAuthor.nationality} onChange={handleInputChange} className="form-control" />
        </div>
        <button type="button" onClick={handleSaveAuthor} className="btn btn-success">Guardar Cambios</button>
        <button type="button" onClick={onCancelEdit} className="btn btn-secondary">Cancelar</button>
      </form>
    </div>
  );
}

export default AuthorEditForm;
