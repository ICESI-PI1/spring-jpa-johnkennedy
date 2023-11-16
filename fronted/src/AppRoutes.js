import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import AuthorList from './components/AuthorList';
import BookList from './components/BookList';
import AuthorForm from './components/AuthorForm';
import BookForm from './components/BookForm';
import AuthorEditForm from './components/AuthorEditForm';
import BookEditForm from './components/BookEditForm';
import AuthorBooks from './components/AuthorBooks ';
import authorsData from './components/dataTest/authorsData';


const authors = authorsData;
const handleEditAuthor = (editedAuthor) => {
  // Aquí puedes realizar la lógica para editar el autor y guardar los cambios
  // editedAuthor contiene los datos editados del autor
  console.log('Editar autor:', editedAuthor);
};
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthorList authors={authors} />} />
      <Route path="/author/new" element={<AuthorForm />} />
      <Route path="/author/edit/:id" element={<AuthorEditForm />} />
      <Route path="/author/books/:id" element={<AuthorBooks />} />
      <Route path="/authors" element={<AuthorList authors={authors} onEditAuthor={handleEditAuthor} />} />
      <Route path="/book/new" element={<BookForm />} />



    </Routes>
  );
}

export default AppRoutes;
