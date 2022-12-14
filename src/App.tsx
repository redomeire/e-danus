import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import DetailProduk from './pages/Product/DetailProduk';
import Profile from './pages/Profile';
import Seller from './pages/Seller';
import Transaction from './pages/Transaction';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/seller' element={<Seller/>}/>
        <Route path='/transaction' element={<Transaction/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/product/detail' element={<DetailProduk/>}/>
      </Routes>
    </div>
  );
}

export default App;
