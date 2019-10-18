import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import "./App.scss";
import { connect } from 'react-redux';
import { loginUser, logoutUser, createUser } from './actions/loginActions';
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
          (props) => props.token ? 
          <Redirect to='/home' /> : 
          <LoginPage loginUser={props.loginUser} createUser={props.createUser} />}
      />
        <Route
          path='/home'
          exact
          render={() => <WeekPage/>}
          
        />
      {/* <Route
        path='/profile'
        exact
        render={() => this.state.token ? <Profile currentUser={this.state.currentUser} editUserInfo={this.editUserInfo} deleteUser={this.deleteUser} /> : <Redirect to='/login' />}
      /> */}
      <Route
        path='/recipes'
        exact
        render={() => <RecipePage/>}
        // render={() => localStorage.token ? <RecipePage /> : <Redirect to='/login' />}
      />
      <Route
        exact
        path='/'
        render={() => <Redirect to='/login' />}
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
    loginUser: (creds) => dispatch(loginUser(creds)),
    logoutUser: () => dispatch(logoutUser),
    createUser: (creds) => dispatch(createUser(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
