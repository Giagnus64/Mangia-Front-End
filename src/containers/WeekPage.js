import React, { Component } from 'react';
import { connect } from 'react-redux';
import DayCardContainer from './DayCardContainer';
import fetchPlannedMeals from "../actions/fetchPlannedMeals";
import fetchUserRecipes from "../actions/fetchUserRecipes";
import deletePlannedMeal from "../actions/deletePlannedMeal";
import addPlannedMeal from '../actions/addPlannedMeal';
import searchByIngredient from '../actions/searchByIngredient';
import SearchContainer from './SearchContainer';
import addUserRecipe from '../actions/addUserRecipe';
import deleteUserRecipe from '../actions/deleteUserRecipe'

class WeekPage extends Component{

    componentDidMount() {
      this.props.getPlannedMeals(); 
      this.props.getUserRecipes();
      localStorage.setItem('user_id', 1)
    }

    addRecipeToDay = (mealObj) =>  {
        mealObj.user_id = this.props.user_id
        this.props.addRecipeToDay(mealObj);
    }

    getUserRecipeObjs = () => {
        return this.props.user_recipes.map((user_recipe) => {
            return {user_recipe_id: user_recipe.id, recipe_id: user_recipe.recipe_id  }
        })
    }

    userRecipeOptions = () => {
        return this.props.user_recipes.map((user_recipe) => {
            return <option key={user_recipe.id} value={user_recipe.recipe_id}>{user_recipe.recipe.title}</option>
        })
    }    

    render(){
        return (<>
        <SearchContainer 
            addRecipeToDay={this.addRecipeToDay} 
            getSearchResults={this.props.getSearchResults} 
            userRecipeObjs={this.getUserRecipeObjs()}
            addUserRecipe={this.props.addUserRecipe}
            deleteUserRecipe={this.props.deleteUserRecipe}
            />
        <DayCardContainer 
            planned_meals={this.props.planned_meals} 
            deletePlannedMeal={this.props.deletePlannedMeal} 
            userRecipeOptions={this.userRecipeOptions()} 
            addRecipeToDay={this.addRecipeToDay}
        /></>
        )
    }
}


const mapStateToProps = (state, props) => {

    return { user_recipes: state.user_recipes, user_id: state.user_id, username: state.username, planned_meals: state.planned_meals }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getPlannedMeals: () => dispatch(fetchPlannedMeals()),
        getUserRecipes: () => dispatch(fetchUserRecipes()),
        deletePlannedMeal: (mealID) => dispatch(deletePlannedMeal(mealID)),
        addRecipeToDay: (mealObj) => dispatch(addPlannedMeal(mealObj)),
        getSearchResults: (search_query) => dispatch(searchByIngredient(search_query)),
        addUserRecipe: (recipe_id) => dispatch(addUserRecipe(recipe_id)),
        deleteUserRecipe: (recipe_id) => dispatch(deleteUserRecipe(recipe_id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WeekPage)
