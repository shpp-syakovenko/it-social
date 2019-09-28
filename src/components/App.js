import React from 'react';
import '../assets/App.css';
import Header from './Header/Header.js';
import SideBar from './SideBar/SideBar.js';
import Profile from './profile/Propfile.js';
import Footer from './Footer/Footer.js';
import Dialogs from "./Dialogs/Dialogs.js";
import News from './News/News.js';
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Music/Music.js";
import Settings from "./Settings/Settings.js";


const App = ({state, dispatch}) => {

  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header/>
              <SideBar/>
              <div className="app-wrapper-content">
                  <Route path='/profile' render={ () => <Profile profile={state.profile}  dispatch={dispatch} />} />
                  <Route path='/dialogs' render={ () => <Dialogs dialogs={state.dialogs}  dispatch={dispatch}/>} />
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
