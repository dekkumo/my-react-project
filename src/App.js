import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import TodosPage from './components/pages/todoPage/TodosPage';
import { PostsPage } from './components/pages/todoPage/PostsPage';
import { Header } from './components/header/Header';

function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<TodosPage />} />
          <Route path='/posts' element={<PostsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
