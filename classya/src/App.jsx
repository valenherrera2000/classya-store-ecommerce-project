// App.jsx
import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import StoreDetails from './components/StoreDetails';
import Categories from './components/Categories';
import BottomDetails from './components/BottomDetails';
import Footer from './components/Footer';
import './css/App.css';

function App() {
  return (
    <>
      <header>
        <Header />
        <StoreDetails />
        <NavBar />
      </header>
      <main>
        <Categories />
        <BottomDetails />
      </main>
      <footer>
        <Footer />
      </footer>
      </>
  );
}

export default App;