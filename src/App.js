import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import "./App.scss";
import { connect } from 'react-redux';
import { logoutUser } from './actions/loginActions';
import RecipePage from "./containers/RecipePage";
import NavigationBar from "./components/Navbar";
import WeekPage from './containers/WeekPage';
import NotFound from './components/NotFound';
import LoginPage from './containers/LoginPage';


function App(props) {
  
  return (
    <>
    <NavigationBar logout={props.logoutUser}/>
      <Switch>
        <Route
        path='/login'
        exact
        render={
          (props) => localStorage.token ? 
          <Redirect to='/home' /> : 
           <LoginPage />}
        />
        <Route
          path='/home'
          exact
          render={() => localStorage.token ? <WeekPage /> : <LoginPage/>}
          />
        <Route
        path='/recipes'
        exact
        render={() => localStorage.token ? 
          <RecipePage /> : <Redirect to='/login'/>}
          />
        <Route
        exact
        path='/'
        render={() => localStorage.token ?
           <Redirect to="/home"/> : 
           <Redirect to='/login'/>}
        />
        <Route component={NotFound} />
      </Switch>
      <div className="footer"></div>
    </>
  );
}
const mapStateToProps = (state, props) => {

  return { token:state.token, user_id: state.user_id, username: state.username }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    logoutUser: () => dispatch(logoutUser),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
