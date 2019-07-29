import React from 'react';
import './App.css';
import Header from './components/header.js';
import SideBar from './components/sidebar.js';
import Content from './components/content.js';
import Footer from './components/footer.js';

const App = () => {
  return (
      <div className='app-wrapper'>
        <Header/>
        <SideBar/>
        <Content/>
        <Footer/>     
      </div>
    );
};

export default App;
