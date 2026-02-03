import { Routes, Route } from 'react-router-dom';
import Header from  './components/common/Header'
import Products from './pages/ProductsPage';
import Home from './pages/HomePage';
import './App.css'

function App() {
  return (
    <>
      <Header title={'Every Day Market'} />
      <div>        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
      </div>
    </>
  )
}

export default App
