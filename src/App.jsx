import React from 'react';
import './App.css';
import Navbar from './Navbar.jsx';
import Header from './Header.jsx';
import mainContent from './mainContent.jsx';
import Footer from './Footer.jsx';
import './layout.css';

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Header />
      <mainContent />
      <Footer />
    </div>
  );
}

export default App;
