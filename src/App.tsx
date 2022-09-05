import React from 'react';
import './App.css';
import Header from './Header';
import Body from './Body'
import PrivacyBanner from './PrivacyBanner';

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Body />
        <PrivacyBanner />
      </main>
    </div>
  );
}

export default App;
