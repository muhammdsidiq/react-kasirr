import Home from './components/pages/Home';
import Login from './components/pages/Login'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from './components/pages/Register';
import Checkout from './components/pages/Checkout';
import Pesanan from './components/pages/Pesanan';
import ProductList from './components/layout/ProductList';
// import './App.css'

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/pesanan' element={<Pesanan/>}/>
      <Route path='/product' element={<ProductList/>}/>
    </Routes>
  </BrowserRouter>
  
  )
};

export default App
  {/* <MainLayout>
 <Login />
 <Register/>
  </MainLayout> */}