import React, {Component} from 'react';
import '../assets/App.css';
import SideBar from './SideBar/SideBar.js';
import Footer from './Footer/Footer.js';
import News from './News/News.js';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Music from "./Music/Music.js";
import Settings from "./Settings/Settings.js";
import UsersContainer from "./Users/UsersContainer";
import HeaderContainer from "./Header/HeaderContainer";
import Login from "./Login/Login";
import connect from "react-redux/es/connect/connect";
import {initialize} from "../redux/appReducer";
import Preloader from "./elements/Preloader/Preloader";
import {withSuspense} from "../hoc/WithSuspense";

const DialogsContainer = React.lazy(() => import("./Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./profile/PropfileContainer"));

class App extends Component {
  componentDidMount() {
    const {initialize} = this.props;
    initialize();
  }

  render() {
    const {initialization} = this.props;
    if (!initialization) {
      return <Preloader/>
    }
    return (

      <div className='app-wrapper'>
        <HeaderContainer/>
        <SideBar/>
        <div className="app-wrapper-content">
          <Switch>
            {/*<Redirect from="/" to="/profile" /> внутри Switch*/}
            <Route exact path='/' render={() => <Redirect to='/profile'/>}/>
            <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
            <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/login' render={() => <Login/>}/>
            <Route path='*' render={() => <div>404 page not found!!!</div>}/>
          </Switch>
        </div>
        <Footer/>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  initialization: state.app.initialization
});

export default withRouter(connect(mapStateToProps, {initialize})(App));
