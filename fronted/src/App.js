import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import authorsData from './components/dataTest/authorsData';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './components/BookList';
import books from './components/dataTest/books'; // Importa la lista de libros
import AuthorList from './components/AuthorList';

function App() {
  const authors = authorsData;

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/*" element={<AppRoutes authors={authors} />} />
          <Route path="/books" element={<BookList books={books} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
