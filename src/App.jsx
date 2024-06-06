import React from 'react';
import './App.css';
import Navbar from './Navbar.jsx';
import Header from './Header.jsx';

import Footer from './Footer.jsx';
import './layout.css';

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
