import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import RecipePage from "./containers/RecipePage";
import "./App.scss";
import NavigationBar from "./components/Navbar";
import { Route, Switch, Redirect } from 'react-router-dom'
import WeekPage from './containers/WeekPage'
import NotFound from './components/NotFound'

function App() {
  
  return (
    <>
    <NavigationBar/>
      <Switch>
          {/* <Route
        path='/login'
        exact
        render={(props) => this.state.token ? <Redirect to='/home' /> : <LoginContainer currLogin={this.state} removeFormError={this.removeFormError} loginUser={this.loginUser} />}
      /> */}
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
        render={() => <Redirect to='/home' />}
      />

      <Route component={NotFound} />
    </Switch>
      
      <div className="footer"></div>
    </>
  );
}

export default App;
