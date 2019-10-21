import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import "./App.scss";
import { connect } from 'react-redux';
import { logoutUser } from './actions/loginActions';
import {Modal} from 'react-bulma-components';
import RecipePage from "./containers/RecipePage";
import NavigationBar from "./components/Navbar";
import WeekPage from './containers/WeekPage';
import NotFound from './components/NotFound';
import LoginPage from './containers/LoginPage';
import MyFooter from './components/Footer';
import RecipeModal from './components/RecipeModal'


class App extends Component {

  state = {
    modalOpen: false,
    modalRecipe: ''
  }

  openRecipeModal = (recipe) => {
    this.setState({
      modalOpen: true,
      modalRecipe: recipe
    })
  }
  closeModal = () => {
    this.setState({
      modalOpen: false,
      modalRecipe: ''
    })
  }

  render(){
    
    return (
      <>
        <NavigationBar logoutUser={this.props.logoutUser} />
        <Switch>
          <Route
            path='/login'
            exact
            render={
              () => localStorage.token ?
                <Redirect to='/home' /> :
                <LoginPage />}
          />
          <Route
            path='/home'
            exact
            render={() => localStorage.token ? <WeekPage openRecipeModal={this.openModal} /> : <LoginPage />}
          />
          <Route
            path='/recipes'
            exact
            render={() => localStorage.token ?
              <RecipePage openRecipeModal={this.openRecipeModal}  /> : <Redirect to='/login' />}
          />
          <Route
            exact
            path='/'
            render={() => localStorage.token ?
              <Redirect to="/home" /> :
              <Redirect to='/login' />}
          />
          <Route component={NotFound} />
        </Switch>
        <Modal show={this.state.modalOpen} onClose={this.closeModal}>
          <RecipeModal recipe={this.state.modalRecipe} />
        </Modal>
        <MyFooter />
      </>
    )
  }
  
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
