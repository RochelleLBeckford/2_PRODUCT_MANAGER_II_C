import React from 'react';
//& import bootswatch
import './bootstrap.min.css';
import NavBar from './components/NavBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import AllProducts from './components/AllProducts';
import AddProduct from './components/AddProduct';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Navigate to='/products' />} />
          <Route path='/products' element={<AllProducts /> } />
          <Route path='/products/new' element={<AddProduct />} />
          <Route path='/products/:id' element={<OneProduct />} />
          <Route path='/products/:id/edit' element={<EditProduct />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;