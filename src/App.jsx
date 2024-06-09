import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.scss';
import MainComponent from './components/MainComponent/MainComponent';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <MainComponent />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
