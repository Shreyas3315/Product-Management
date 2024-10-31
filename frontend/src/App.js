import React from 'react';
import { BrowserRouter as Router,Route,Link,Routes } from 'react-router-dom';
import AddProduct from './Components/AddProduct';
import SearchProduct from './Components/SearchProduct';
import DeleteProduct from './Components/DeleteProduct';
import DisplayProduct from './Components/DisplayProduct';
import Home from './Components/Home';
function App() {
  return (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home Page</Link>
          </li>
          <li>
            <Link to='/add'>Add Product</Link>
          </li>
          <li>
            <Link to='/search'>Search Product</Link>
          </li>
          <li>
            <Link to='/delete'>Delete Product</Link>
          </li>
          <li>
            <Link to='/display'>Display All Products</Link>
          </li>
        </ul>
      </nav>
      
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/add' element={<AddProduct/>}></Route>
      <Route path='/search' element={<SearchProduct/>}></Route>
      <Route path='/delete' element={<DeleteProduct/>}></Route>
      <Route path='/display' element={<DisplayProduct/>}></Route>
    </Routes>
    </div>
  </Router>
  );
}

export default App;
