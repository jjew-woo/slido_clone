import React from 'react';
import './App.css';
import Header from './Header';
import Body from './Body'
import PrivacyBanner from './PrivacyBanner';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Body />
        <PrivacyBanner />
        <Footer />
      </main>
    </div>
  );
}

export default App;
