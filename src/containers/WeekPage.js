import React, { Component } from 'react';
import { connect } from 'react-redux';
import DayCardContainer from './DayCardContainer';
import fetchPlannedMeals from "../actions/fetchPlannedMeals";
import fetchUserRecipes from "../actions/fetchUserRecipes";
import deletePlannedMeal from "../actions/deletePlannedMeal";

class WeekPage extends Component{

    componentDidMount() {
      this.props.getPlannedMeals(); 
      this.props.getUserRecipes();
    }

    addRecipeToDay() {

    }

    favoriteRecipe() {

    }
    
    render(){
        return (
        <DayCardContainer planned_meals={this.props.planned_meals} deletePlannedMeal={this.props.deletePlannedMeal}/>
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
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WeekPage)
