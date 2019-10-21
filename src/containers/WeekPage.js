import React, { Component } from 'react';
import { connect } from 'react-redux';
import DayCardContainer from './DayCardContainer';
import {fetchUserRecipes} from "../actions/userRecipeActions";
import {fetchPlannedMeals, addPlannedMeal, deletePlannedMeal} from "../actions/plannedMealActions";
import {searchByIngredient} from '../actions/recipeActions';
import SearchContainer from './SearchContainer';

let today = new Date(2019, 9, 12);
class WeekPage extends Component{

    componentDidMount() {
      this.props.getPlannedMeals(); 
      this.props.getUserRecipes();
    }

    addRecipeToDay = (mealObj) =>  {
        mealObj.user_id = localStorage.user_id
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
            openRecipeModal={this.props.openRecipeModal} 
            today={today}
            addRecipeToDay={this.addRecipeToDay} 
            getSearchResults={this.props.getSearchResults} 
            userRecipeObjs={this.getUserRecipeObjs()}
            />
        <DayCardContainer 
            today={today}
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
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WeekPage)
