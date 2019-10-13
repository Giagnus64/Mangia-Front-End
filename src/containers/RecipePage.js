import React, { Component } from 'react';
import {connect} from 'react-redux';
import fetchUserRecipes from "../actions/fetchUserRecipes";
import UserRecipeCardContainer from './UserRecipeCardContainer';
import { Section } from "react-bulma-components";
import RecipeForm from "../components/RecipeForm"

class RecipePage extends Component{
    state = {

    }

    componentDidMount = () => {
        this.props.getUserRecipes()
    }

    // showRecipes = () => {
    //     if(this.props.user_recipes.length === 0){
    //         return <h3>You have no recipes yet!</h3>
    //     } else{
    //         return this.props.user_recipes.map((recipeObj) => {
    //             return <h1>{recipeObj.recipe.title}</h1>
    //         })
    //     }
    // }
    // loginUserBtn = () => {
    //     this.props.loginUser(1)
    // }

    render(){
        return(
            <>
            <Section className="recipe-card-section">
                <UserRecipeCardContainer user_recipes={this.props.user_recipes} />
            </Section>
            <Section className="recipe-form-section">
                <RecipeForm />
            </Section>
            </>
            
            // <div>{this.showRecipes()}<button onClick={this.loginUserBtn}>Login User</button><div>{this.props.user_id === '' ? "not logged in" : `Logged in as ${this.props.user_id}`}</div></div>
        )
    }
}

const mapStateToProps = (state, props) => {

    return { user_recipes: state.user_recipes, user_id: state.user_id}
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        // loginUser: (user_id) => {
        //     dispatch({type: "LOGIN_USER", user_id: user_id})
        // },
        getUserRecipes: () => dispatch(fetchUserRecipes())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RecipePage)