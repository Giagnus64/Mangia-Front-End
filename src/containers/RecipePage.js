import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUserRecipes, addUserRecipe, deleteUserRecipe} from "../actions/userRecipeActions";
import {submitNewRecipeToDB} from "../actions/recipeActions";
import UserRecipeCardContainer from './UserRecipeCardContainer';
import { Section, Heading, Box } from "react-bulma-components";
import RecipeForm from "../components/RecipeForm";

class RecipePage extends Component{

    componentDidMount = () => {
        this.props.getUserRecipes()
    }

    submitNewRecipe = (recipeObj) => {
        recipeObj.user_id  = localStorage.user_id;
        recipeObj.recipe.author = localStorage.username
        this.props.submitNewRecipe(recipeObj)
    }

    render(){
        return(
            <>
            <Section className="recipe-card-section">
                <Box>
                <Heading className="has-text-centered">Your Saved Recipes</Heading>
                <UserRecipeCardContainer 
                openRecipeModal={this.props.openRecipeModal}
                user_recipes={this.props.user_recipes}
                addUserRecipe={this.props.addUserRecipe}
                deleteUserRecipe={this.props.deleteUserRecipe} />
                </Box>
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
        submitNewRecipe: (recipeObj) => dispatch(submitNewRecipeToDB(recipeObj)),
        addUserRecipe: (recipe_id) => dispatch(addUserRecipe(recipe_id)),
        deleteUserRecipe: (recipe_id) => dispatch(deleteUserRecipe(recipe_id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RecipePage)