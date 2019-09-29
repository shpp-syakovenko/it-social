import React from 'react';
import '../assets/App.css';
import Header from './Header/Header.js';
import SideBar from './SideBar/SideBar.js';
import Profile from './profile/Propfile.js';
import Footer from './Footer/Footer.js';
import News from './News/News.js';
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Music/Music.js";
import Settings from "./Settings/Settings.js";
import DialogsContainer from "./Dialogs/DialogsContainer";


const App = () => {

  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header/>
              <SideBar/>
              <div className="app-wrapper-content">
                  <Route path='/profile' render={ () => <Profile /> } />
                  <Route path='/dialogs' render={ () => <DialogsContainer /> } />
                  <Route path='/news' component={News} />
                  <Route path='/music' component={Music} />
                  <Route path='/settings' component={Settings} />
              </div>
              <Footer/>
          </div>
      </BrowserRouter>
    );
};

export default App;
