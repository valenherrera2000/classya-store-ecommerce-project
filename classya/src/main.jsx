import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Categories from './components/Categories.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Checkout from './components/Checkout.jsx';
import CheckoutFinish from './components/FinishButton.jsx';
import { ShoppingCartProvider } from './context/ShoppingContext.jsx';
import App from './App.jsx';
import './css/index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/finish" element={<CheckoutFinish />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  </React.StrictMode>
);