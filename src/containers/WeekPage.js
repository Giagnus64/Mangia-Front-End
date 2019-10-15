import React, { Component } from 'react';
import { connect } from 'react-redux';
import DayCardContainer from './DayCardContainer';
import fetchPlannedMeals from "../actions/fetchPlannedMeals";
import fetchUserRecipes from "../actions/fetchUserRecipes";
import deletePlannedMeal from "../actions/deletePlannedMeal";
import addPlannedMeal from '../actions/addPlannedMeal';
import RecipeCard from '../components/RecipeCard';

class WeekPage extends Component{

    componentDidMount() {
      this.props.getPlannedMeals(); 
      this.props.getUserRecipes();
    }

    addRecipeToDay = (mealObj) =>  {
        mealObj.user_id = this.props.user_id
        console.log(mealObj);
        this.props.addRecipeToDay(mealObj);
    }

    favoriteRecipe() {

    }
    userRecipeOptions = () => {
        return this.props.user_recipes.map((user_recipe) => {
            return <option key={user_recipe.id} value={user_recipe.recipe_id}>{user_recipe.recipe.title}</option>
        })
    }    

    render(){
        return (
        <DayCardContainer planned_meals={this.props.planned_meals} deletePlannedMeal={this.props.deletePlannedMeal} userRecipeOptions={this.userRecipeOptions()} addRecipeToDay={this.addRecipeToDay}/>
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
        addRecipeToDay: (mealObj) => dispatch(addPlannedMeal(mealObj))
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WeekPage)
