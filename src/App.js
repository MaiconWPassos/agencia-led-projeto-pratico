import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyles />
      <Footer />
    </>
  );
}

export default App;
