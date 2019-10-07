import React from 'react';
import '../assets/App.css';
import SideBar from './SideBar/SideBar.js';
import Footer from './Footer/Footer.js';
import News from './News/News.js';
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Music/Music.js";
import Settings from "./Settings/Settings.js";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./profile/PropfileContainer";
import HeaderContainer from "./Header/HeaderContainer";
import Login from "./Login/Login";


const App = () => {

  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <HeaderContainer/>
              <SideBar/>
              <div className="app-wrapper-content">
                  <Route path='/profile/:userId?' render={ () => <ProfileContainer /> } />
                  <Route path='/dialogs' render={ () => <DialogsContainer /> } />
                  <Route path='/news' component={News} />
                  <Route path='/music' component={Music} />
                  <Route path='/settings' component={Settings} />
                  <Route path='/users' render={ () => <UsersContainer />} />
                  <Route path='/login' render={ () => <Login />} />
              </div>
              <Footer/>
          </div>
      </BrowserRouter>
    );
};

export default App;
