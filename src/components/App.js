import React, {Component} from 'react';
import '../assets/App.css';
import SideBar from './SideBar/SideBar.js';
import Footer from './Footer/Footer.js';
import News from './News/News.js';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Music from "./Music/Music.js";
import Settings from "./Settings/Settings.js";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./profile/PropfileContainer";
import HeaderContainer from "./Header/HeaderContainer";
import Login from "./Login/Login";
import connect from "react-redux/es/connect/connect";
import {initialize} from "../redux/appReducer";
import Preloader from "./elements/Preloader/Preloader";


class App extends Component {
  componentDidMount() {
    const{initialize} = this.props;
    initialize();
  }
  render() {
    const {initialization} = this.props;
    if(!initialization){
      return <Preloader/>
    }
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer/>
          <SideBar/>
          <div className="app-wrapper-content">
            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/login' render={() => <Login/>}/>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialization: state.app.initialization
});

export default withRouter(connect(mapStateToProps, {initialize})(App));
