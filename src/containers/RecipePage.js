import React, { Component } from 'react';
import {connect} from 'react-redux';
import fetchUserRecipes from "../actions/fetchUserRecipes";
import submitNewRecipeToDB from "../actions/submitNewRecipeToDB"
import UserRecipeCardContainer from './UserRecipeCardContainer';
import { Section } from "react-bulma-components";
import RecipeForm from "../components/RecipeForm";

class RecipePage extends Component{
    state = {

    }

    componentDidMount = () => {
        this.props.getUserRecipes()
    }

    submitNewRecipe = (recipeObj) => {
        recipeObj.user_id  = this.props.user_id;
        recipeObj.recipe.author = this.props.username
        this.props.submitNewRecipe(recipeObj)
    }

    render(){
        return(
            <>
            <Section className="recipe-card-section">
                <UserRecipeCardContainer user_recipes={this.props.user_recipes} />
            </Section>
            <Section className="recipe-form-section">
                <RecipeForm submitNewRecipe={this.submitNewRecipe} />
            </Section>
            </>
            
        )
    }
}

const mapStateToProps = (state, props) => {

    return { user_recipes: state.user_recipes, user_id: state.user_id, username: state.username}
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getUserRecipes: () => dispatch(fetchUserRecipes()),
        submitNewRecipe: (recipeObj) => dispatch(submitNewRecipeToDB(recipeObj))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RecipePage)